import Workout from '../models/workoutModel.js'
import mongoose from 'mongoose'

//get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 })
    res.status(200).json(workouts)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}
//get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no workout of this id' })
  }
  try {
    const workout = await Workout.findById(id)
    res.status(200).json(workout)
  } catch (e) {
    res.status(404).json({ error: e.message })
  }
}
//create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}
//update workout
const updateWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'no workout of this id' })
  }

  try {
    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      },
    )
    res.status(200).json(workout)
  } catch (e) {
    return res.status(400).json({ error: e.message })
  }
}
//delete workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: ' no workout to delete!' })
  }
  const workout = await Workout.findOneAndDelete({ _id: id })
  if (!workout) {
    return res.status(400).json({ error: 'nothing like this on server' })
  }
  res.status(200).json(workout)
}

export { createWorkout, getWorkouts, getWorkout, updateWorkout, deleteWorkout }
