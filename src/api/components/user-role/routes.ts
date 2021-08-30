import { Router } from 'express';
import { body } from 'express-validator';
import { readUserRoles, createUserRoles } from './controller'


const router: Router = Router();

// API


router.post('/user-role/add', createUserRoles)

router.get('/user-role/view', readUserRoles);

export default router;
