import mongoose from "mongoose";
import dotevn from 'dotenv'

import express from "express";
import connectDB from "./db/index.js";
import { conf } from "./constants.js";
const app = express();

dotevn.config({
  path: './env'
})

connectDB()
  .then(() => {
    app.on('error', (error) => {
      console.log("ERRR: ", error);
      throw error;
    })
    const PORT = conf.PORT || 8000;
    app.listen(PORT, (PORT) => {
      console.log(`Server is running at port : ${PORT}`)
    })
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  })

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});