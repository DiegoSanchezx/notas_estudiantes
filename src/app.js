const express = require('express')
const cors= require ('cors')
const app = express();

const estudianteRoutes = require('./routes/estudiante.routes')

app.use(express.json())
app.use(cors())
app.use('/estudiantes',estudianteRoutes)


module.exports= app