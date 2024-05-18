import Blog from "../model/Blog.js";



export const getAllBlog= async(req,res,next)=>{
    let blog 
    try {
        blog =await Blog.find()
    } catch (error) {
        console.log(error);
        
    }
    if (!blog) {
        return res.status(400).json({massage:"blog not found"})        
    }
    return res.status(200).json({blog})
}
export const addBlog=async(req,res,next)=>{
    const{title,description,user}=req.body
    
    const blog=new Blog({
        title,
        description,
        user
    })
    try {
        await blog.save()
    } catch (err) {
      return  console.log(err);
    }
    return res.status(201).json({blog})
}
export const update=async(req,res,next)=>{
    const blogid= req.params.id;
    const{title,description}=req.body
    let blog
    try {
        blog=await Blog.findByIdAndUpdate(blogid,{
            title,description
           })
    } catch (error) {
       return console.log(error)
        
    }
    if (!blog) {
        return res.status(400).json({massage:"unable to update"})
        
    }
    return res.status(201).json({blog})
}
export const findbyid=async(req,res,next)=>{
    const blogid= req.params.id;
    
    let blog
    try {
        blog=await Blog.findById(blogid)
    } catch (error) {
       return console.log(error)
        
    }
    if (!blog) {
        return res.status(400).json({massage:"unable to find"})
        
    }
    return res.status(201).json({blog})
}
export const deletebyid=async(req,res,next)=>{
    const blogid= req.params.id;
    
    let blog
    try {
        blog=await Blog.findByIdAndDelete(blogid)
    } catch (error) {
       return console.log(error)
        
    }
    if (!blog) {
        return res.status(400).json({massage:"unable to find"})
        
    }
    return res.status(201).json({massage:"seccesfull to delete"})
}

