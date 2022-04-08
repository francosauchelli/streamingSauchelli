import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// style
import './style/itemListContainer.css'
// local file
import Cards from '../cards/Cards'
import Facebook from '../preloader/Preloader'
// data from movesList.json
import mockDB from '../../data/moviesList.json'

const ItemListContainer = ()=>{
    // ! separar lógica
    const [ showSkeleton, setShowSkeleton ] = useState( true );

    const getMovies = ()=>{
        
        return new Promise( (resolve, reject) => {
            return setTimeout( () => {
                resolve(mockDB.mockDB)
            }, 3000)
        })
    }

    const [ movies, setMovies ] = useState( [] )

    const { type } = useParams();

    useEffect( ()=>{
        setMovies( [] )
        setShowSkeleton( true );

        getMovies().then( ( response ) => {
            // to remove skeleton
            setShowSkeleton( false )
            // to get movies data
            setMovies( response )
            // to filter by type
            if( type ) {
                filterByType( response, type);
            }
        }).finally( () => {
            console.log("MockDB downloaded.")
        })
    }, [ type ])


    const filterByType = ( moviesList, type ) => {
        let arrayMovies = []

        moviesList.map( (movie)=> {
            const movieType = movie.type.toLowerCase();

            if( movieType === type) {
                arrayMovies = [ ...arrayMovies, movie]
            }
        })
        return setMovies( arrayMovies )
    }

    // ! final lógica
    

    return(
        <div className="list-container">
            <Facebook  loading={ showSkeleton } />
            {movies.map( (movie) => {
                const {id, img, title, genre, type, duration } = movie;

                return(
                    !showSkeleton ? (
                        <Cards key={ id }
                            id={ id }
                            img={ `./assets/${img}` }
                            title={ title } 
                            genre={ genre }
                            type={ type }
                            duration={ duration }
                        /> 
                    )
                    : ( <></> )
                )
            })}
            {/* <ItemDetsContainer /> */}
        </div>
    )
}

export default ItemListContainer;