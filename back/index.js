import express from 'express'

import workoutRoutes from './routes/workouts.js'

const app = express()

const port = process.env.PORT || 2000

//Just some example of middleware
//printing url path in to the node js console.log()
app.use((req, res, next) => {
  console.log(req.path)
  next()
})

app.use('/api/workouts', workoutRoutes)

app.listen(port)
