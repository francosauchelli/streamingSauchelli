import React, { useState, createContext, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ( { children } ) => {

    // to change the state of CartWidget
    const [ changeSt, setChangeSt ] = useState( true );

    
    const [ cartProducts, setCartProducts ] = useState( [] );

    //  adding and removing functions
    const addProductsToCart = ( qty, product ) => {
        setChangeSt( !changeSt );
            const productIndex = cartProducts.findIndex( (el) => ( el[1].id === product.id ));
            
            if( productIndex !== -1 ) {
                cartProducts[productIndex][0] += qty;
            } 
        else {
            const itemsArray = [ ...cartProducts, [qty, product] ]
            setCartProducts( itemsArray );
            localStorage.setItem( 'tas', JSON.stringify( itemsArray ) );
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

        localStorage.setItem( 'tas', JSON.stringify( newCartArray ));
    }


    // loading document and updates
    useEffect( () => {
        if( localStorage.getItem( 'tas' ) ) {
            const localStorageTas = localStorage.getItem( 'tas' );
            const initialCart = JSON.parse( localStorageTas );

            let cartArray = [];
            initialCart.map( item => {
                cartArray = [...cartArray, [item[0], item[1]] ];
            })
            setCartProducts( cartArray  )
        }
    }, [] );


    const dataContext = {
        changeSt,
        cartProducts,
        addProductsToCart,
        removeProductFromCart,
        setCartProducts
    }

    return (
        <CartContext.Provider value={ dataContext } >
            { children }
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext;