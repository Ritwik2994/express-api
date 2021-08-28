import express, { Request, Response } from 'express';
import helmet from 'helmet';
import http from 'http';

import 'module-alias/register';
import { errorHandler, logger } from '@utils';
import routes from './api';

(async function main() {
	try {
		//initialising express server
		const app = express();
		const httpServer = http.createServer(app);

		//assigning port
		const PORT = process.env.PORT || 5000;

		//assigning custom headers for use case
		app.use((_: Request, res: Response, next) => {
			res.header(
				'Access-Control-Allow-Header',
				'Origin X-Requested-With, Content-Type, Accept, Credentials, Set-Cookie'
			);
			res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
			next();
		});

		app.use(express.json());
		app.use(helmet());

		//Routes
		app.use('/', routes);
		app.get('/test', (_, res) => res.status(200).send({ success: true }));
		app.get('*', (_, res) => res.status(404).send('404 Not Found'));
		app.use(errorHandler);

		// Starting the express server
		httpServer.listen(PORT);

		httpServer.on('listening', () => {
			logger.info(`node server is listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
		});

		//when server close then it will also close DB connection
		// httpServer.on('close', () => {
		//     logger.info('node server closed')
		// })
	} catch (err) {
		logger.error(err);
	}
})();
