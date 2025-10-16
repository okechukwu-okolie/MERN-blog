import "dotenv/config";
import mongoose from "mongoose";

import express from "express";
const app = express();
const port = process.env.port||5500

app.get("/", (req, res) => {
  res.send("Hello, World!!");
});
const MONGO_URI: string | undefined = process.env.MONGO_ACCESS;

mongoose.connect(MONGO_URI)
.then(() => {
    console.log("Mongoose connected");
    
    //the express server put inside the mongoose function
    app.listen(port, () => {
        console.log(`Server is running at port: ${port}`);
    });
})
.catch(console.error)