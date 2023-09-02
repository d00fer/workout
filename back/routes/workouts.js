import express from 'express'
import {
  createWorkout,
  getWorkouts,
  getWorkout,
} from '../controllers/workoutControllers.js'

const router = express.Router()
//get all workouts
router.get('/', getWorkouts)
//get workout by id
router.get('/:id', getWorkout)
//post a new workout
router.post('/', createWorkout)

router.delete('/:id', (req, res) => {})

router.patch('/:id', (req, res) => {})

export default router
