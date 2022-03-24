import React from "react";
// Material-ui
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
// styles
import './static/style/cartWidget.css'

const CartWidget = () => {
    return(
        <div className="cart-container">
            <Button >
                <ShoppingCartIcon className="cart-icon" />
                <p className="cart-amount">1</p>
            </Button>
        </div>
    )
}

export default CartWidget;