import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// styles
import './styles/cartPage.css';
// local files
import CartDetail from '../components/cartDetail/CartDetail'

const CartPage = () => {
    return (
        <CartDetail />
    )
}

export default CartPage;