import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// components
import ItemDetail from '../itemDetail/ItemDetail'
// Material-ui
import LinearProgress from '@mui/material/LinearProgress';
// styles
import './style/itemDetsContainer.css'
// data form movielist.json
import mockDB from '../../data/moviesList.json'


const ItemDetsContainer = ()=>{

    const getDetail = ()=>{

        return new Promise ( (resolve, reject) => {
            return setTimeout( ()=>{
                resolve(mockDB.mockDB)
            }, 2000)
        })
    }
    const [ movieDetail, setMovieDetail ] = useState( [] )

    const [ loading, setLoading ] = useState( true );

    const { id } = useParams();

    useEffect( ()=>{

        getDetail().then( ( movieList ) => {
        
            movieList.map( ( movie ) => {
                if( movie.id === id ) {
                    setMovieDetail( movie )
                }
            })
            setLoading( false );

        })
    }, [])

    return (
        <div className='dets-container' >
            { !loading ? (
                <ItemDetail 
                    title={ movieDetail.title }
                    image={ `/assets/${ movieDetail.img }` }
                    genre= { movieDetail.genre }
                    type={ movieDetail.type }
                    duration={ movieDetail.duration }
                    unitPrice= { movieDetail.unitPrice }
                />
                ) 
                : ( <LinearProgress className='linear-loader' />)
            }
        </div>
    )
}   

export default ItemDetsContainer;