const express = require('express');
const router = express.Router();
const castRouter = require('./castRouter');
const movieRouter = require('./movieRouter');
const movieCastRouter = require('./movieCastRouter');

router.use('/movie', movieRouter);
router.use('/cast', castRouter);
router.use('/con', movieCastRouter);

module.exports = router;