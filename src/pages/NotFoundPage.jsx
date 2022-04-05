import React from 'react';
import { Link } from 'react-router-dom'
// styles
import './styles/notFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='error-img-container' >
            <Link to={'/'} >
                <img src="./assets/error404/404sw.jpg" alt="404 Error" />
            </Link>
        </div>
    )
}

export default NotFoundPage;