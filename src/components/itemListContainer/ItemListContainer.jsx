import React, { 
        useEffect,
        useState,
        useContext } from 'react'
import { useParams } from 'react-router-dom';
// style
import './style/itemListContainer.css'
// local file
import Cards from '../cards/Cards'
import Facebook from '../preloader/Preloader'
import LangContext from '../../context/LangContext';
// data from movesList.json
import localDataBase from '../../data/moviesList.json'

const ItemListContainer = ()=>{
    const [ showSkeleton, setShowSkeleton ] = useState( true );

    // for language selection
    const { engLang } = useContext( LangContext );

    const [ movies, setMovies ] = useState( [] )

    const { type } = useParams();


    useEffect( (  )=>{
            setShowSkeleton( true );
            setMovies( [] )

        // retrieve and filter the titles
        getMovies().then( ( response ) => {
            // to remove skeleton
            setShowSkeleton( false );
            // to get movies data
            setMovies( response );
            // to filter by type
            if( type ) {
                filterByType( response, type);
            }
        }).finally( () => {
            console.log("MockDB downloaded.")
        })
    }, [ type, engLang ] )


    const getMovies = ()=>{
        const url = engLang ?
                ( localDataBase[0].mockDB[0].mockEnglish )
                : ( localDataBase[0].mockDB[0].mockSpanish );
        
        return new Promise( (resolve, reject) => {
            return setTimeout( () => {
                resolve( url )
            }, 3000)
        })
    }
    

    const filterByType = ( moviesList, type ) => {
        let arrayMovies = []

        moviesList.map( (movie)=> {
            let movieType = '';

            // add condition. If spanish is selected, "película" and "movie" should match
            if( movie.type==='Película' ) {
                movieType = 'movie';
            } else {
                movieType = movie.type.toLowerCase();
            }

            // filter by type
            if( movieType === type) {
                arrayMovies = [ ...arrayMovies, movie]
            }
        })
        return setMovies( arrayMovies )
    }


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