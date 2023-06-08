const pool = require("../../database/database");

const getCategories = async (req, res)=>{
    try {
        const { id } = req.body;
        const query = await pool.query('SELECT c.name, u.fullname FROM categories c JOIN users u ON u.user_id = c.user_id WHERE u.user_id = ?', [id]);
        if (query.length > 0) {
            res.status(200).json({result:'succed', query});
        } else {
            res.status(200).json({result: 'succed', message: `you don't have categories yet`});
        }

    } catch (error) {
        res.status(500).json({result: 'error', error});        
    }
}

module.exports = getCategories;