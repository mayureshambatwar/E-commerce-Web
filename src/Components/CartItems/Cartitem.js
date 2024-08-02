import React, { useContext } from 'react';
import './cartitem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const Cartitem = () => {
    const {getTotalAmount, all_product, cartItem, removeCart } = useContext(ShopContext);
  
    return (
        <div className='cartitem'>
            <div className="cartitem-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItem[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className="cartitem-format cartitem-main">
                                <img className='product-icon' src={e.image} alt={e.name} />
                                <p className='para'>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitem-quantity'>{cartItem[e.id]}</button>
                                <p>${e.new_price * cartItem[e.id]}</p>
                                <img className='remove-cart' src={remove_icon} onClick={() => removeCart(e.id)} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }
                return null;
            })}
            <div className="cartitem-down">
                <div className="cartitem-total">
                    <h1>Cart Totals</h1>
                    <div>
                    <div className="total">
                        <p>Subtital</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className="total">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="total">
                        <h3>Total</h3>
                        <h3>${getTotalAmount()}</h3>
                    </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitem-promo">
                    <p>If you have a promo code ,Enter here</p>
                    <div className="promo">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartitem;
