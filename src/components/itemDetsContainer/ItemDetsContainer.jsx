import React, { useEffect, useState } from 'react';
// components
import ItemDetail from '../itemDetail/ItemDetail'
// styles
import './style/itemDetsContainer.css'
// data form movielist.json
import mockDB from '../../helpers/moviesList.json'

const ItemDetsContainer = ()=>{

    const getMovie = ()=>{

        return new Promise ( (resolve, reject) => {
            return setTimeout( ()=>{
                resolve(mockDB.mockDB)
            }, 2000)
        })
    }

    const [ movie, setMovie ] = useState([])
    const [ loading, setLoading ] = useState(false);

    useEffect( ()=>{
        getMovie().then( ( movieList ) => {
            setMovie( movieList[0] )
            setLoading(true);
        })
    })


    const { title, 
            img, 
            genre, 
            type, 
            duration,
            unitPrice
        } = movie

    return (
        <>
            {loading ? (
                <div className='dets-container' >
                    <ItemDetail 
                        title={ title }
                        image={ `./assets/${ img }` }
                        genre= { genre }
                        type={ type }
                        duration={ duration }
                        unitPrice= { unitPrice }
                    />
                </div>) 
            : (<></>)
            }
        </>
    )
}   

export default ItemDetsContainer;