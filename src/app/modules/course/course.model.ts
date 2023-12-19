import { Schema, model } from 'mongoose'
import { CourseModel, ICourses } from './course.interface'

const CourseSchema = new Schema<ICourses>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    topics: {
      type: [String],
      required: true,
    },
    schedule: {
      startDate: {
        type: String,
        required: false,
      },
      endDate: {
        type: String,
        required: false,
      },
      classDays: {
        type: [String],
        required: false,
      },
      classTime: {
        type: String,
        required: false,
      },
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

export const Courses = model<ICourses, CourseModel>('courses', CourseSchema)
