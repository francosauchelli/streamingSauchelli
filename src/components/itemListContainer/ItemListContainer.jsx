import React, { useEffect, useState } from 'react'
// style
import './style/itemListContainer.css'
// local file
import Cards from '../cards/Cards'
import Facebook from '../preloader/Preloader'
// data from movesList.json
import mockDB from '../../helpers/moviesList.json'
// TODO: quitar cuando se agregen las routes
import ItemDetsContainer from '../itemDetsContainer/ItemDetsContainer'

const ItemListContainer = ()=>{
    // ! separar lógica
    const [ showSkeleton, setShowSkeleton ] = useState(true);

    const getMovies = ()=>{
        
        return new Promise( (resolve, reject) => {
            return setTimeout( ()=>{
                resolve(mockDB.mockDB)
            }, 3000)
        })
    }
    

    const [ movies, setMovies ] = useState([])

    useEffect( ()=>{
        getMovies().then( (movie) => {
            // to remove skeleton
            setShowSkeleton(false)
            // to get movies data
            setMovies(movie)
        }).finally( () => {
            console.log("MockDB downloaded.")
        })
    })

    // ! final lógica
    

    return(
        <div className="list-container">
            <Facebook  loading={ showSkeleton } />
            {movies.map( (movie) => {
                const {id, img, title, genre, type, duration } = movie
                return(
                    <Cards key={ id }
                        img={ `./assets/${img}` }
                        title={ title } 
                        genre={ genre }
                        type={ type }
                        duration={ duration }
                    />
                )
            })}
            <ItemDetsContainer />
        </div>
    )
}

export default ItemListContainer;