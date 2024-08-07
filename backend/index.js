import express from "express";
import dotenv from "dotenv";
import mongoose from 'mongoose'
import bookRoute from "./route/book.route.js";
import cors from 'cors'
import bodyParser from "body-parser";
import userRoute from './route/user.route.js'



const app = express();
app.use(cors())

app.use(express.json());

dotenv.config();

app.use(bodyParser.json());

const PORT = process.env.PORT || 8001;
const URI = process.env.URI;


try {
    mongoose.connect(URI);
    console.log("database connected")
    app.listen(PORT,()=>{
        console.log("server is running on port",PORT);
    })
} catch (error) {
    console.log(error);
}


//defining routes

app.use('/book',bookRoute)

app.use('/user',userRoute);

