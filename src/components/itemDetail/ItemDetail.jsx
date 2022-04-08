import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// local files
import ItemCount from '../itemCount/ItemCount'
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

const ItemDetail = (props)=>{
    const { image,
            title, 
            genre, 
            type, 
            duration,
            unitPrice
        } = props;

    const [ detailCounter, setDetailCounter ] = useState( [] );

    const settingCounterDet = ( count ) => {
        setDetailCounter( count );
    }

    return (
        <div className="item-det-container" >
            <Card className="det-card" sx={{ maxWidth: 345 }}>
                <CardActionArea 
                    className="det-media"
                    component={ Link } to={ '/cartpage' }
                >
                    <CardMedia
                        className='det-image'
                        component='img'
                        height="140"
                        image={ image }
                        alt="movie Img"
                    />
                    <CardContent className="det-content">
                        <div className='det-content-main'>
                            <Typography gutterBottom variant="h5" component="div">
                                { title }
                            </Typography>
                            {/* add div as button to avoid React's conflict */}
                            <div className='button-icon' >
                                    Buy / Watch
                            </div>
                        </div>
                        <div className='det-item-count'>
                            <ItemCount action={ settingCounterDet } />
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem accusantium cupiditate, voluptates voluptatem quam velit eaque minima ipsam expedita fugiat consectetur veritatis quos qui. Neque illum quos atque? Animi, necessitatibus. 
                        </Typography>
                    </div>
                    <div className='det-pricing'>
                        <div>
                            <Typography variant="body2" >
                                Unit
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
                                $3,64/Month 
                            </Typography>
                        </div>
                    </div>
                    {/* TODO: agregar más funcionalidades */}
                </CardActions>
            </Card>  
        </div>
    )
}

export default ItemDetail;