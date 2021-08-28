import { Request, Response, NextFunction, Router } from 'express';
import AuthRoutes from './authentication';

const router: Router = Router();

router.use('/auth', AuthRoutes);

router.get('/', async (_: Request, res: Response, next: NextFunction) => {
	try {
		res.status(200).send({
			success: true
		});
	} catch (err) {
		next(err);
	}
});

export default router;
