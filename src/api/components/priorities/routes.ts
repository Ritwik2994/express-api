import { Router } from 'express';
import { body } from 'express-validator';
import { addPriorities, viewPriorities } from './controller'


const router: Router = Router();

// API


router.post('/add', addPriorities)

router.get('/view', viewPriorities);

export default router;
