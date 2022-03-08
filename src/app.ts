import express from 'express'
import api from './api/v1'
import { errorHandler, notFound } from './middlewares'

const app = express()

app.use(express.json())

app.use('/api', api)

app.use(notFound)

app.use(errorHandler)

export default app
