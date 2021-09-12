import express from 'express'

import {Reset} from './typeofTypeGuards'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello TypeGuard')
})
app.listen(port,() => {
  console.log(`app listening at http://localhost:${port}`)
})