import { Schema, model } from 'mongoose'
import { AdminModel, IAdmin } from './admin.interface'

const AdminSchema = new Schema<IAdmin>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    role: {
      type: String,
      enum: ['admin'],
      required: true,
    },
    permissions: {
      type: String,
      enum: ['view', 'update', 'delete'],
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

export const Admin = model<IAdmin, AdminModel>('admin', AdminSchema)
