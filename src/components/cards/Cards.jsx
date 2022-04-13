import React, { useState, 
                useContext,
                useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// style
import './static/style/Cards.css'
// Material-ui 
import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button} from '@mui/material';
// local files
import ItemCount from '../itemCount/ItemCount';
import LangContext from '../../context/LangContext';
import CartContext from '../../context/CartContext';

const Cards = ( props ) =>{
    const { engLang } = useContext( LangContext );
    const { addProductsToCart } = useContext( CartContext );

    const product = props;
    const addToCart = ( ) => {
        addProductsToCart( cardCounter, product );
        setEnableAdding( false );
    };

    // counter params
    const [ enableAdding, setEnableAdding ] = useState( true );

    const navigate = useNavigate();
    const navigateToCart = () => {
        navigate( '/cartpage');
    }

    const [ cardCounter, setCardCounter ] = useState( 1 );

    const addUnity = ()=> {
        if(cardCounter < 4 ){
            setCardCounter( cardCounter + 1 );
        }
    }

    const removeUnity = () => {
        setCardCounter( cardCounter - 1 );
    }
    

    const { id, img, title, genre, duration, type } = props;
    let movieType = type.toLowerCase();

    return(
        <div className="item-container">
            <Card className="item-card" sx={{ maxWidth: 345 }}>
                <Link to={ `/${movieType}/${id}` }>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={ img }
                            alt="movie img"
                        />
                        <CardContent className="card-content">
                            <Typography gutterBottom variant="h5" component="div">
                                { title }
                            </Typography>
                            <Typography variant="body2" >
                                { genre }
                            </Typography>
                            <Typography variant="body2" >
                                { type }
                            </Typography>
                            <Typography variant="body2" >
                                { engLang ? 
                                    ( `Duration: ${ duration }` ) 
                                    : ( `Duración: ${ duration }` ) }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions className="card-actions">
                    <Button onClick={ enableAdding ?
                                        ( addToCart ) 
                                        : ( navigateToCart ) }
                            size="small">
                        {   enableAdding ? 
                                ( engLang ? ( 'Buy / Watch' ) : ( 'Comprar / Ver' ) )
                                : ( engLang ? ( 'Checkout' ) : ( 'Finalizar Compra' ) )
                        }
                    </Button>
                    {   enableAdding && 
                            (
                                <ItemCount 
                                actionAdd={ addUnity }
                                actionRemove={ removeUnity }
                                counter={ cardCounter }
                                />
                            )
                    }
                </CardActions>
            </Card>
        </div>
    )
}

export default Cards;