const express = require('express');
const castRouter = express.Router();
const castController = require('../controllers/castController');

castRouter.get('/get-cast', castController.getCast);
castRouter.get('/get-casts', castController.getCasts);
castRouter.post('/upload-cast', castController.uploadCast);
castRouter.put('/update-cast', castController.updateCast);
castRouter.delete('/delete-cast', castController.deleteCast);

module.exports = castRouter;