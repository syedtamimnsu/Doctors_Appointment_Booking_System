import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import connectCloudinary from './config/cloudinary.js';
import connectDB from './config/mongodb.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';

//app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()


//middleware
app.use(express.json())
app.use(cors())


//api end point
app.use('/api/admin',adminRouter)
app.use('/api/doctor', doctorRouter)


app.get('/', (req , res )=>{
    res.send('API working   Great')
})

app.listen(port, ()=>console.log("server started", port))