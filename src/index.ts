import "reflect-metadata";
import { createConnection } from 'typeorm' 
import * as  express from 'express'
import * as bodyParser from 'body-parser'
import mainRouter from './myRoutes'

const app = express()
createConnection()
app.use(bodyParser.json())
app.use(mainRouter)


app.listen(3000, () => {
    console.log('Server running on port 3000')
})
