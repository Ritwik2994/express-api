import express from 'express';
import http from 'http';

import 'module-alias/register';
import { logger } from '@utils';
import { Server } from './api/server'

(async function main() {
	try {
		//initialising express server
		// middleware + routes were implicitely integrated 
		const app: express.Application = new Server().app
		const httpServer = http.createServer(app);
		
		//assigning port
		const PORT = process.env.PORT || 5000;

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
