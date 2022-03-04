import React from 'react'
import { setURL } from '../Helpers/functions';
import { CatImg } from './CatImg';

export const SearchSection = ({cats, fetched}) => {
    
    let url = setURL({cats})
    const categories = cats.slice(3, cats.length);
    // console.log(fetched, categories)
    const lstCats = fetched? (
        categories.length? categories.reverse().map( category => {
        let url = setURL({ cats }, category, category);
        
        return ( // Código para fetch al agregar una categoría.
            <ul key = {Math.random()}>
                <h2 className="animate__animated animate__bounce">{ category }</h2>
                <CatImg key = { category } url = { url }/>
            </ul>
            )
        }) : ( // Código para fetch por defecto.
            <>
            <h2 className="animate__animated animate__bounce">{ cats[0] }</h2>
            <CatImg key = { cats[0] } url = { url } />
            </>
            )): ( // Código para cuando no se ha hecho fetch.
            <p className = 'animate__animated animate__slideInUp'> Imágenes...</p>)

    return(
        <>
        { lstCats }
        </>)
}
export default SearchSection