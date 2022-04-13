import React, { useEffect } from 'react';
// style
import './static/style/itemCount.css'
// Material-ui
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';


const ItemCount = ( props ) => {
    const { actionAdd, actionRemove, counter } = props;

    const handleClick = ( e ) => {
        e.preventDefault()
    }

    return(
        <div 
            className="counter-container"
            onClick={ handleClick } 
        >
            <div className="remove-button-container">
                <Button onClick={ actionRemove } 
                    className="remove-button"
                    // to disable the button when it's value is 1
                    disabled={ counter===1 ? true : false }
                    >
                    <StarIcon className="star-button" />
                    <p>-</p>
                </Button>
            </div>
            <div className="counter-display">
                <p>{ counter }</p>
            </div>
            <div className="add-button-container">
                <Button onClick={ actionAdd } className="add-button">
                    <StarIcon className="star-button" />
                    <p>+</p>
                </Button>
            </div>
        </div>
    )
};

export default ItemCount;