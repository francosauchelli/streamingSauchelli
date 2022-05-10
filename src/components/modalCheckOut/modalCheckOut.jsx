import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Material ui
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Modal from '../modal/Modal';
// local files
import firestoreDB from '../../data/firebase';
// Firebase: data & components
import { addDoc, collection } from 'firebase/firestore';

const ModalCheckOut = ( props ) => {

    const { openModal, setOpenModal, setCartProducts,
        formData, setFormData, totalPrice, cartProducts } = props;

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


    return(
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
                )
            }
        </Modal>
    )
}

export default ModalCheckOut;