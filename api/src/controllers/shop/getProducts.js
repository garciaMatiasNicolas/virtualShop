const pool = require("../../database/database");

const getProducts = async (req, res)=>{
    try {
        const { id } = req.body;
        const query = await pool.query('SELECT product_id, p.name, price, stock, description, c.name AS category FROM products p JOIN categories c ON c.category_id = p.category_id JOIN users u ON u.user_id = p.user_id  WHERE u.user_id = ?', [id]);
        if (query.length > 0) {
            res.status(200).json({result:'succed', query});
        } else {
            res.status(200).json({result: 'succed', message: `you don't have products`});
        }

    } catch (error) {
        res.status(500).json({result: 'error', error});        
    }
}

module.exports = getProducts;