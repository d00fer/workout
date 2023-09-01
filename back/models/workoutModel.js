import mongoose from 'mongoose'

const Schema = mongoose.Schema

const workoutSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    load: {
      type: Number,
      require: true,
    },
    reps: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true },
)

export default mongoose.model('Workout', workoutSchema)
