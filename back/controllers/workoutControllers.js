import Workout from '../models/workoutModel.js'

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
  //heare we need to have a look after
  try {
    const workout = await Workout.findById(id)
    res.status(200).json(workout)
  } catch (e) {
    res.status(404).json({ error: e.message })
    console.log('o kurwa o chuj')
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

export { createWorkout, getWorkouts, getWorkout }
