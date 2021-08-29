import { Request, Response, NextFunction, Router } from 'express';

import { registerApiRoutes } from './components';
import { registerMiddleware, registerErrorHandler } from './middleware';



export function initRestRoutes(router: Router): void {
	//prefix for url
	const prefix: string = '/api'

	router.get('/', (req: Request, res: Response) => res.send('Working'))
	router.get(prefix,  async (_: Request, res: Response, next: NextFunction) => {
		try {
			res.status(200).send({
				success: true,
				message: 'hello world'
			});
		} catch (err) {
			next(err);
		}
	})

	registerMiddleware(router)
	registerApiRoutes(router, prefix)
	registerErrorHandler(router)
}
