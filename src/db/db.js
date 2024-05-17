import mongosse from "mongoose"

async function connectdb(){
    try{
     await mongosse.connect("mongodb+srv://alineboyovi787:3Ya65ZaQha1NKHEs@cluster0.6dmil8q.mongodb.net/demo?retryWrites=true&w=majority&appName=Cluster0")
    }catch(error){
        console.log(error);

    }
}

export{connectdb}