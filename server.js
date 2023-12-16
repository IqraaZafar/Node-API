const express = require('express')
const productRoute = require('./routes/productRoute')
const connectMongoDB = require('./connection')
const app = express()
const URL = "mongodb+srv://ekrazafar:420520@dataapi.d3nmryk.mongodb.net/?retryWrites=true&w=majority"
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/products',productRoute)
connectMongoDB(app,port,URL)




