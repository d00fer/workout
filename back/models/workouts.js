import mongoose from 'mongoose'

const { Schema, model } = mongoose

const WorkoutsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    reps: {
      type: Number,
      require: true,
    },
    load: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true },
)

const Workout = model('Workout', WorkoutsSchema)
export default Workout
