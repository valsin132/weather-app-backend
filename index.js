import express from 'express'
import cors from 'cors'
import { connectToDb, PORT } from './db.js'
import searchRoutes from './routes/searchRoutes.js'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.static(path.join(__dirname, '../', 'public')))
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the CarRent app API</h1>')
})

app.use('/search', searchRoutes)

connectToDb()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  })
  .catch((err) => {
    console.error('Failed to connect to the database', err)
  })
