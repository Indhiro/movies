const db = require('../config/config');

class castModel {
    static getCast(req, res, next) {
        let id_cast = req.body.id_cast;
        let query = `SELECT * FROM movies.casts WHERE id_cast = ${id_cast}`;
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };

    static getCasts(req, res, next) {
        let query = `SELECT * FROM movies.casts`;
        db.query(query, function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    };
    static uploadCast(req, res, next) {
        let data = {
            id_cast: req.body.id_cast,
            name: req.body.name,
            birth_date: req.body.birth_date,
            height: req.body.height,
            age: req.body.age,
            phone_number: req.body.phone_number,
            nasionality: req.body.nasionality
        };
        let query = `INSERT INTO movies.casts SET ?`;
        db.query(query, data, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };

    static updateCast(req, res, next) {
        let { id_cast, name, birth_date, height, age, phone_number, nasionality } = req.body;
        if (!id_cast) res.send('Error, id tidak boleh kosong!');   

        let query = `UPDATE movies.casts SET `;
        if (name) query += ` name = '${name}',`;
        if (birth_date) query += ` birth_date = '${birth_date}',`;
        if (height) query += ` height = ${height},`;
        if (age) query += ` age = ${age},`;
        if (phone_number) query += `phone_number = ${phone_number},`;
        if (nasionality) query += `nasionality = ${nasionality},`;

        query = query.slice(0,-1);
        query += ` WHERE id_cast = ${id_cast}`;
        
        db.query(query, function(err, result, fields) {
            if (err) res.send('No cast updated!');
            res.send(result);
        });
    };

    static deleteCast(req, res, next) {
        let id_cast = req.body.id_cast;
        let query = `DELETE FROM movies.casts WHERE id_cast = ${id_cast}`;
        db.query(query, function (err, result, fields) {
            if (err) throw err;
            res.send(result);
        });
    };
};

module.exports = castModel;