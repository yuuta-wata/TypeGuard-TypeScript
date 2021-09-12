import express from 'express'

import {TypeofTypeGuard} from './typeofTypeGuards'

const app = express()
const port = 3000

const num = 5
const str = "Hello TypeGuard"
const bool = true

app.get('/', (req, res) => {
  res.send(str)
})
app.listen(port,() => {
  console.log(`app listening at http://localhost:${port}`)
  TypeofTypeGuard(num)
  TypeofTypeGuard(str)
  TypeofTypeGuard(bool)
})