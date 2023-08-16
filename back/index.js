import express from 'express'

import workoutRoutes from './routes/workouts.js'

const app = express()
const port = process.env.PORT || 2000

app.use(workoutRoutes)

app.listen(port)
