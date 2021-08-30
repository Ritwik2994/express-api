import { handleValidationErrors } from '@utils';
import { Request, Response, NextFunction } from 'express';
import { body } from 'express-validator';


// export class PrioritiesController {

    export async function addPriorities(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { email, password } = req.body
            
            //checks wheather email is in the db or not

            //if user not found or credintials not matched then throw error

            return res.send('hello from PrioritiesController => addPriorities')

            //return user

        } catch (err) {
            return next(err)            
        }
    }

    export async function viewPriorities(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { email, firstname, lastname, password } = req.body
            
            //checks wheather email is in the db or not

            return res.send('hello from PrioritiesController => viewPriorities')

            //insert newUser value into db with help of usermodel 
            // const newUser = new User(
            //     email,
            //     firstname,
            //     lastname,
            //     password,
            //     true
            // )

            //create userRole for new user


            //return status 201 ()user registered successfully)
            
        } catch (err) {
            return next(err)            
        }
    }
// }
 

