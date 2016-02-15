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
      r.table('pull_requests').insert(pr).run(conn, afterInsert);
      break;
    case 'closed':

      break;
    default:
      // do nothing
      break;

  }

  console.log(`pull request ${event.payload.repository.name} - #${pr.number} was ${event.payload.action}`);
});


function afterInsert(err, value){
  if( err ) throw err;
  else console.log(`[${new Date()}] New written value: ${value}`);
}
