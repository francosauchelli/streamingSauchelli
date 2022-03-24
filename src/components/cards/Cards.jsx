import React, { useState } from 'react'
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

const Cards = (props) =>{
    // ! pasar lógica a otro archivo
    // counter model
    const [ count, setCount ] = useState(0)

    const addUnity = ()=> {
        if(count < 4 ){
            setCount( count + 1 );
        }
    }

    const removeUnity = () => {
        if(count > 0){
            setCount( count - 1 );
        }
    }

    // add button
    const [add, setAdd] = useState()

    const addToCart = () => {
        const currentLimitOrder = 3;

        let message = `${count} days of ${title}'s ${genre}\n`
        message += `had been added to cart.`
        
        let limitMessage = `Sorry, currently the limit order per movie`
        limitMessage += ` is ${currentLimitOrder} days.`

        if(count>0 && count<4){
            alert(message);
        } 
        else if (count>3){
            alert(limitMessage)
        }
        else{
            alert(`You must add at least one day`)
        }

    };

    // ! fin lógica

    const {img, title, genre, duration, type} = props;

    return(
        <div className="item-container">
            <Card className="item-card" sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ img }
                        alt="movie Img"
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
                <CardActions className="card-actions">
                    <Button onClick={ addToCart }size="small">
                        Buy/See
                    </Button>
                    <ItemCount
                        addUnity={ addUnity }
                        removeUnity={ removeUnity }
                        count={ count }
                    />
                </CardActions>
            </Card>
        </div>
    )
}

export default Cards;