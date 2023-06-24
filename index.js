const express = require('express');
const http = require('http');
const socketio = require('socket.io');


const app = express();
const Server = http.createServer(app);
const io = socketio(Server);

io.on('connection', (socket) => {
    console.log('a user connected', socket.id);


   socket.on('msg_send', (data) => {
    console.log(data);
    socket.emit('msg_rcvd', data);
  })

});
  

app.use('/', express.static(__dirname + '/public'));

Server.listen(3000, () => {
    console.log('Server started');
});