'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);
router.get('/12345/:id', controller.getUserGroups);
router.get('/12345', controller.usersDetails);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.put('/12345/:id', auth.isAuthenticated(), controller.addGroupToUser);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

module.exports = router;
