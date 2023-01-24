require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const controller = require('./controller.js');
const app = express();
const {User, Board} = require('./db.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/featured', function(req, res) {
  controller.getFeatured(res);
});

app.get('/collection/:id', function(req, res) {
  controller.getCollection(req.params.id, res);
})

app.post('/users', function(req, res) {
  User.create(req.body)
    .then(function(response) {
      console.log(response);

      res.status(201);
      res.send('User created.');
    })
});

const PORT = 4001;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
