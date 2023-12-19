import { ENUM_USER_ROLE } from '../../../enums/user'
import auth from '../../middlewares/auth'

import express from 'express'
import { CourseController } from './course.controller'

const router = express.Router()

router.post('/', auth(ENUM_USER_ROLE.ADMIN), CourseController.createCourses)
router.get('/', CourseController.getAllCourses)
router.get('/:id', CourseController.getSingleCourses)

router.patch('/:id', auth(ENUM_USER_ROLE.ADMIN), CourseController.updateCourse)
router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN),
  CourseController.deleteCourses,
)

export const CourseRoutes = {
  router,
}
