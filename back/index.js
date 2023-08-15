import express from 'express'

import workoutRoutes from './routes/workouts.js'

const app = express()
const port = process.env.PORT || 2000

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

app.use(workoutRoutes)

app.listen(port)
