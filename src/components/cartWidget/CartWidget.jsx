import React from "react";
// Material-ui
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
// styles
import './static/style/cartWidget.css'

const CartWidget = () => {
    return(
        <div className="cart-container">
            <Button >
                <Badge 
                    color="primary"
                    className="cart-badge"
                    // TODO: agregar contador
                    badgeContent={ 1 }
                >
                    <ShopTwoIcon className="cart-icon" />
                </Badge>
            </Button>
        </div>
    )
}

export default CartWidget;