import React, { useState } from 'react';
// style
import './static/style/itemCount.css'
// Material-ui
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
// local files
import Cards from '../cards/Cards'

const ItemCount = ( props ) => {

    const { action } = props;

    // counter model
    const [ count, setCount ] = useState(1)

    const addUnity = ( e )=> {

        if(count < 4 ){
            setCount( count + 1 );
        }

        action( count );
    }
    const removeUnity = ( e ) => {

        setCount( count - 1 );
        
        action( count );
    }

    const handleClick = ( e ) => {
        e.preventDefault()
    }

    return(
        <div 
            className="counter-container"
            onClick={ handleClick } 
        >
            <div className="remove-button-container">
                <Button onClick={ removeUnity } 
                    className="remove-button"
                    // to disable the button when it's value is 1
                    disabled={ count===1 ? true : false }
                    >
                    <StarIcon className="star-button" />
                    <p>-</p>
                </Button>
            </div>
            <div className="counter-display">
                <p>{ count }</p>
            </div>
            <div className="add-button-container">
                <Button onClick={ addUnity } className="add-button">
                    <StarIcon className="star-button" />
                    <p>+</p>
                </Button>
            </div>
        </div>
    )
};

export default ItemCount;