const pool = require("../../database/database");

const getUser = async (req, res)=>{
  const {store} = req.body;
  const query = await pool.query(`SELECT fullname FROM users WHERE store = ?`, [store]);
  let fullname = query[0].fullname
  res.json({fullname});
}

module.exports = getUser;