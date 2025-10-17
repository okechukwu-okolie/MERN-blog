/* eslint-disable @typescript-eslint/no-unused-vars */
//imports
import "dotenv/config";
import express, { request, response, type NextFunction } from "express";
import NoteModel from './models/note.ts'


//function
const app = express();


//end point call
app.get("/",async (req, res, next) => {
  try {
    throw new Error("Bazinga!!!");
    
     const notes = await NoteModel.find().exec();
     res.status(200).json(notes);
  } catch (error) {
    next()
  } 
});



app.use((error:unknown, req:request,res:response,next:NextFunction)=>{
  console.error(error)
    let errorMessage = "An umknown error occured"
    if(error instanceof Error) errorMessage = error.message
    res.status(500).json({error:errorMessage})
});

//this allows you to export the app function
export default app