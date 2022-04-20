import React, { useContext,
                useState,
                useEffect
                } from 'react';
// style
import './style/cartDetail.css';
// local files
import CartContext from '../../context/CartContext';

const CartDetail = () => {
    const { cartProducts } = useContext( CartContext );

    const [ total, setTotal ] = useState( 0 );

    useEffect( () => {
        let subTotal = 0;
        cartProducts.map( ( prod ) => {
            const { unitPrice } = prod[1];
            const qty = parseInt(prod[0]);
            subTotal += qty * parseFloat(unitPrice);

            setTotal( subTotal.toFixed(2) );
        })
    }, [ cartProducts ] )
    

    return (
        <>
        { cartProducts.length>0 ? (
            <div>
                { cartProducts.map( ( prod ) => {
                    const { id, img, title, type, unitPrice } = prod[1];
                    const qty = prod[0];

                    return (
                        <div 
                            key={ id }
                            className='cart-detail-container'
                        >
                            <div className='cart-detail-img' >
                                <img src={ img } />
                            </div>
                            <div className='cart-title-container'>
                                <div className='cart-detail-title' >
                                    <p>{ title }</p>
                                </div>
                                <div className='cart-detail-type' >
                                    <p>{ type }</p>
                                </div>
                            </div>
                            <div className='cart-price-container'> 
                                <div className='cart-detail-qty' >
                                    <p>{ qty } x</p>
                                </div>
                                <div className='cart-detail-price' >
                                    <p>u$s{ unitPrice }/un.</p>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                <div className='cart-total-container'>
                    <h4>Total: u$s{ total }</h4>
                </div>
            </div>)
            : (
                <div className='cart-error-container'>
                    <div className='cart-error-svg'>
                        <img src="/assets/cart-img/roz.png  " alt="" />
                    </div>
                    <div className='cart-error-message'>
                        <h3>"I'm watching you, little user. Always watching. Always!"</h3>
                    </div>
                </div>
            )
        }
    </>
    )
}

export default CartDetail;