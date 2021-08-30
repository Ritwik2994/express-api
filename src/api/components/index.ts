import { Router } from 'express'

// import { AuthRoutes } from './auth/routes'
import authRoutes from './auth/routes'
// import userRoutes from './user/routes'
import userRoleRoutes from './user-role/routes'
import statusRoutes from './status/routes'
import departmentRoutes from './departments/routes'
import ticketsRoutes from './tickets/routes'
import labelsRoutes from './labels/routes'
import prioritiesRoutes from './priorities/routes'
// import settingsRoutes from './settings/routes'


//init components routes
export function registerApiRoutes(router: Router, prefix: String): void {
    router.use(`${prefix}/auth`, authRoutes)
    // router.use(`${prefix}/users`, userRoutes)
    router.use(`${prefix}/user-roles`, userRoleRoutes)
    router.use(`${prefix}/departments`, departmentRoutes)
    router.use(`${prefix}/status`, statusRoutes)
    router.use(`${prefix}/tickets`, ticketsRoutes)
    router.use(`${prefix}/labels`, labelsRoutes)
    router.use(`${prefix}/priorities`, prioritiesRoutes)
    // router.use(`${prefix}/settings`, settingsRoutes)
    
}