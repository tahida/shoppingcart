import './ProductScreen.css';

const ProductScreen = () => {
    return (
         <div className="productscreen">
             <div className="productscreen-left">
                 <div className="left-image">
                     <img src="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" alt="Product Name"/>
                 </div>
                 <div>
                     <div className="left-info">
                     <p className="left-name">Product 1</p>
                     <p>Price: Rp.15.000.000,-</p>
                     <p>Description : PS 5 1 TB Warna Putih</p>   
                     </div>
                 </div>
             </div>
             <div className="productscreen-right"></div> 
             <div className="right-info">
                <p>
                    Price: <span>Rp.15.000.000,-</span>    
                </p>
                <p>
                    Status <span>In Stoct</span>    
                </p>
                <p>
                    Qty 
                    <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    </select>    
                </p>
                <p>
                    <button type="button">Add To Cart</button>
                </p>
            </div>   
         </div>   
    );
};


export default ProductScreen;