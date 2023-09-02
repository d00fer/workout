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
    app.listen(process.env.PORT, () => {
      console.log(`Listening on port ${process.env.PORT}`)
    })
  })
  .catch((e) => {
    console.log(e)
  })
