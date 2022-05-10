import React, { useContext } from 'react';
// Material-ui
import Switch from '@mui/material/Switch'
// style
import './style/langSwitch.css'
// local files
import LangContext from '../../context/LangContext';


const LangSwitch = () => {
    const { handleChangeLang, engLang } = useContext( LangContext );

        const language = engLang ? ( 'english' ) : ( 'spanish' ); 

    return (
        <Switch 
            defaultChecked
            onChange={ handleChangeLang }
            className={ `lang-container-${language}` }
        />
    )
}

export default LangSwitch