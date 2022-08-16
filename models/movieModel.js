const db = require('../config/config');

class movieModel {
    static getMovie(req, res, next) {
        let id_movies = req.body.id_movies;
        let query = `SELECT * FROM movies.movies WHERE id_movies = ${id_movies}`;
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };

    static getMovies(req, res, next) {
        let query = `SELECT * FROM movies.movies `;
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };

    static uploadMovie(req, res, next) {
        let data = {
            id_movies: req.body.id_movies,
            title: req.body.title,
            director: req.body.director,
            release_date: req.body.release_date,
            notes: req.body.notes,
            is_publish: req.body.is_publish,
            cast: req.body.cast
        }
        let query = `INSERT INTO movies.movies SET ? `;
        db.query(query, data, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };

    static updateMovie(req, res, next) {
        let { id_movies, title, director, release_date, notes, is_publish, cast } = req.body;
        if (!id_movies) res.send('Error, id tidak boleh kosong!');

        let query = `UPDATE movies.movies SET `
        if (title) query += ` title = '${title}',`;
        if (director) query += ` director = '${director}',`;
        if (release_date) query += ` release_date = '${release_date}',`;
        if (notes) query += ` notes = '${notes}',`;
        if (is_publish) query += ` is_publish = '${is_publish}',`;
        if (cast) query += ` cast = '${cast}',`;
        if (id_cast) query += ` id_cast = ${id_cast},`;

        query = query.slice(0, -1);
        query += `WHERE id_movies = ${id_movies}`;

        db.query(query, function (err, result, fields) {
            if (err) res.send('No movies updated!');
            res.send(result);
        });
    };

    static deleteMovie(req, res, next) {
        let id_movies = req.body.id_movies;
        let query = `DELETE FROM movies.movies WHERE id_movies = ${id_movies}`;
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };
};

module.exports = movieModel;

//module.exports = { movieModel };
// maka di controller harus const { movieModel } = require('../models/movieModel');