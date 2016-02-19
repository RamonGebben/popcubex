'use strict';

const app = require('express')();
const http = require('http').Server(app);
const fs = require('fs');
const io = require('socket.io')(http);
const r = require('rethinkdb');
let connection = null;

// const pull_requests = JSON.parse(fs.readFileSync(__dirname +'/mock-data/pull-requests.json'));

app.get('/', function(req, res){
  res.sendfile('./build/index.html');
});

function getPullRequests(holaback){
  r.table('pull_requests').run(connection, (err, cursor) => {
      cursor.toArray().then(arr => {
        holaback(arr);
      });
  });
};

var connectedClients = [];

io.on('connection', function(socket) {
  console.log(`[${new Date()}] client has connected`);
  socket.emit('connected', 'ewjdewoidjwo');

  getPullRequests( pull_requests => {
    socket.emit('pull_requests', pull_requests);
  });

  socket.on('message', function(msg) {
    console.log(`[${new Date()}] ${msg}`);
  });

  socket.on('disconnect', function() {
    console.log(`[${new Date()}] client has disconnected`);
  });
});

http.listen(4444, function() {
  console.log('listening on *: 4444');
});

function onDbConnect(conn){
  console.log(`[${new Date()}] db connected`);
  connection = conn;
  listenForChanges(conn);
}

function listenForChanges(conn){
  console.log(`[${new Date()}] listening for changes`);
  r.table('pull_requests').changes().run(conn, function(err, cursor) {
    if( err ) {
      console.error(err);
    }else {
      cursor.each(data => {
        console.log(`[${new Date()}] Change detacted`);
        refreshPullRequests();
      });
    }
  });
}

function refreshPullRequests(){
  console.log(`[${new Date()}] refreshing pull requests`);
  getPullRequests((pull_requests) => {
    console.log(`[${new Date()}] emitting new pull requests`);
    io.sockets.emit('pull_requests', pull_requests);
  });
}

r.connect({
    db: 'popcubex'
}).then(onDbConnect);
