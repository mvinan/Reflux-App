/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

// server 
const express = require('express');
const http = require('http');
const engine = require('socket.io');
const port = 3000
const app = express()

var data = [
  { id: 1, author: "Cosa uno", text: 'Comentario'},
  { id: 2, author: "Cosa dos", text: 'Comentario Dos'}
]

var server = http.createServer(app).listen(port, () => {
  console.log(`Escuchando socket en el puerto ${port}`)
});

var io = engine.listen(server)

io.on('connection', (socket)=>{
  socket.on('read', (err, res, ctx)=>{
    io.emit('data', data)
  })

  socket.on('sign', (sign) => {
    data.unshift(sign)
    io.emit('data', data)
  })
})

// server-end

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});
