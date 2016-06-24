'use strict';

var express = require('express');
var controller = require('./group.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
<<<<<<< HEAD
router.put('/:id', controller.addPhraseToGroup);
router.put('/addphrase/:id',  controller.addPhraseToGroup)

=======
router.put('/:id', controller.update);
>>>>>>> e71519b0f9fd7e04646b9dfa4161a0b1a7ae2ffb
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
