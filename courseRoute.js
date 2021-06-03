var express = require('express');
var router = express.Router();
var controller = require('./courseController');

router.get('/', controller.getAllCourse);

// router.get('/:name', controller.getOneStudentByName);

// router.put('/:name', controller.updateOneStudentByName);

// router.post('/', controller.createOneStudent);

module.exports = router;
