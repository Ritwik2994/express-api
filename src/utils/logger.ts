import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { createLogger, format, transports } from 'winston';

const logDirectory = 'logs';

// Create a log directory if it does not exist
if (!existsSync(logDirectory)) {
	mkdirSync(logDirectory);
}

const errorLog = join(logDirectory, 'errors.log');
const combinedLog = join(logDirectory, 'combined.log');
const exceptionsLog = join(logDirectory, 'exceptions.log');

export const logger = createLogger({
	level: 'info',
	format: format.combine(
		format.timestamp({
			format: 'YYYY-MM-DD HH:mm:ss'
		}),
		format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
	),
	transports: [
		new transports.File({
			filename: errorLog,
			level: 'error'
		}),
		new transports.File({
			filename: combinedLog
		})
	],
	exceptionHandlers: [
		new transports.File({
			filename: exceptionsLog
		})
	]
});

//Logger during development
if (process.env.NODE_ENV !== 'production') {
	logger.add(
		new transports.Console({
			format: format.combine(
				format.colorize(),
				format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
			),
			level: 'debug'
		})
	);
}
