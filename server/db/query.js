const db = require('./db');

const sendMessages = async (req, res) => {
  await db.findOneAndUpdate(
    {
      time: req.body.time
    },
    {
      name: req.body.name,
      message: req.body.message,
      time: req.body.time
    },
    {upsert: true}
  ).then((data) => res.send(data)
  ).catch((err) => console.log(err));
}

const getAllMessages = async (req, res) => {
  await db.find({})
    .then((data) => res.send(data))
    .catch((err) => console.log(err));
}


module.exports = {
  sendMessages,
  getAllMessages
}