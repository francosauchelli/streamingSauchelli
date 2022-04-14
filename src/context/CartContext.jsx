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

    const removeProductFromCart = ( product ) => {
        let productIndex = '';
        productIndex = cartProducts.findIndex( ( prod ) => (
            prod[1].id === product[1].id 
        ) );

        const newCartArray  = cartProducts.filter( (prod) => (
                    prod[1].id !== product[1].id
                ) )
        setCartProducts( newCartArray );
    }

    const dataContext = {
        changeSt,
        cartProducts,
        addProductsToCart,
        removeProductFromCart
    }

    return (
        <CartContext.Provider value={ dataContext } >
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext;