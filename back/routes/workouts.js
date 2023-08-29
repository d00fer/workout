import express from 'express'

const router = express.Router()
//GET all workouts
router.get('/', (req, res) => {
  res.json({ msg: 'all workouts!' })
})

router.get('/:id', (req, res) => {
  res.json({ msg: 'specific workout' })
})

export default router
