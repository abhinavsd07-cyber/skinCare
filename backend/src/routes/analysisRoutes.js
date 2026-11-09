const express = require('express');
const router = express.Router();
const { analyzeFace } = require('../controllers/analysisController');

// Define route for face analysis
router.post('/analyze-face', analyzeFace);

module.exports = router;
