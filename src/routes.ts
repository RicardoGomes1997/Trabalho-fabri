import { Router } from "express"

import authRoutes from '@app/Auth/controllers/routes'

const routes = Router()

routes.use(authRoutes)

export default routes
