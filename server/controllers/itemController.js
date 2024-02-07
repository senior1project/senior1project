const Cars=require("../database-mysql/index.js")


////////////jwt////////////

  const authentication = (req, res, next)=>{
    const token = req.header('Authorization')
    if(!token){
       return res.status(401)}
    jwt.verify(token,secretKey,(err, user)=>{
      if(err){
        return res.status(403)}
      req.user = user
      next()
    })
  }


///////////CRUD//////////
const get=async(req,res)=>{
    try{
     const allCars = await Cars.findAll()
      res.json(allCars)}
    catch(error){
      res.status(500).json(error)
    }
  }

const post=async(req, res)=>{
    try{
      const newCar = await Cars.create(req.body)
      res.json(newCar)}
    catch (error){
      res.status(500).json(error)
    }
  }

const deletee=async(req,res)=>{
    const {id} = req.params
    try{
      await Cars.destroy({where:{id}})
      res.json("deleted")}
    catch(error){
      res.status(500).json(error)
    }
  }

const put=async(req,res)=>{
    const {id} = req.params
    try{
      await Cars.update(req.body,{where:{id}})
      res.json("updated successfully")}
    catch(error){
      res.status(500).json(error)
    }
  }

  module.exports ={authentication,get,post,deletee,put}