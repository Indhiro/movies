const movieCastModel = require('../models/movieCastModel');

class movieCastController {
    static getMovieCast(req, res, next) {
        movieCastModel.getMovieCast(req, res, next);
    };

    static getAllMovieCast(req, res, next) {
        movieCastModel.getAllMovieCast(req, res, next);
    };

    static uplaodMovieCast(req, res, next) {
        movieCastModel.uplaodMovieCast(req, res, next);
    };

    static updateMovieCast(req, res, next) {
        movieCastModel.updateMovieCast(req, res, next);
    };

    static deleteMovieCast(req, res, next) {
        movieCastModel.deleteMovieCast(req, res, next);
    };

    static getAllMovie(req, res, next) {
        movieCastModel.getAllMovie(req, res, next);
    };

    static gettAllCast(req, res, next) {
        movieCastModel.getAllCast(req, res, next);
    };
};

module.exports = movieCastController;