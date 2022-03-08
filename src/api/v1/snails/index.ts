import express, { Response, Request, NextFunction } from 'express'

const router = express.Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.status(201)
  res.json(['🐌', '🐌', '🐌'])
})

export default router
