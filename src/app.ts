import express, { Application, Request, Response, NextFunction } from 'express'
import path from 'path'
import cors from 'cors'
import morgan from 'morgan'
import { errorHandler } from './helpers/error-handler'
import router from './domain/test/route/test.route.v1'
const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
)

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req: Request, res: Response) => {
  res.send('welcome to coding test')
})


// route registration
app.use('/api/v1/book', router)

app.use(errorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next()
  }
  res.status(404).json({
    message: 'Route not found',
    error: { message: 'Route not found' },
    data: undefined,
    success: false,
  })
})

export default app
