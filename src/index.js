import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from "./db/index.js";
import { conf } from "./constants.js";

dotenv.config({
  path: './env'
});

connectDB()
  .then(() => {
    app.on('error', (error) => {
      console.log("ERR: ", error);
      throw error;
    });

    const PORT = conf.PORT || 9900;
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });
