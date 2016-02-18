'use strict';

const app = require('express')();
const http = require('http').Server(app);
const fs = require('fs');
const io = require('socket.io')(http);

const pull_requests = JSON.parse(fs.readFileSync(__dirname +'/mock-data/pull-requests.json'));

app.get('/', function(req, res){
  res.sendfile('./build/index.html');
});

var connectedClients = [];

io.on('connection', function(socket) {
  console.log('client has connected');
  socket.emit('connected', 'ewjdewoidjwo');

  socket.emit('pull_requests', pull_requests);

  socket.on('message', function(msg) {
    console.log(msg);
  });

  socket.on('disconnect', function() {
    console.log('client has disconnected')
  });
});

http.listen(4444, function() {
  console.log('listening on *: 4444');
});
