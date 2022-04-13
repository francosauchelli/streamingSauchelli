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


const ItemDetsContainer = ()=>{
    const { engLang } = useContext( LangContext );

    const getDetail = ()=>{

        const url = engLang ?
                ( localDataBase[0].mockDB[0].mockEnglish )
                : ( localDataBase[0].mockDB[0].mockSpanish )

        return new Promise ( (resolve, reject) => {
            return setTimeout( ()=>{
                resolve( url );
            }, 2000)
        })
    }
    const [ movieDetail, setMovieDetail ] = useState( [] )

    const [ loading, setLoading ] = useState( true );

    const { id } = useParams();

    useEffect( ()=>{

        getDetail().then( ( movieList ) => {
            console.log(movieList)
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