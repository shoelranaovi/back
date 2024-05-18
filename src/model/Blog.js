import mongoose from "mongoose"

const Schema=mongoose.Schema

const BlogSchema= new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:String,
        required:true,
    }
})

export default mongoose.model("Blog",BlogSchema)