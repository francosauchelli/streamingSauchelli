import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
import ItemCount from '../itemCount/ItemCount'

const Cards = ( props ) =>{
    // ! pasar lógica a otro archivo

    const addToCart = () => {
        console.log( "Click, buy button" )
        
    //     const currentLimitOrder = 3;

        // let message = `${ count } days of ${ title }'s ${ genre }\n`
        // message += `had been added to cart.`
        
        // let limitMessage = `Sorry, currently the limit order per movie`
        // limitMessage += ` is ${ currentLimitOrder } days.`

        // if(count>0 && count<4){
        //     alert(message);
        // } 
        // else if (count>3){
        //     alert(limitMessage)
        // }
        // else{
        //     alert(`You must add at least one day`)
        // // }
    };
    const [ cardCounter, setCardCounter ] = useState( [] );

    const settingCounterCard = ( count ) => {
        setCardCounter( count )
    }

    // ! fin lógica
 
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
                                Duration: { duration }
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions className="card-actions">
                    <Button onClick={ addToCart } size="small">
                        Buy / Watch
                    </Button>
                    <ItemCount action={ settingCounterCard } />
                </CardActions>
            </Card>
        </div>
    )
}

export default Cards;