import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/user.js'
import cors from 'cors'
import path from "path";

dotenv.config()

const app= express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT

app.use(
  cors({
    origin: ["https://brainly-frontend-22lw.onrender.com/"],
    credentials: true,
  })
);

//User Sign logic
app.use('/api/v1' ,userRouter)


app.listen(port,()=>{
    console.log("Server Running on "+port)
})

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});