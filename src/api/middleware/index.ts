import { Router, json } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { errorHandler } from '@utils';


export function registerMiddleware(router: Router): void {
  router.use(helmet())

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