import { Router } from 'express';
import { body } from 'express-validator';
import { addDepartment, viewDepartment } from './controller'


const router: Router = Router();

// API


router.post('/add', addDepartment)

router.get('/view', viewDepartment);

export default router;
