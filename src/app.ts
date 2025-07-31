// src/app.ts
import express from 'express'
import eventsRouter from './routes/events'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

// Ini menghubungkan route /api/events
app.use('/api/events', eventsRouter)
console.log('Router /api/events registered')

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
