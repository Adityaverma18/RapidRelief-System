import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () =>{
            console.log("MongoDB databse connected");
        })

        await mongoose.connect(
            `${process.env.MONGODB_URL}rapidrelief?retryWrites=true&w=majority`
        );

    } catch (error) {
        console.log("MongoDb database connection failed ",error);
        
    }
}

export default connectDB;