import { app } from "./app.js";
import { connectdb } from "./db/db.js";

console.log("hellow world");

connectdb().then(
    ()=>{
        app.listen(3000, () => { console.log("server is running on port 3000") })
    }
   
).catch((err)=>console.log(err))

    

// 3Ya65ZaQha1NKHEs