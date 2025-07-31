// src/routes/events.ts
import { Router } from 'express'

const router = Router()

// route GET /api/events
// Dummy response, nanti diganti pakai database
router.get('/', async (req, res) => {
  const { search } = req.query

  const events = [
    {
      id: '1',
      name: 'React Conf',
      location: 'Jakarta',
      date: '2025-08-10',
      time: '10:00',
      price: 50000,
      description: 'Konferensi tentang React dan ekosistemnya',
    },
    {
      id: '2',
      name: 'Tech Expo',
      location: 'Bandung',
      date: '2025-09-05',
      time: '14:00',
      price: 0,
      description: 'Pameran teknologi dan startup',
    },
  ]

  let filtered = events

  if (search) {
    const keyword = (search as string).toLowerCase()
    filtered = events.filter((e) =>
      e.name.toLowerCase().includes(keyword) ||
      e.location.toLowerCase().includes(keyword)
    )
  }

  res.json(filtered)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params

  // Dummy data sementara (nanti kamu ganti pakai DB)
  const events = [
    {
      id: '1',
      name: 'React Conf',
      location: 'Jakarta',
      date: '2025-08-10',
      time: '10:00',
      price: 50000,
      description: 'Konferensi tentang React dan ekosistemnya',
    },
    {
      id: '2',
      name: 'Tech Expo',
      location: 'Bandung',
      date: '2025-09-05',
      time: '14:00',
      price: 0,
      description: 'Pameran teknologi dan startup',
    },
  ]

  const event = events.find((e) => e.id === id)

  if (!event) {
    return res.status(404).json({ message: 'Event not found' })
  }

  res.json(event)
})

export default router
