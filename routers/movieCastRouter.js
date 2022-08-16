const express = require('express');
const movieCastRouter = express.Router();
const movieCastController = require('../controllers/movieCastController');

movieCastRouter.get('/get-con', movieCastController.getMovieCast);
movieCastRouter.get('/get-cons', movieCastController.getAllMovieCast);
movieCastRouter.post('/upload-con', movieCastController.uplaodMovieCast);
movieCastRouter.put('/update-con', movieCastController.updateMovieCast);
movieCastRouter.delete('/delete-con', movieCastController.deleteMovieCast);
movieCastRouter.put('/get-all-movie', movieCastController.getAllMovie);
movieCastRouter.get('/get-all-cast', movieCastController.gettAllCast);

module.exports = movieCastRouter;