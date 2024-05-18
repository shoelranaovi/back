import express from "express"
import { addBlog, getAllBlog, update,findbyid, deletebyid } from "../controller/blog-controller.js"

const blogrouter= express.Router()
// app.use("/api/blog",router)
blogrouter.get("/",getAllBlog)
blogrouter.post("/createpast",addBlog)
blogrouter.put("/update/:id",update)
blogrouter.get("/search/:id",findbyid)
blogrouter.delete("/:id",deletebyid)



export default blogrouter