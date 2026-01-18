import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async()=>{
        try {
           const connectInstance= await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`);
           console.log(`mongoDB connected!! ${connectInstance.connection.host}`)
            
        } catch (error) {
            console.log("error",error);
            process.exit(1);
        }
}
export default connectDB;