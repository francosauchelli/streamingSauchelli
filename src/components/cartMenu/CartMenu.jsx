import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Material-ui
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// local files
import LangContext from '../../context/LangContext';
// style
import './style/cartMenu.css';

const CartMenu = ( props )=> {
    const { engLang } = useContext( LangContext );

    const { openMenu, 
            actionOpen,
            cartProducts,
            actionRemove
            } = props;

    const open = openMenu ? ( true ) : ( false );

    const removeItem = ( e, product ) => {
        e.stopPropagation();
        actionRemove( product );
    }

    return (
    <React.Fragment>
        <Menu
        anchorEl={ openMenu }
        id="account-menu"
        open={ open }
        onClose={ actionOpen }
        onClick={ actionOpen }
        PaperProps={{
            elevation: 0,
            sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
            },
            '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
            },
            },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            { cartProducts.map( (product) => {
                const { id, title, img } = product[1];

                return (
                <MenuItem key={ id }
                    className='cart-menu-item'
                >
                    <div className='cart-img' >
                        <img src={ img } alt="img" />
                    </div>
                    <div className='cart-title' >
                        <p>{ title }</p>
                    </div>
                    <div className='cart-qty' >
                        {/* Qty */}
                        <p>{ `x ${product[0]} u.` }</p>
                    </div>
                    <IconButton 
                        className='cart-remove-btn'
                        onClick={ (e) => removeItem( e, product ) }
                    >
                        <HighlightOffIcon />
                    </IconButton>
                </MenuItem>
                )
            })}
                <Divider className='cart-divider' />
                <Link to={ '/cart' }>
                    <div className='cart-go-pay' >
                        <p>{ engLang ? ( 'Checkout' ) : ( 'Finalizar Compra' ) }</p>
                        <ShoppingCartCheckoutIcon  />
                    </div>
                </Link>
        </Menu>
    </React.Fragment>
    )
}

export default CartMenu;