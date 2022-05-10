import React, { createContext, useState } from 'react';


// Creating Context
const LangContext = createContext();

// Provider
const LangProvider = ( { children } ) => {
    const [ engLang, setEngLang ] = useState( true );
    
    const handleChangeLang = () => {
        setEngLang( !engLang );
    }

    const dataContext = {
        engLang,
        handleChangeLang,
    }

    return (
        <LangContext.Provider value={ dataContext }>
            { children }
        </LangContext.Provider>

    )
}

export { LangProvider };
export default LangContext;