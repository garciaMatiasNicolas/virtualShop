const pool = require("../../../database/database");

const createCategory = async (req, res)=>{
    try {
        const {name, user_id} = req.body;
        const newCategory = [name, user_id];
        const verify = await pool.query('SELECT * FROM categories WHERE name = ? AND user_id = ?', newCategory);
        
        if(verify.length > 0) {
            res.json({result: 'error', message: 'Category already added'});
        } else {
            const query = await pool.query('INSERT INTO categories (name, user_id) VALUES (? ,?)', newCategory);
    
            if (query.affectedRows > 0) {
                res.status(200).json({result: 'succed'});
            } else {
                res.json({result: 'error'});
            }
        }

    } catch (error) {
        res.status(500).json({result: 'error', error});
    }
}

module.exports = createCategory;