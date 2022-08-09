const movieModel = require('../models/movieModel');

class movieController {
    static getMovie(req, res, next) {
        movieModel.getMovie(req, res, next);
    };

    static getMovies(req, res, next) {
        movieModel.getMovies(req, res, next);
    };

    static uploadMovie(req, res, next) {
        movieModel.uploadMovie(req, res, next);
    };

    static updateMovie(req, res, next) {
        movieModel.updateMovie(req, res, next);
    };
    
    static deleteMovie(req, res, next) {
        movieModel.deleteMovie(req, res, next);
    };
};

module.exports = movieController;