#! /usr/bin/node
'use strict';

const r = require('rethinkdb');
let connection = null;

let connect = r.connect();

connect.then((conn) => {
  log('Connected to rethinkdb');
  r.dbCreate('popcubex').run(conn, (err, value) => {
    if( err && err.msg === 'Database `popcubex` already exists.'){
      log('Database `popcubex` exists');
      createTables(conn);
    }else if( err ){
      throw new Error(`[${new Date()}] Could not create db popcubex ${ err }`);
    }else {
      log('Created database');
      createTables(conn);
    }

  });
}).catch(err => {
  throw new Error(`[${new Date()}] Could not connect to rethinkdb due to error: ${err}`);
});

function createTables(conn){
   r.db('popcubex').tableCreate('pull_requests').run(conn, (err, value) => {
     if( err && err.msg === 'Table `popcubex.pull_requests` already exists.'){
       log('Table `pull_requests` exists');
       done()
     }else if( err ){
       throw new Error(`[${new Date()}] Could not create db popcubex ${ err }`);
     }else {
       log('Create table `pull_requests`')
       done()
     }
   });

}


function done(){
  log('All done');
  process.exit()
}

function log(msg){
  console.log(`[${new Date()}] ${msg}`);
}
