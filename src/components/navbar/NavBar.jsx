import React, { useContext } from "react";
import { Link } from 'react-router-dom'
// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
// styles
import './static/style/navbar.css'
// Material-UI 
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
// local files
import CartWidget from '../cartWidget/CartWidget';
import LangSwitch from '../langSwitch/LangSwitch';
import LangContext from '../../context/LangContext';

function NavBar(){
    const { engLang } = useContext( LangContext );

    return (
        // jsx
        <header className="main-header">
            <Link to={ '/' }>
                <div className="header-logoCont">
                    <h1 className="header-title">Take a Seat</h1>
                    <FontAwesomeIcon className="logo-icon" icon={ faTicket }></FontAwesomeIcon>
                </div>
            </Link>
            <div className="buttons-navbar-container">
                <Box className="buttons-group-nav">
                    <ButtonGroup variant="text" aria-label="text button group" className="buttons-group">
                        <Link to={ '/' }>
                            <Button className='single-button-group'>
                                    { engLang ? ( "Home" ) : ( "Inicio" ) }
                            </Button>
                        </Link>
                        <Link to={ '/movie' }>
                            <Button className='single-button-group'>
                                { engLang ? ( "Movies" ) : ( "Películas" ) }
                            </Button>
                        </Link>
                        <Link to={ '/serie' }>
                            <Button className='single-button-group'>
                                Series
                            </Button>
                        </Link>
                        <Link to={ '/mylist' }>
                            <Button className='last-single-button-group'>
                                { engLang ? ( "My List" ) : ( "Mi Lista" ) }
                            </Button>
                        </Link>
                    </ButtonGroup>
                </Box>
                <CartWidget />
                <div>
                    <div>
                        <div className='switch-container' >
                            <LangSwitch />
                        </div>
                        <Button variant="text" size="small">
                            { engLang ? ( "Login" ) : ( "Ingresar" ) }
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default NavBar;