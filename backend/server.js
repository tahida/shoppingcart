// configurasi env
require("dotenv").config();
const express = require("express");
// membuat koneksi mongoodb
const connectDB = require("./config/db");
// memanggil fungsi mongoodb
connectDB();
// memanggil fungsi product routes
const productRoutes = require('./routes/productRoutes');

const app = express();

// menggunakan fungsi json untuk mengirim data dari backend ke frontend
app.use(express.json());
// menggunakan fungsi routes product
app.use("/api/products", productRoutes);


const PORT = process.env.PORT || 3800;

app.listen(PORT, () => console.log(`Server Is Running On Port ${PORT}`));

 