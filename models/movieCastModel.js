const db = require('../config/config');

class movieCastModel {
    static getMovieCast(req, res, next) {
        let id = req.body.id;
        let query = `SELECT * FROM movies.movies_casts WHERE id = ${id}`;
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };

    static getAllMovieCast(req, res, next) {
        let query = `SELECT * FROM movies.movies_casts`;
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };

    static uplaodMovieCast(req, res, next) {
        let data = {
            id: req.body.id,
            id_movies: req.body.id_movies,
            id_cast: req.body.id_cast,
            notes: req.body.notes
        }
        let query = `INSERT INTO movies.movies_casts SET ? `;
        db.query(query, data, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };

    static updateMovieCast(req, res, next) {
        let { id, id_movies, id_cast, notes } = req.body;
        if (!id) res.send('Error, id tidak boleh kosong!');

        let query = `UPDATE movies.movies_casts SET `
        if (id_movies) query += ` id_movies = '${id_movies}',`;
        if (id_cast) query += ` id_cast = '${id_cast}',`;
        if (notes) query += ` notes = '${notes}',`;

        query = query.slice(0, -1);
        query += `WHERE id = ${id}`;

        db.query(query, function (err, result, fields) {
            if (err) res.send('No con updated!');
            res.send(result);
        });
    };

    static deleteMovieCast(req, res, next) {
        let id = req.body.id;
        let query = `DELETE FROM movies.movies_casts WHERE id = ${id}`;
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };

    static getAllMovie(req, res, next) {
        let id_movies = req.body.id_movies;
        let query = `SELECT a.id_movies, b.*, c.*
        FROM movies.movies_casts a
            JOIN movies.movies b
                ON a.id_movies = b.id_movies 
            join movies.casts c
                on a.id_cast = c.id_cast
        where a.id_movies = ${id_movies}`;
        
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            let obj = {
                id_movies: result[0].id_movies,
                title: result[0].title,
                director: result[0].director,
                release_date: result[0].release_date,
                is_publish: result[0].is_publish,
                notes: result[0].notes,
                casts: []
            }
            //UNTUK UPDATE CAST DI TABLE MOVIES
            let namaCast = ''
            //LOOP UNTUK CAST
            result.forEach(element => {
                let simp = {
                    id_cast: element.id_cast,
                    name: element.name,
                    birth_date: element.birth_date,
                    height: element.height,
                    age: element.age,
                    phone_number: element.phone_number,
                    nasionality: element.nasionality
                };
                namaCast += `${simp.name}, `
                obj.casts.push(simp);
            });
            namaCast = namaCast.slice(0, -2);
            //UPDATE CAST DARI TABLE MOVIES
            let query2 = `UPDATE movies.movies SET cast = '${namaCast}' WHERE id_movies = ${id_movies}`
            db.query(query2, function (err, result, fields) {
                if (err) throw err;
            });
            res.send(obj);
        });
    };

    static getAllCast(req, res, next) {
        let id_cast = req.body.id_cast;
        let query = `SELECT c.*, b.*
        FROM movies.movies_casts a
            JOIN movies.movies b
                ON a.id_movies = b.id_movies 
            join movies.casts c
                on a.id_cast = c.id_cast
        where a.id_cast = ${id_cast}`;
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            let obj = {
                id_cast: result[0].id_cast,
                name: result[0].name,
                birth_date: result[0].birth_date,
                height: result[0].height,
                age: result[0].age,
                phone_number: result[0].phone_number,
                nasionality: result[0].nasionality,
                movies: []
            }
            result.forEach(element => {
                let simp = {
                    id_movies: element.id_movies,
                    title: element.title,
                    director: element.director,
                    release_date: element.release_date,
                    notes: element.notes,
                    is_publish: element.is_publish,
                    cast: element.cast
                }
                obj.movies.push(simp);
            });
            res.send(obj);
        });
    };
};

module.exports = movieCastModel;
