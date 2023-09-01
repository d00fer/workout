import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import workoutRoutes from './routes/workouts.js'

const app = express()
//bez tego nie ma szans na zapis json do DB
app.use(express.json)

app.use('/api/workouts', workoutRoutes)

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and listening on port: ${process.env.PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
  })
