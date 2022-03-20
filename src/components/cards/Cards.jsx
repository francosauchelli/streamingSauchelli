import React from 'react'
// style
import './static/style/Cards.css'
// Material-ui 
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const Cards = (props) =>{
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
                    <Button size="small">
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Cards;