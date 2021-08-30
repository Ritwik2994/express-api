import { Router } from 'express';
import { body } from 'express-validator';
import { addStatus, viewStatus } from './controller'


const router: Router = Router();

// API


router.post('/add', addStatus)

router.get('/view', viewStatus);

export default router;
