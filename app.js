'use strict';

const http = require('http')
const createHandler = require('github-webhook-handler')
const handler = createHandler({ path: '/webhook', secret: 'myhashsecret' })
const r = require('rethinkdb');
let connection = null;

r.connect({
    db: 'popcubex'
}, function(err, conn) {
    console.log(`[${new Date()}] Started database`);
    connection = conn;
});

http.createServer((req, res) => {
  handler(req, res, (err) => {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(7777);

console.log(`[${new Date()}] Started Webhook server`);

handler.on('error', (err) => {
  console.error('Error:', err.message)
});

handler.on('pull_request', (event) => {
  let pr = event.payload

  switch (pr.action) {
    case 'opened':
      writePR(pr);
      r.table('pull_requests').insert(pr).run(connection, afterInsert);
      break;
    case 'closed':
      r.table('pull_requests').filter({number: pr.number}).delete().run(connection, afterDelete);
      break;
    default:
      // do nothing
      break;

  }

  console.log(`pull request ${event.payload.repository.name} - #${pr.number} was ${event.payload.action}`);
});

function writePR(pr){
  return new Promise((resolve, reject) => {
    r.table('pull_requests').filter({number: pr.number}).run(connection, (err, cursor) => {
      if( err ) return reject(err);
        cursor.toArray().then( data => {
          console.log('--->>', data )
          if( data.length > 0 ){
            console.log('Doing update!!');
            r.table('pull_requests').update(data[0].id, pr).run(connection, (err, value) => {
              if( err ) reject(err);
              else resolve(value);
            });
          }else {
            console.log('Creating new PR!!');
            r.table('pull_requests').insert(pr).run(connection, (err, value) => {
              if( err ) reject(err);
              else resolve(value);
            });
          }
        });
    });
  });
}

function afterInsert(err, value){
  if( err ) throw err;
  else console.log(`[${new Date()}] New written value: ${value}`);
}

function afterDelete(err, value){
  if( err ) throw err;
  else console.log(`[${new Date()}] Delete pull request value: ${value}`);
}
