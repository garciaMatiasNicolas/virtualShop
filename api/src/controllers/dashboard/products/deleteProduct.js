const pool = require("../../../database/database");

const deleteProduct = async (req, res)=> {
    try {
        const { id } = req.body;
        const query = await pool.query('DELETE FROM products WHERE product_id = ?', [id]);
        if (query.affectedRows > 0) {
            res.status(200).json({result: 'succed'})
        } else {
            res.json({result: 'error'});
        }       
    } catch (error) {
        res.status(500).json({result: 'error', error});
    }
}

module.exports = deleteProduct;