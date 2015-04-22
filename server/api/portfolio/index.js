'use strict';

var express = require('express');
var controller = require('./portfolio.controller');
var uploadController = require('./portfolio.upload.controller');
var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
//Upload files
router.post('/upload', uploadController.upload);
module.exports = router;