'use strict';

const should = require('should');
const io = require('socket.io-client');

const socketURL = 'http://localhost:4444';

// const client = {
//   'id': 'depiwdjweoif'
// };

// describe('Websocket Server Test', () => {

  // it('Should be able to connect and receive an id', (done) => {
    let client = io.connect(socketURL);

    client.on('connected', (id) => {
      console.log(`I have being assigned id: ${ id }`);
      client.emit('message', `I received: ${id}`);
    });

    // client.disconnect();

    // client.on('news', (news) => {
    //   console.log( news );
    // });

    // done();
//   });
// });
