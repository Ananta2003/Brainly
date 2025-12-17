import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.js'
import cors from 'cors'

dotenv.config()

const app= express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT

app.use(
  cors({
    origin: ["https://brainly-frontend-22lw.onrender.com/api/v1/"],
    credentials: true,
  })
);

//User Sign logic
app.use('/api/v1' ,userRouter)


app.listen(port,()=>{
    console.log("Server Running on "+port)
})