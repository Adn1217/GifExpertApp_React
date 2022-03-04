import { useState, useEffect } from "react";
import { getGifs } from "../Helpers/functions";

export const useDoFetch = ( url ) => {
       
    const [imgs, setImgs] = useState([]);

    const handleSetImgs = (gifs) => { // Concatena las imagenes en serie en pila.
        // setImgs( (imgs) => gifs.concat(imgs))
        setImgs( () => gifs)
    }
    useEffect(() => {
        const gifsProm =  fetch( url )
        .then( ( resp )  => 
                resp.json()
            )
        .then( ( { data } ) =>  
            {
                // console.log(data); // Demasiada información.
                const gifs = getGifs({data, handleSetImgs})
                // console.log(gifs); // Data solo con info a utilizar.
                // setImgs( () => gifs )
                handleSetImgs( gifs );
            }
        )
        // console.log(gifsProm)
        // return gifsProm;
    },[url])    
        
    return imgs;
}