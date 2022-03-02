// mengimport express
const express = require("express");
// memanggil express routes sebagai fungsi
const router = express.Router();
// mengimpoort product routes
const {
    getAllProducts,
    getProductById,
} = require("../controllers/productControllers");

// @desc : ini digunakan untuk mengambil seluruh product dari database
// @route: GET /api/products
// @access: Public
router.get("/", getAllProducts);

// @desc : ini digunakan untuk mengambil satu product dari database berdasarkan id
// @route: GET /api/products/:id
// @access: Public
router.get("/:id", getProductById);

module.exports = router;