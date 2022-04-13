import React, { useState, createContext, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ( { children } ) => {
    // to change the state of CartWidget
    const [ changeSt, setChangeSt ] = useState( true );

    const [ cartProducts, setCartProducts ] = useState( [] );

    const addProductsToCart = ( qty, product ) => {
        setChangeSt( !changeSt );
            const productIndex = cartProducts.findIndex( (el) => ( el[1].id === product.id ));
            
            if( productIndex !== -1 ) {
                cartProducts[productIndex][0] += qty;
            } 
        else {
            setCartProducts( [ ...cartProducts, [qty, product] ] );
        }
    }

    const dataContext = {
        changeSt,
        cartProducts,
        addProductsToCart
    }

    return (
        <CartContext.Provider value={ dataContext } >
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext;