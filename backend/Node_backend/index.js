import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js'
import 'dotenv/config'
const app = express()

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

//app.use('/api/v1/backend', userRoute)

app.get('/',(req,res) => {
    res.send("API is running...")
})

app.listen(PORT, () =>{
    connectDB()
    console.log(`Server is running on port ${PORT}`);
})

