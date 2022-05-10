import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// local files
import CartContext from '../../context/CartContext';
import LangContext from '../../context/LangContext';
// Material-ui
import { Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions
    } from '@mui/material';
// styles
import './style/itemDetail.css'


const ItemDetail = ( props )=>{
    const { engLang } = useContext( LangContext );
    const { addProductsToCart } = useContext( CartContext );

    const product = props;
    const addToCart = ( ) => {
        addProductsToCart( 1, product );
    };

    const { img,
            title, 
            genre, 
            type, 
            duration,
            unitPrice,
            synopsis
        } = props;


    return (
        <div className="item-det-container" >
            <Card className="det-card" sx={{ maxWidth: 345 }}>
                <CardActionArea 
                    className="det-media"
                    component={ Link } to={ '/cart' }
                    onClick={ addToCart }
                >
                    <CardMedia
                        className='det-image'
                        component='img'
                        height="140"
                        src={ img }
                        alt="movie Img"
                    />
                    <CardContent className="det-content">
                        <div className='det-content-main'>
                            <Typography gutterBottom variant="h5" component="div">
                                { title }
                            </Typography>
                            {/* add div as button to avoid React's conflict */}
                            <div className='button-icon' >
                                { engLang ? 
                                    ( `Buy / Watch` ) 
                                    : ( `Ver / Comprar` ) }
                            </div>
                        </div>
                        <div className='det-content-sub'>
                            <Typography variant="body2" >
                                { genre }
                            </Typography>
                            <Typography variant="body2" >
                                { type }
                            </Typography>
                            <Typography variant="body2" >
                                { duration }
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions className="det-text">
                    <div className="det-synop">
                        <Typography variant="body2" >
                            { engLang ? 
                                ( `${ synopsis }` ) 
                                : ( `${ synopsis }` ) }
                        </Typography>
                    </div>
                    <div className='det-pricing'>
                        <div>
                            <Typography variant="body2" >
                                Un.
                            </Typography>
                            <Typography variant="body2" >
                                ${ unitPrice }/Reprod.
                            </Typography>
                        </div>
                        <div>
                            <Typography variant="body2" >
                                Plan
                            </Typography>
                            <Typography variant="body2" >
                                { engLang ? 
                                    ( `$3,64/Month` ) 
                                    : ( `$3,64/Mes` ) }
                            </Typography>
                        </div>
                    </div>
                </CardActions>
            </Card>  
        </div>
    )
}

export default ItemDetail;