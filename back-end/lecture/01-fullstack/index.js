
import express from 'express'   //const express = require('express')
import dotenv from 'dotenv'     // npm i dotenv
import cors from 'cors' // npm i cors
import db from './utils/db.js' // kabhi kabhi .js extension lena padta hai

//import all routes
import userRoutes from "./routes/user.routes.js"

dotenv.config()

const app = express()  // express() call and all reference store in app variable

app.use(
    cors({
        origin: process.env.BASE_URL,
        credentials:true,
        methods: ['GET', 'POST', 'DELETE','OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization']
    })
)

app.use(express.json()) // access the object like {name:ganesh}
app.use(express.urlencoded({extended:true})) // avoid %20 in the http://127.0.0.1:3000/ganesh%20navale


const port = process.env.PORT || 4000  // port is a variable and add 3000 port number

app.get('/', (req, res) => {
  res.send('Cohort!')
})

app.get('/ganesh', (req, res) => {
    res.send('Ganesh')
})

app.get("/hitesh", (req, res)=>{
    res.send('Hitesh')
})

// connect to db
db();


//user routes
app.use("/api/v1/users", userRoutes) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})