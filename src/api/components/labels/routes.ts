import { Router } from 'express';
import { body } from 'express-validator';
import { addLabels, viewlabels } from './controller'


const router: Router = Router();

// API


router.post('/add', addLabels)

router.get('/view', viewlabels);

export default router;
