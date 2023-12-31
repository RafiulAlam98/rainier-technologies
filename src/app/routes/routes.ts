import { AdminRoutes } from '../modules/admin/admin.route'

import { AuthRoutes } from '../modules/auth/auth.route'
import { CourseRoutes } from '../modules/course/course.route'

import { UserRoutes } from '../modules/users/user.route'
import express from 'express'

const router = express.Router()
const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes.router,
  },
  {
    path: '/admins',
    route: AdminRoutes.router,
  },
  {
    path: '/auth',
    route: AuthRoutes.router,
  },
  {
    path: '/course',
    route: CourseRoutes.router,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
