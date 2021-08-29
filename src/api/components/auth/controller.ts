import { handleValidationErrors } from '@utils';
import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';


export async function LoginController(_: Request, res: Response, next: NextFunction) {
	try {
		return res.status(200).send({
			success: true
		});
	} catch (err) {
		next(err);
	}
}


export async function SignupController(req: Request, res: Response, next: NextFunction) {
    try {
        handleValidationErrors(req);
        res.status(200).send({
            success: true
        });
    } catch (err) {
        next(err);
    }
}