var express = require('express');
var router = express.Router();
var controller = require('./studentController');

router.get('/', controller.getAllStudent);

router.get('/:name', controller.getOneStudentByName);

// router.put('/:name', controller.updateOneStudentByName);

// router.post('/', controller.createOneStudent);

module.exports = router;
