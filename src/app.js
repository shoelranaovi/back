import express from "express"
import router from "./routes/user-route.js"

const app= express()

app.use(express.json())

app.use("/api/user",router)

app.get("/home",(req,res)=>{
    res.end("<h1>hellow world</h1>")

})





export {app}