#! /usr/bin/node
'use strict';
const exec = require('child_process').exec;

exec('rethinkdb --http-port 8000', handleProcess);
setTimeout( () => {
  exec('node ./webhook.js', handleProcess);
  exec('node ./websocket.js', handleProcess);
  console.log('Servers running, go to work!');
}, 2000);


function handleProcess(error, stdout, stderr) {
  console.log('stdout: ', stdout);
  console.log('stderr: ', stderr);
  if (error !== null) {
      console.log('exec error: ', error);
  }
}
