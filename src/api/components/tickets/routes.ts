import { Router } from 'express';
import { body } from 'express-validator';
import { addTickets, viewTickets } from './controller'


const router: Router = Router();

// API


router.post('/add', addTicket)

router.get('/view', viewTickets);

export default router;
