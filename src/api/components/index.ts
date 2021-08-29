import { Router } from 'express'

// import { AuthRoutes } from './auth/routes'
import authRoutes from './auth/routes'

//init components routes
export function registerApiRoutes(router: Router, prefix: String): void {
    router.use(`${prefix}/auth`, authRoutes)
}