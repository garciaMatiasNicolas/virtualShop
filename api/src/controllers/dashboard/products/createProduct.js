const pool = require("../../../database/database");

const createProduct = async (req, res)=>{
    try {
        const { name, price, description, stock, category_id, user_id } = req.body;

        const newProduct = [name, price, description, stock, category_id, user_id];

        const query = await pool.query(`INSERT INTO products (name, price, description, stock, category_id, user_id) VALUES (?, ?, ?, ?, ?, ?)`, newProduct); 

        res.json({query});
        
    } catch (error) {
        res.status(500).json({result: 'error', error});
    }
}

module.exports = createProduct;