import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'

import connectDB from './connectDB.js'
//import Book from './models/Books.js'

const PORT = process.env.PORT || 8000

connectDB()
const app = express()
//man in the middle
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//our DB connection

app.get('/', (req, res) => {
  res.json('fuck you')
})

app.listen(PORT, () => {
  console.log(`i am listening on port: ${PORT}`)
})
