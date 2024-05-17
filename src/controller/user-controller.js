import User from "../model/User.js"


export const getAllUser= async(req,res,next)=>{
    let users 
    try {
        users=await User.find()
    } catch (error) {
        console.log(error);
        
    }
    if (!users) {
        return res.status(400).json({massage:"user not found"})        
    }
    return res.status(200).json({users})
}
export const signup=async(req,res,next)=>{
    const{name,email,password}=req.body
    let existinguser
    try {
        existinguser=await User.findOne({email})
    } catch (err) {
      return  console.log(err);
    }
    
    if (existinguser) {
       return res.status(400).json({massage:"users Already existing"})
        
    }
    const user=new User({
        name,
        email,
        password
    })
    try {
        await user.save()
    } catch (err) {
      return  console.log(err);
    }
    return res.status(201).json({user})
}