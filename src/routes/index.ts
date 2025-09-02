import { Router } from 'express'

import { usersRoutes } from './users-routes'
import { sessionsRoutes } from './sessions-routes'
import { refundsRoutes } from './refunds-routes'

const routes = Router()

// Public Routes
routes.use("/users", usersRoutes)
routes.use("/sessions", sessionsRoutes)

// Private Routes
routes.use("/refunds", refundsRoutes)


export { routes }