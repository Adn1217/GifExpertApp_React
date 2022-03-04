import React, { useState, useEffect } from 'react';
import { SearchSection } from './SearchSection';
import { setURL, listInfoImgs, listImgs, getGifs } from '../Helpers/functions';

export const GifGrid = ({ cats, insertedValue }) => {

    const [imgs, setImgs] = useState([]);
    const [fetched, setFetched] = useState(false);

    let search = insertedValue;
    const url = setURL(cats, search, search);

    const handleSetImgs = ( gifs ) => {
        setImgs( () => gifs )
    }

    const handleResetImgs = ( gifs ) => {
        setFetched(() => false)
        setImgs( () => [] )
    }

    const doFetch = ( url ) => {
        const gifsProm =  fetch( url )
        .then( ( resp )  => 
                resp.json()
            )
        .then( ( { data } ) =>  
            {
                // console.log(data); // Demasiada información.
                // const gifs = getGifs({data, handleSetImgs})
                const gifs = getGifs ({data})
                // console.log(gifs); // Data solo con info a utilizar.
                handleSetImgs( gifs );
            }
        )
        return gifsProm;
    }

    const handleFetch = ( search ) => { 

        const url = setURL(cats, search, insertedValue);
        setFetched(() => true)
        doFetch( url );
        return imgs;
    }


    const ButtonFetch = () => {
        return <button onClick = { handleFetch }>Fetch</button>
    }
    
    return (
        <>
            <h2> { url } </h2>
            <hr></hr>
            <hr></hr>
            <h3>Búsqueda: { search }.</h3>
            <h3> Resultados:</h3>
            <ol>
                {
                    listInfoImgs( imgs )
                }
            </ol>
            <hr></hr>
            <hr></hr>
            <ButtonFetch /> 
            <button onClick = { handleResetImgs }>Reset</button>
            <h2>----Componente 3----</h2>

            { <SearchSection key = { cats.length } cats = { cats } fetched = { fetched}/> 
            }
        </>
  )
};

export default GifGrid;