import mongoose from 'mongoose'
import { ENV } from './env.js';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () =>{
            console.log("MongoDB database connected");
        })

        await mongoose.connect(
            `${ENV.MONGODB_URI}rapidrelief?retryWrites=true&w=majority`
        );

    } catch (error) {
        console.log("MongoDb database connection failed ",error);
        
    }
}

export default connectDB;