const pool = require("../../../database/database");

const updateProduct = async (req, res)=>{
    try {
        
    } catch (error) {
        res.status(500).json({result: 'error', error});
    }
}

module.exports = updateProduct;