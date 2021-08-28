import { Request, Response, NextFunction } from 'express';
import PrettyError from 'pretty-error';

import { BadRequestError, UnauthorizedError, NotFoundError } from '@errors';
import { logger } from '@utils';

const pe = new PrettyError();

const errorHandler = (error: any, req: Request, res: Response, _: NextFunction) => {
	console.log('errorHandle', error);
	logger.error(`${req.method} - ${req.path}`);
	logger.error(process.env.NODE_ENV === 'production' ? error : pe.render(error));

	// taking name, messsage and details of an error from error function
	const { name, message, details } = error;

	// if error is a kind of BadRequestError => stsatus code = 400
	if (error instanceof BadRequestError) {
		return res.status(400).send({
			name,
			message,
			details
		});
	}

	// if error is a kind of UnauthorizedError => status code = 403
	if (error instanceof UnauthorizedError) {
		return res.status(403).send({
			name,
			message,
			details
		});
	}

	// if error is a kind of NOtFoundError => status code = 404
	if (error instanceof NotFoundError) {
		return res.status(404).send({
			name,
			message,
			details
		});
	}

	// else return server error => status code = 500
	return res.status(500).send({
		name,
		message,
		details
	});
};

export default errorHandler;
