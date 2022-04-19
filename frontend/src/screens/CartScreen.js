import './CartScreen.css';
// components
import CartItem from '../components/CartItem';



const CartScreen = () => {
    return ( 
    <div className="cartscreen">
        <div className="cartscreen-left">
           <h2>Your Cart</h2>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/> 
        </div>
        <div className="cartscreen-right">
            <div className="cartscreen-info">
                <p>Sub Total (0) items</p>
                <p>Rp.15.000.000,-</p>
           </div> 
           <div>
               <button>Proceed to checkout</button>
           </div>
        </div> 
    </div>
    );
}


export default CartScreen; 