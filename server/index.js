const express = require('express');
const {
  getAllMessages,
  sendMessages,
} = require('./db/query')
require('dotenv').config();

const PORT = process.env.PORT || 3001
const app = express();
app.use(express.json());

app.post('/sendMessages', sendMessages);
app.get('/getMessages', getAllMessages);

app.listen(PORT, () => {
  console.log('server running on port 3001')
})