import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json({ mess: 'cos' })
})

export default router
