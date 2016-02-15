'use strict';

const http = require('http')
const createHandler = require('github-webhook-handler')
const handler = createHandler({ path: '/webhook', secret: 'myhashsecret' })

http.createServer(function (req, res) {
  handler(req, res, (err) => {
    res.statusCode = 404
    res.end('no such location')
  })
}).listen(7777);

handler.on('error', (err) => {
  console.error('Error:', err.message)
});

handler.on('pull_request', (event) => {
  let pr = event.payload
  console.log(`pull request ${event.payload.repository.name} - #${pr.number} was ${event.payload.action}`);
});
