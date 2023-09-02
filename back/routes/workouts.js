import express from 'express'
import Workout from '../models/workouts.js'
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ msg: 'GET all workouts!' })
})

router.get('/:id', (req, res) => {
  res.json({ msg: 'GET specific workout' })
})

router.post('/', async (req, res) => {
  const { title, load, reps } = req.body
  try {
    const workout = await Workout.create({ title, load, reps })
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

router.delete('/:id', (req, res) => {
  res.json({ msg: 'DELETE specific workout' })
})

router.patch('/:id', (req, res) => {
  res.json({ msg: 'UPDATE specific workout' })
})

export default router
