import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    const cart = props.cart;
    return (
        <div className="header">
            <div>
                <span className="icon"><FontAwesomeIcon icon={faLaptopCode} /></span>My<span className="online">Online</span>Class
            </div>
            <div className='menu'>
                <div>
                    <h1>{cart.length}</h1>
                    <FontAwesomeIcon className="menu-icon" icon={faShoppingBasket}/>
                </div>
            </div>
        </div>
    );
};

export default Header;