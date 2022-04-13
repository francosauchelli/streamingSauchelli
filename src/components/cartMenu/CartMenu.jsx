import React from 'react';
// Material-ui
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
// style
import './style/cartMenu.css';

const CartMenu = ( props )=> {
    const { openMenu, 
            action,
            cartProducts
            } = props;


    const open = openMenu ? ( true ) : ( false );

    return (
    <React.Fragment>
        {/* <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        </Box> */}
        <Menu
        anchorEl={ openMenu }
        id="account-menu"
        open={ open }
        onClose={ action }
        onClick={ action }
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
                <MenuItem key={ id } >
                    <div className='cart-img' >
                        <img src={ img } alt="img" />
                    </div>
                    <div className='cart-title' >
                        <p>{ title }</p>
                    </div>
                    <div className='cart-qty' >
                        {/* Qty */}
                        <p>{ product[0] }</p>
                    </div>
                    <div className='cart-remove-btn' >
                        <HighlightOffIcon />
                    </div>
                </MenuItem>
                )
            })}
                <Divider className='cart-divider' />
                <ShoppingCartCheckoutIcon className='cart-go-pay' />
        </Menu>
    </React.Fragment>
    )
}

export default CartMenu;