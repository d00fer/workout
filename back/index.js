import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()
import workoutRoutes from './routes/workouts.js'

const app = express()

app.use(express.json())
app.use('/api/workouts', workoutRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {})
  })
  .catch((error) => {
    console.log(error)
  })
