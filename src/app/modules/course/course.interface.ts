import { Model } from 'mongoose'

export type ICourses = {
  name: string
  description: string
  price: string
  duration: string
  level: string
  topics: string[]
  schedule: {
    startDate: string
    endDate: string
    classDays: string[]
    classTime: string
  }
}

export type CourseModel = Model<ICourses>
