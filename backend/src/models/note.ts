import { model, Schema, type InferSchemaType } from "mongoose";

//this is the schema that holds the data that each note should have.
const noteSchema = new Schema({
    title: {type:String,required:true},
    text:{type:String},
},{timestamps:true})//the time stam is a mongoose schema feature that provides timestamp

type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note",noteSchema)
 