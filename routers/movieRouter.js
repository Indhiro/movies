const express = require('express');
const movieRouter = express.Router();
const movieController = require('../controllers/movieController');

movieRouter.get('/get-movie', movieController.getMovie);
movieRouter.get('/get-movies', movieController.getMovies);
movieRouter.post('/upload-movie', movieController.uploadMovie);
movieRouter.put('/update-movie', movieController.updateMovie);
movieRouter.delete('/delete-movie', movieController.deleteMovie);

module.exports = movieRouter;