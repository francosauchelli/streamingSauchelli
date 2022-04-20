import React, { useEffect,
                useState,
                useContext,
            } from 'react';
import { useParams } from 'react-router-dom';
// components
import ItemDetail from '../itemDetail/ItemDetail'
// Material-ui
import LinearProgress from '@mui/material/LinearProgress';
// styles
import './style/itemDetsContainer.css'
// local files
import LangContext from '../../context/LangContext';
// data form movielist.json
import localDataBase from '../../data/moviesList.json'
// Firebase: data & components
import { doc, getDoc } from 'firebase/firestore';
import firestoreDB from '../../data/firebase';


const ItemDetsContainer = () => {
    const { engLang } = useContext( LangContext );
    const { id } = useParams();

    const getDetail = async () => {
        const itemDoc = doc( firestoreDB, 'mockProducts', id );
        const itemSnapShot = await getDoc( itemDoc );

        return itemSnapShot.data()
    }


    const [ movieDetail, setMovieDetail ] = useState( [] )

    const [ loading, setLoading ] = useState( true );


    useEffect( ()=>{

        getDetail().then( ( movieResponse ) => {
            setMovieDetail( movieResponse );
            setLoading( false );
        })
    }, [] );

    const { img, title, genre, type, duration } = movieDetail

    return (
        <div className='dets-container' >
            {
            !loading ? (
                <ItemDetail 
                    title={ 
                        // check the language only if it is an array
                        Array.isArray( title ) ?
                            ( engLang ? (title[0]) : (title[1]) ) 
                                : ( title )
                    }
                    img={ `/assets/${ img }` }
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
                    unitPrice= { movieDetail.unitPrice }
                />
                ) 
                : ( <LinearProgress className='linear-loader' />)
            }
        </div>
    )
}


export default ItemDetsContainer;