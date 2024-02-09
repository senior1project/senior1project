// const { Client } = require('pg');

// const client = new Client({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Rental_cars',
//   password: '123',
//   port: 5432
// });

// client.connect().then(()=>{
//     console.log("db connected on  pg !");
// });

// const gettt = () => {
//     const sql = 'SELECT * FROM user ';
//     const result = client.query(sql);
//     return result;
//   }


// const createUser = async ([username, Pass]) => {
//   const sql = 'INSERT INTO user SET ? ';
//   const result = await client.query(sql, [username, Pass]);
//   return result.rows[0];
// }


// const findUser = async (username) => {
//   const sql = 'SELECT * FROM user WHERE username = ?';
//   const result = await client.query(sql, [username]);
//   return result.rows[0];
// }




// module.exports = {
//   createUser,
//   findUser,gettt
// };