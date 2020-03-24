const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const http = require('http')
const dotenv = require('dotenv');

dotenv.config();

const app = express()
const server = http.Server(app)

mongoose.connect(process.env.MONGOOSE_URL, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(cors())
app.use(express.json())
app.use(routes)

const port = process.env.PORT
server.listen(port)
console.log(`### Listening port: ${port} ###`)
