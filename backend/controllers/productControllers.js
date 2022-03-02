// mengambil model dari folder models
const Product = require ("../models/Product");

// mengambil semua products
const getAllProducts = async (req, res) => {
    try {
        // konstanta untuk product
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};

// mengambil 1 product by id
const getProductById = async (req, res) => {
    try {
        // konstanta untuk product
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
};



module.exports = {
    getAllProducts,
    getProductById,
};