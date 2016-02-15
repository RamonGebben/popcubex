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
  console.log('Received a pull request event for %s to %s',
    event.payload.repository.name,
    event.payload.ref)
});

handler.on('issues', (event) => {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title);
});
