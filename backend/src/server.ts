import app from './app.ts'
import env from './util/validateEnv.js'
import mongoose from "mongoose";


const port = env.PORT||5500


const MONGO_URI: string | undefined = env.MONGO_ACCESS;

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Mongoose connected");
    
    //the express server put inside the mongoose function
    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    });
  })
  .catch(console.error)