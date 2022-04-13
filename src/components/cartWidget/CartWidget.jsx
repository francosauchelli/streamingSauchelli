import React, { useContext, useState, useEffect } from "react";
// Material-ui
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
// local files
import CartContext from "../../context/CartContext";
import CartMenu from '../cartMenu/CartMenu';
// styles
import './static/style/cartWidget.css'

const CartWidget = () => {
    const { cartProducts, changeSt } = useContext( CartContext );
    
    const [ cartAmount, setCartAmount ] = useState( 0 );
    
    useEffect( () => {
        let qtyProducts = 0;
        cartProducts.map( (each) => {
            qtyProducts += each[0]
        })

        setCartAmount( qtyProducts );
    }, [ changeSt ] );


    const [ openMenuState , setOpenMenuState ] = useState( null );

    const openMenuCart = ( event ) => {
        setOpenMenuState( openMenuState !== null ?
                            ( null)
                            : ( event.currentTarget )
                        )
    }

    return(
        <div className="cart-container">
            <Button 
                onClick={ openMenuCart }
                disabled={ cartProducts.length==0 ? true : false }    
            >
                <Badge 
                    color="primary"
                    className="cart-badge"
                    badgeContent={ cartAmount }
                >
                    <ShopTwoIcon className="cart-icon" />
                </Badge>
                <CartMenu 
                    openMenu={ openMenuState }
                    action={ openMenuCart } 
                    cartProducts={ cartProducts }
                />
            </Button>
        </div>
    )
}

export default CartWidget;