import cors from 'cors';
import 'dotenv/config';
import express from 'express';

//app config
const app = express()
const port = process.env.PORT || 4000


//middleware
app.use(express.json())
app.use(cors())


//api end point
app.get('/', (req , res )=>{
    res.send('API working  Great')
})

app.listen(port, ()=>console.log("server started", port))