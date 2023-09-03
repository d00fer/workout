import express from 'express'
import {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} from '../controllers/workoutControllers.js'

const router = express.Router()
//get all workouts
router.get('/', getWorkouts)
//get workout by id
router.get('/:id', getWorkout)
//post a new workout
router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

export default router
