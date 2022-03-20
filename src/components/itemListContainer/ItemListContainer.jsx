import React from 'react'
// style
import './style/itemListContainer.css'
// local file
import Cards from '../cards/Cards'
// test image
import testImage from '../cards/test.png';
import testImage2 from '../cards/test2.png';
import testImage3 from '../cards/test3.png';
import testImage4 from '../cards/test4.png';


const ItemListContainer = () =>{
    return(
        <div className="list-container">
            <Cards 
                img={ testImage } 
                title="Interestellar" 
                genre="Science fiction"
                type="Movie"
                duration="169m"
            />
            <Cards 
                img={ testImage2 } 
                title="1917" 
                genre="Emotional"
                type="Movie"
                duration="119m"
            />
            <Cards 
                img={ testImage3 } 
                title="Split" 
                genre="Thriller"
                type="Movie"
                duration="117m"
            />
            <Cards 
                img={ testImage4 } 
                title="Ozark" 
                genre="Threiller/Crim"
                type="Serie"
                duration="4 seasons"
            />
        </div>
    )
}

export default ItemListContainer;