import React from 'react';
import './Cart.css';
import Enrolled from '../../components/Enrolled/Enrolled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {
    const cart = props.cart;
    const totalCost = cart.reduce((totalCost, course) => totalCost + course.price, 0);
    return (
        <div className="cart-body">
            <div className="cart-info">
                <h1>Your <FontAwesomeIcon className="cart-icon" icon={faShoppingBasket} />  Detail</h1>
                <p>Total Courses: <span className="total-course">{cart.length}</span></p>
                <p>Total Cost: $ <span>{totalCost.toFixed(2)}</span></p>
            </div>
            <div className="cart-item">
                {
                    cart.map(cart => <Enrolled cart={cart}></Enrolled>)
                }
            </div>
        </div>
        
    );
};

export default Cart;