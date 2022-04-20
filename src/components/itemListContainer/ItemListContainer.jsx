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
// Firebase: data & components
import firebaseDB from '../../data/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ()=>{
    const [ showSkeleton, setShowSkeleton ] = useState( true );

    // for language selection
    const { engLang } = useContext( LangContext );

    const [ movies, setMovies ] = useState( [] )

    const { type } = useParams();


    const getMovies = async () => {
        const itemsCollection = collection( firebaseDB, 'mockProducts' );
        const itemsSnapShot = await getDocs( itemsCollection );
        
        const itemsList = itemsSnapShot.docs.map( (el) => {
            let singleTitle = el.data();
            singleTitle.id = el.id;

            return singleTitle;
        });

        return itemsList;
    }
    

    const filterByType = ( moviesList, type ) => {
        let arrayMovies = []

        moviesList.map( (movie) => {
            let movieType = ( Array.isArray( movie.type ) ?
                                ( engLang ? ( movie.type[0] ) : ( movie.type[1] ) )
                                : ( movie.type )
                            );

            // add condition. If spanish is selected, "película" and "movie" should match
            if( movieType==='Película' ) {
                movieType = 'movie';
            } else {
                movieType = movieType.toLowerCase();
            }

            // filter by type
            if( movieType === type) {
                arrayMovies = [ ...arrayMovies, movie]
            }
        })
        return setMovies( arrayMovies )
    }


    useEffect( (  )=>{
        setShowSkeleton( true );
        setMovies( [] );

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


    return(
        <div className="list-container">
            <Facebook  loading={ showSkeleton } />
            {movies.map( (movie) => {
                const { 
                    id,
                    img,
                    title, 
                    genre,
                    type,
                    duration,
                    unitPrice
                } = movie;


                return(
                    !showSkeleton ? (
                        <Cards key={ id }
                            id={ id }
                            img={ `./assets/${img}` }
                            title={ 
                                // check the language only if it is an array
                                Array.isArray( title ) ?
                                    ( engLang ? (title[0]) : (title[1]) ) 
                                        : ( title )
                            } 
                            genre={
                                // check the language only if it is an array
                                Array.isArray( genre ) ?
                                    ( engLang ? (genre[0]) : (genre[1]) ) 
                                    : ( genre )
                            }
                            type={ 
                                // check the language only if it is an array
                                Array.isArray( type ) ?
                                    ( engLang ? (type[0]) : (type[1]) ) 
                                    : ( type )
                            }
                            duration={ 
                                // check the language only if it is an array
                                Array.isArray( duration ) ?
                                    ( engLang ? (duration[0]) : (duration[1]) ) 
                                    : ( duration )
                            }
                            unitPrice={ unitPrice }
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