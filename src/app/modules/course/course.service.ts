import ApiError from '../../errors/ApiError'

import httpStatus from 'http-status'
import { ICourses } from './course.interface'
import { Courses } from './course.model'

const createCourses = async (payload: ICourses) => {
  const result = await Courses.create(payload)
  return result
}
const getAllCourses = async () => {
  const result = await Courses.find()
  return result
}

const getSingleCourses = async (id: string) => {
  const result = await Courses.findById(id)

  return result
}

const getCoursesById = async (id: string) => {
  const result = await Courses.find({ id })

  return result
}

const updateCourses = async (
  id: string,
  paylod: ICourses,
): Promise<ICourses | null> => {
  const result = await Courses.findOneAndUpdate({ _id: id }, paylod, {
    new: true,
  })
  return result
}

const deleteCourses = async (id: string) => {
  const existingCourse = await Courses.findById(id)
  if (!existingCourse) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Courses Not Found and Deletion Unsuccessfull',
    )
  }
  const result = Courses.findByIdAndDelete(id)
  return result
}

export const CourseService = {
  createCourses,
  getAllCourses,
  updateCourses,
  deleteCourses,
  getCoursesById,
  getSingleCourses,
}
