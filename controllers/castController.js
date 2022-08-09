const castModel = require('../models/castModel');

class castController {
    static getCast(req, res, next) {
        castModel.getCast(req, res, next);
    };

    static getCasts(req, res, next) {
        castModel.getCasts(req, res, next);
    };

    static uploadCast(req, res, next) {
        castModel.uploadCast(req, res, next);
    };

    static updateCast(req, res, next) {
        castModel.updateCast(req, res, next);
    };

    static deleteCast(req, res, next) {
        castModel.deleteCast(req, res, next);
    };
};

module.exports = castController;