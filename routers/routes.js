const express = require('express');
const router = express.Router();
const castRouter = require('./castRouter');
const movieRouter = require('./movieRouter');

router.use('/movie', movieRouter);
router.use('/cast', castRouter);

module.exports = router;