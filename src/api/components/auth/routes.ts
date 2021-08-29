import { Router } from 'express';
import { body } from 'express-validator';
import { SignupController, LoginController } from './controller'


const router: Router = Router();

// API
router.post(
	'/signup',
	[body('email').exists().isEmail(), body('password').exists()],
	SignupController
);

router.post('/login', LoginController);

export default router;
