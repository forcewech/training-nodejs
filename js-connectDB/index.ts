import express from 'express'
import databaseService from './database'
const app = express()
const port = 3000

databaseService
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})