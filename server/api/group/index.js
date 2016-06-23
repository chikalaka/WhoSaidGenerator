'use strict';

var express = require('express');
var controller = require('./group.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.addPhraseToGroup);
router.put('/addphrase/:id',  controller.addPhraseToGroup)

router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
