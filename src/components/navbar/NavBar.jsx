import React from "react";
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
// estilo
import './static/style/navbar.css'
// Material-UI 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function NavBar(){
    return (
        // jsx
        <header className="main-header">
            <div className="header-logoCont">
                <h1 className="header-title">Take a Seat</h1>
                <FontAwesomeIcon className="logo-icon" icon={ faTicket }></FontAwesomeIcon>
            </div>
            <div className="buttons-navbar-container">
                <Box className="buttons-group-nav">
                    <ButtonGroup variant="text" aria-label="text button group" className="buttons-group">
                        <Button>Inicio</Button>
                        <Button>Películas</Button>
                        <Button>Series</Button>
                        <Button>Mi Lista</Button>
                    </ButtonGroup>
                </Box>
                {/* <div>
                    <Button variant="text" size="small">Carrito</Button>
                    
                </div> */}
                <div>
                    <Button variant="text" size="small">Cuenta</Button>
                </div>
            </div>
        </header>
    )
};

export default NavBar;