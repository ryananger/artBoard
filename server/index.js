require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const controller = require('./controller.js');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/search', function(req, res) {
  controller.searchPhotos(req, res);
});

app.get('/search/:num', function(req, res) {
  controller.searchPhotos(req, res, req.params.num);
})

app.get('/collection/:id', function(req, res) {
  controller.getCollection(req.params.id, res);
})

app.post('/users', function(req, res) {
  controller.createUser(req, res);
});

app.get('/users/:uid', function(req, res) {
  controller.getUser(req.params.uid, res);
});

app.post('/favorite', function(req, res) {
  controller.addFavorite(req, res);
});

app.put('/favorite', function(req, res) {
  controller.removeFavorite(req, res);
});

app.get('/boards/:uid', function(req, res) {
  controller.getBoards(req.params.uid, res);
});

app.post('/boards', function(req, res) {
  controller.createBoard(req, res);
});

app.put('/boards/add', function(req, res) {
  controller.addToBoard(req, res);
});

app.put('/boards/removeImage', function(req, res) {
  controller.removeFromBoard(req, res);
})

app.put('/boards/remove', function(req, res) {
  controller.removeBoard(req, res);
})

const PORT = 4001;

app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
