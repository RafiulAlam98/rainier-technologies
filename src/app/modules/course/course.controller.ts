import { Request, Response } from 'express'

import { catchAsync } from '../../../shared/catchAsync'
import httpStatus from 'http-status'
import { sendResponse } from '../../../shared/sendResponse'
import { CourseService } from './course.service'

const createCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.createCourses(req.body)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'The course has been added successfully',
    data: result,
  })
})
const getAllCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.getAllCourses()
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Courses retrieved Successfully',
    data: result,
  })
})
const getSingleCourses = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await CourseService.getSingleCourses(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course retrieved Successfully',
    data: result,
  })
})

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id
  const updatedData = req.body
  const result = await CourseService.updateCourses(id, updatedData)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course updated successfully',
    data: result,
  })
})

const deleteCourses = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await CourseService.deleteCourses(id)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course deleted successfully',
    data: result,
  })
})

export const CourseController = {
  createCourses,
  getAllCourses,
  getSingleCourses,
  updateCourse,
  deleteCourses,
}
