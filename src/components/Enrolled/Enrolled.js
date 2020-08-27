import React from 'react';
import './Enrolled.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Enrolled = (props) => {
    const {name, author, price, img} = props.cart;
    return (
        <div className="enrolled-body">
            <img src={img} alt=""/>
            <div className='enrolled-info'>
                <h1>{name}</h1>
                <div className="enrolled-detail">
                    <div>
                    <p><FontAwesomeIcon icon={faUser}/> <small>{author}</small></p>
                    </div>
                    <div>
                    <h4>Price $ <span className="total-cost">{price}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enrolled;