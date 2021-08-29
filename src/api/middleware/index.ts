import { Request, Response, NextFunction, Router, json } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { errorHandler } from '@utils';


export function registerMiddleware(router: Router): void {
  router.use(helmet())

  //assigning custom headers for use case
		router.use((_: Request, res: Response, next: NextFunction) => {
			res.header(
				'Access-Control-Allow-Header',
				'Origin X-Requested-With, Content-Type, Accept, Credentials, Set-Cookie'
			);
			res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
			next();
		});

  if (process.env.NODE_ENV === 'development') {
      router.use(cors({ origin: '*' }))
  } else {
      router.use(cors({ origin: ['http://localhost/50000'] }))
  }

  router.use(json())
  
}

export function registerErrorHandler(router: Router): void {
  router.use(errorHandler)
}