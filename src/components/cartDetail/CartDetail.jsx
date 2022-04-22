import React, { useContext,
                useState,
                useEffect
                } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Material ui
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
// style
import './style/cartDetail.css';
// local files
import CartContext from '../../context/CartContext';
import Modal from '../modal/Modal';
import firestoreDB from '../../data/firebase';
// Firebase: data & components
import { addDoc, collection } from 'firebase/firestore';


const CartDetail = () => {
    // setting cart's products and qty
    const { cartProducts, setCartProducts } = useContext( CartContext );

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
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    // to register order
    const [ order , setOrder ] = useState({
        buyer: '',
        items: cartProducts.map( (elem) => {
            return { 
                id: elem[1].id, 
                title: elem[1].title,
                price: elem[1].unitPrice,
                qty: elem[0]
            }
        }),
        total: '',
    });

    const sendOrder = () => {
        setOrder( {
            ...order, 
            buyer: formData,
            total: totalPrice
        } )

        pushOrder();
    }

    const [ loading, setLoading ] = useState( false );
    const [ orderID, setOrderID ] = useState('')
    const pushOrder = async () => {
        const prevOrder = {
            ...order,
            buyer: formData,
            total: totalPrice
        }

        setLoading( true );

        const orderCollection = collection( firestoreDB, 'ordersDB' );
        const pushDoc = await addDoc( orderCollection, prevOrder );

        setFormModal( false );
        console.table('orden enviada', prevOrder);

        setOrderID( pushDoc.id );
    }



    //to show modal
    const [ openModal, setOpenModal ] = useState( false );
    const showModal = () => {
        setOpenModal( true );
    }

    const navigation = useNavigate();
    const [ formModal, setFormModal ] = useState( true );
    const receiveConfirmation = () => {
        // change modal's states to intial value
        setOpenModal( false );
        setFormModal( true );
        setLoading( true );

        navigation( '/' );
        setCartProducts( [] );
    }

    // JSX
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
                    <h4>Total: u$s{ totalPrice }</h4>
                </div>
                <div className='cart-detail-buttons' >
                    <Link to={ '/' } >
                        <button>
                            Continue Shopping
                        </button>
                    </Link>
                    <button onClick={ showModal }>
                        Checkout
                    </button>
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

        {/* embed Modal */}
        <Modal 
            display={ openModal }
            handleClose={ () => setOpenModal( false ) }
            className='modal-container'
        >
        {formModal ?
            (loading ? 
                ( <CircularProgress color="inherit" /> )
                : (<form action="submit">
                    <DialogContent className='conten-dialog-container'>
                        <DialogTitle>Send Order</DialogTitle>
                        <TextField
                            autoFocus
                            margin="dense"
                            name="name"
                            label="Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={ handleChange }
                        />
                        <TextField
                            margin="dense"
                            name="phone"
                            label="Phone Number"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={ handleChange }
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                            onChange={ handleChange }
                        />
                    </DialogContent>
                    <DialogActions className='modal-buttons-container' >
                        <Button onClick={ () => setOpenModal( false ) } >Cancel</Button>
                        <Button onClick={ sendOrder } >Submit</Button>
                    </DialogActions>
                </form>))
            : (
                <div className='order-commit-container'>
                    <DialogContent>
                        <h3>Gracias por su compra</h3>
                        <p>Orden n° { orderID } </p>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ receiveConfirmation } >Accept</Button>
                    </DialogActions>
                </div>
            )}
        </Modal>
    </>
    )
}

export default CartDetail;