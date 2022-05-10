import React, { useContext,
                useState,
                useEffect
                } from 'react';
import { Link } from 'react-router-dom';
// style
import './style/cartDetail.css';
// Material ui
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
// local files
import CartContext from '../../context/CartContext';
import ModalCheckOut from '../modalCheckOut/modalCheckOut';
import LangContext from '../../context/LangContext';


const CartDetail = () => {

    // to switch de language
    const { engLang } = useContext( LangContext );

    // setting cart's products and qty
    const { cartProducts, setCartProducts, removeProductFromCart } = useContext( CartContext );

    const [ totalPrice, setTotalPrice ] = useState( 0 );

    useEffect( () => {
        let subTotal = 0;
        cartProducts.map( ( prod ) => {
            const { unitPrice } = prod[1];
            const qty = parseInt(prod[0]);
            subTotal += qty * parseFloat(unitPrice);

            setTotalPrice( subTotal.toFixed(2) );
        })
    }, [ cartProducts ] )

    // to get form data
    const [ formData, setFormData ] = useState(
        { 
            name: '',
            phone: '',
            email: ''
        }
    )

    //to show modal
    const [ openModal, setOpenModal ] = useState( false );
    const showModal = () => {
        setOpenModal( true );
    }

    const removeItem = ( e, product ) => {
        e.stopPropagation();
        removeProductFromCart( product );
    }


    // JSX
    return (
        <>
        { cartProducts.length>0 ? (
            <div className='cart-detail-main-cont'>
                { cartProducts.map( ( product ) => {
                    const { id, img, title, type, unitPrice } = product[1];
                    const qty = product[0];
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
                                <IconButton 
                                    className='cart-remove-btn'
                                    onClick={ (e) => removeItem( e, product ) }
                                >
                                    <HighlightOffIcon />
                                </IconButton>
                            </div>
                        </div>
                        )
                    })
                }
                <div className='cart-total-container'>
                    <h4>Total: u$s{ totalPrice }</h4>
                </div>
                <div className='cart-detail-buttons' >
                    <Link to={ '/' } >
                        <button>
                            { engLang ? ( "Continue Shopping" ) : ( "Continúa Comprando" ) }
                        </button>
                    </Link>
                    <button onClick={ showModal }>
                        Checkout
                    </button>
                </div>
            </div>)
            : (
                <Link to={ '/' } >
                    <div className='cart-error-container'>
                        <div className='cart-error-message'>
                            <h3>{ engLang ? ( "This office is now CLOSED!" )
                                : ( "Esta oficina está CERRADA!" ) }</h3>
                        </div>
                        <div className='cart-error-svg'>
                            <img src="/assets/cart-img/roz-monsters-inc.gif  " alt="" />
                        </div>
                    </div>
                </Link>
            )
        }
        <ModalCheckOut 
            openModal={ openModal }
            setOpenModal={ setOpenModal }
            setCartProducts={ setCartProducts }
            cartProducts={ cartProducts }
            formData={ formData }
            setFormData={ setFormData }
            totalPrice={ totalPrice }
        />
    </>
    )
}

export default CartDetail;