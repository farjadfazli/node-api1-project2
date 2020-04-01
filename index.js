const express = require('express');
const shortid = require('shortid');

const server = express();

server.use(express.json());

let users = [];

server.get('/', (req, res) => {
    res.status(200).json({hello: 'world'})
})

server.post('/users', (req, res) => {
    const userInfo = req.body;
    userInfo.id = shortid.generate();
    users.push(userInfo);
    res.status(201).json(userInfo)
})

server.get('/users', (req, res) => {
    res.status(200).json(users)
})

server.get('/hobbits', (req, res) => {
    const hobbits = [
      {
        id: 1,
        name: 'Samwise Gamgee',
      },
      {
        id: 2,
        name: 'Frodo Baggins',
      },
    ];
  
    res.status(200).json(hobbits);
  });
  

const PORT = 5001;

server.listen(PORT, () => 
    console.log(`\n *** API running on http://localhost:${PORT} *** \n`));