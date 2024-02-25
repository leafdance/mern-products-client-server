import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import template from './../template.js'
import productRoutes from './routes/product.routes.js'


const app = express()

app.get('/', (req, res) => {
    res.status(200).send(template()) 
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', productRoutes)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())
export default app