// MODULES //
const pool = require("../../database/database");

// SIGNIN //
const signin = async  (req, res)=> {
    try {
        const {fullname, email, dni, store, password} = req.body;
        
        const query = await pool.query(`SELECT * FROM USERS WHERE email = ?`, [email]);

        const user = [fullname, email, dni, store, password];
    
        if (query.length > 0) {
            res.status(200).json({result: 'error', message: 'mail already in use'});
        } else {
            await pool.query(`INSERT INTO USERS(fullname, email, dni, store, password) VALUES(?, ?, ?, ?, ?)`, user);
            res.status(200).json({result: 'succed', message: 'User sign in succesfully'});
        }
        
    } catch (error) {
        res.status(500).json({result: 'error', error});
    }
}

module.exports = signin;