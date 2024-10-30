// Import necessary packages
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routes/user.route.js';
dotenv.config(); // Ensure this line is present at the top

const port = process.env.PORT || 5010;


mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
});


const app = express();



app.listen(port, ()=> {
    console.log("server is running on port 5010 !!!");
});

app.use('/api/user', userRouter);