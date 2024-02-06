const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('/*database*/', 'postgres', 'choclata',{
  host: 'localhost',
  dialect: 'postgres',
})

async function Connection(){
  try{
    await sequelize.authenticate()
    console.log('Connectied successfully')}
  catch(error){
    console.log(error)} 
}



module.exports = Connection;