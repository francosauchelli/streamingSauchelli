import React from "react";
// Material-ui icons
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// styles
import './static/style/cartWidget.css'

const CartWidget = () => {
    return(
        <div className="cart-container">
            <button>
                <ShoppingCartIcon className="cart-icon" />
                <p className="cart-amount">1</p>
            </button>
        </div>
    )
}

export default CartWidget;