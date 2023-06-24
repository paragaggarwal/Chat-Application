const express = require('express');
const http = require('http');
const socketio = require('socket.io');


const app = express();
const Server = http.createServer(app);
const io = socketio(Server);

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);


    socket.on('from_client', () => {
        console.log("event coming from client");
    });


    setInterval(() => {
        socket.emit('from_server');
         
    }, 2000);
  });
  

app.use('/', express.static(__dirname + '/public'));

Server.listen(3000, () => {
    console.log('Server started');
});