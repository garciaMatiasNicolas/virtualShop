// MODULES //
const jwt = require('jsonwebtoken');
const pool = require("../../database/database");

// LOGIN //
const login = async (req, res)=> {
    try {
        // Get email and password from de request body
        const { email, password } = req.body;  
        // Create a constant with the data
        const user = {email, password}; 
        // Create Token
        const token = jwt.sign(user, 'elbotas', {expiresIn: '3m'}) 
        // Search in de db email and password match
        const query = await pool.query(`SELECT * FROM USERS WHERE email = ? AND password = ?`, [email, password]); 
        // Verify if there's a match in the db
        if(query.length > 0) {
            let store = query[0].store;
            res.status(200).json({result: 'succed', token, store});

        } else {
            res.status(200).json({result: 'error', error: 'password or email incorrects'});
        }

    } catch (error) {
        res.status(500).json({result: 'error', error});
    }
 
}

module.exports = login;