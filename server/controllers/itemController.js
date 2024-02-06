const Cars = sequelize.define('Cars', {
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
   imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
   },
  });

 

////////////////////////

  const authentication = (req, res, next)=>{
    const token = req.header('Authorization')
    if(!token){
       return res.sendStatus(401)}
    jwt.verify(token,secretKey,(err, user)=>{
      if(err){
        return res.sendStatus(403)}
      req.user = user
      next()
    })
  }


/////////////////////
  app.get('/cars',authentication,async(req,res)=>{
    try{
     const allCars = await Cars.findAll()
      res.json(allCars)}
    catch(error){
      res.status(500).json(error)
    }
  })

  app.post('/cars',authentication,async(req, res)=>{
    try{
      const newCar = await Cars.create(req.body)
      res.json(newCar)}
    catch (error){
      res.status(500).json(error)
    }
  })

  app.delete('/cars/:id', authentication, async(req,res)=>{
    const {id} = req.params
    try{
      await Cars.destroy({where:{id}})
      res.json("deleted")}
    catch(error){
      res.status(500).json(error)
    }
  })

  app.put('/cars/:id', authentication,async(req,res)=>{
    const {id} = req.params
    try{
      await Cars.update(req.body,{where:{id}})
      res.json("updated successfully")}
    catch(error){
      res.status(500).json(error)
    }
  })