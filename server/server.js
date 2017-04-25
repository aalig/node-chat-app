const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

var publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

// Express makes it easy to setup http server
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

// Configure express static middleware
app.use(express.static(publicPath));

//io.on() lets you register a new event listner. We can listen to a specific event and do something 
// when that event happens
io.on('connection', (socket) => {
    console.log('New user connected');

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
