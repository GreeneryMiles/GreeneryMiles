import express from 'express'
import bodyParse from 'body-parser';
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import apiRoutes from "./routes/apis.js";

const app = express()
dotenv.config()

// set up uploaded limit: not exceed 30mb
app.use(bodyParse.json({ limit: "30mb", extended: true }));
app.use(bodyParse.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json());
app.use(cors())

// set up the starting path
// localhost:5000/posts
// need extra .env file to config db and port
app.use('/apis', apiRoutes);

const PORT = process.env.PORT || 5000
const CONNECTION_URL = process.env.CONNECTION_URL

mongoose.set('strictQuery', true);
mongoose
    .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() =>
        app.listen(PORT, () => console.log(`Server Running on port: ${PORT}`))
    )
    .catch(error => console.log(error.message))