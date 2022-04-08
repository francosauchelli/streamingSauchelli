import React from 'react';
import { Link } from 'react-router-dom';
// styles
import './styles/cartPage.css';

const CartPage = () => {
    return (
        <div className='cart-page-container' >
            <Link to={'/'} >
                <img src="./assets/site-construction/construction-img.jpg" alt="404 Error" />
            </Link>
        </div>
    )
}

export default CartPage;