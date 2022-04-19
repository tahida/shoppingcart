import React from 'react';
import './Product.css';
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
        <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Product Name" />
        <div className="product-info">
            <p className="info-name">PS 5</p>  
            <p className="info-description">PS 5 1 TB, Warna Putih</p>  
            <p className="info-price">Rp.15.000.000</p>
            <Link to={`/Product/${111}`} className="info-button">
                View Product 
            </Link>
        </div> 
    </div>
  );
};

export default Product;