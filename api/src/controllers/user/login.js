// MODULES //
const jwt = require('jsonwebtoken');
const pool = require("../../database/database");

// LOGIN //
const login = async (req, res)=> {
    try {
        const { email, password } = req.body;
        const user = {email, password};
        const token = jwt.sign(user, 'elbotas', {expiresIn: '3m'})
        
        const query = await pool.query(`SELECT * FROM USERS WHERE email = ? AND password = ?`, [email, password]);

        if(query.length > 0) {
            let userId = query[0].id;
            res.status(200).json({result: 'succed', token, userId});
        } else {
            res.status(200).json({result: 'error', error: 'password or email incorrects'});
            console.log(req.body);
        }

    } catch (error) {
        res.status(500).json({result: 'error', error});
    }
 
}

module.exports = login;