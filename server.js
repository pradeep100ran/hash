'use strict';

const express = require('express');
const { Server } = require('ws');

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    
    var anysize = 256;//the size of string 
var charset = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; //from where to create
result="";
for( var i=0; i < anysize; i++ )
        result += charset[Math.floor(Math.random() * charset.length)];
console.log(result);

    client.send(result);
  });
}, 1);
