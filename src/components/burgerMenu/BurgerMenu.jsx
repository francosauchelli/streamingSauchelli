import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
// style
import './style/burgerMenu.css';
// Material-ui
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ListIcon from '@mui/icons-material/List';
import Slide from '@mui/material/Slide';
// local files
import LangContext from '../../context/LangContext';


// Material ui transition hehavior
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
});


//  here starts the component
const BurgerMenu = ( props ) => {

    const { engLang } = useContext( LangContext );

    const { open, actionClose } = props;

    const [fullWidth, setFullWidth] = React.useState(true);

    useEffect( () => [ open ]);


    return (
        <Dialog 
            onClose={ actionClose } 
            open={ open }
            TransitionComponent={Transition}
            keepMounted
            fullWidth={fullWidth}
            className='burger-menu-container'
        >
            <List className='ul-burger-menu' >
                <ListItem 
                    className='list-item-burger'
                    onClick={ actionClose }    
                >
                    <Link to={ '/' } >
                        <Avatar className='avatar-burger-menu' >
                            <HomeIcon />
                        </Avatar>
                        <ListItemText primary={ engLang ? ( "Home" ) : ( "Inicio" ) } />
                    </Link>
                </ ListItem>
                <ListItem
                    className='list-item-burger'
                    divider
                    onClick={ actionClose }    
                >
                    <Link to={ '/movie' }>
                        <Avatar className='avatar-burger-menu' >
                            <LocalMoviesIcon />
                        </Avatar>
                        <ListItemText primary={ engLang ? ( "Movies" ) : ( "Películas" ) } />
                    </Link>
                </ ListItem>
                <ListItem
                    className='list-item-burger'
                    divider 
                    onClick={ actionClose }    
                >
                    <Link to={ '/serie' }>
                        <Avatar className='avatar-burger-menu' >
                            <PlaylistPlayIcon />
                        </Avatar>
                        <ListItemText primary='Series' />
                    </Link>
                </ ListItem>
                <ListItem
                    className='list-item-burger'
                    onClick={ actionClose }    
                >
                    <Link to={ '/mylist' }>
                        <Avatar className='avatar-burger-menu' >
                            <ListIcon />
                        </Avatar>
                        <ListItemText primary={ engLang ? ( "My List" ) : ( "Mi Lista" ) } />
                    </Link>
                </ ListItem>
            </List>
        </Dialog>
    );
}

export default BurgerMenu;