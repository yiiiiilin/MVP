const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
const {
  getAllMessages,
  sendMessages,
} = require('./db/query')
require('dotenv').config();

const PORT = process.env.PORT || 3001
const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  //socket.join('room');

  socket.on('send_message', (data) => {
    //console.log(data);
    socket.broadcast.emit('receive_message', {...data, id: socket.id}); // data.id === _x_KXcmDUjjBqb-_AAA9
  })

  socket.on('disconnect', () => {
    console.log('a user disconnected', socket.id)
  })
})

server.listen(PORT, () => {
  console.log('Server running on port 3001')
})

// app.post('/sendMessages', sendMessages);
// app.get('/getMessages', getAllMessages);

// app.listen(PORT, () => {
//   console.log('server running on port 3001')
// })