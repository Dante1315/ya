const express = require('express');
const router = express.Router();

const funkoController = require('../controllers/funkoController');

router.get('/', funkoController.list);
router.post('/add', funkoController.save);
router.get('/delete/:id_f', funkoController.delete);
router.get('/', funkoController.listt);
router.post('/ad', funkoController.ssave);

module.exports = router;