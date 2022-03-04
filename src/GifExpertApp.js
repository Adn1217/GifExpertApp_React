import React, { useEffect, useState } from "react"
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";
import { useFetchGifs } from "./Hooks/useFetchGifs";

const GifExpertApp = () => {

   const cats = ['One Punch', 'Samurai X', 'Dragon Ball'];
   const [categories, setCategories] = useState(cats);
   const [insertedValue, setInsertedValue] = useState(cats[0]);
   const { data, loading } = useFetchGifs();

   const handleAdd = (e) => {
        let id = categories.length - 2;
        let AlienIndex = categories.findIndex(element => element == 'Alien1')
        // console.log(AlienIndex)

        if ( AlienIndex >= 0 ){
            id = categories.length - AlienIndex + 1;
            
        }else{

            id = 1;

        }
        // setCategories( (categories) => categories.push('Alien')); // No funciona push retorna new array lenght en lugar de new array.
        setCategories( (categories) => categories.concat(['Alien'+ id.toString()])); //Lo mismo que:
        // setCategories( categories => [...categories,'Alien'] );
    }

    const handleDelete = (e) => {
        const len = categories.length;
        setCategories( (categories) => categories.splice(0,len - 1));
    }

    useEffect(() => {
        console.log(data, loading);
    },[ loading ]) // Solo se realiza una vez sin dependencias

    return (
        <>
        <h2>GifExpertApp</h2>
        <hr></hr>
        <button onClick={ handleAdd }>Agregar 'Alien'</button>
        <button onClick={ handleDelete }>Eliminar último</button>
        <h2>----Componente 1 ----</h2>
        {
            loading ? <p className = 'animate__swing animate__flash'>Dura 3 segundos cargando...</p> : <p className = 'animate__animated animate__fadeIn'>Fin de carga</p>
        }
        <br></br>
        <AddCategory setCategories = { setCategories } setInsertedValue = { setInsertedValue } />
        <h1>
            <ol>
                {
                    categories.map( category => {
                        return <li key = { category+1 }> { category }</li>
                    })
                }
            </ol>
        </h1>
        <hr></hr>
        <h2>Last category added URL</h2>
        <h2>----Componente 2----</h2>
            <GifGrid key = {Math.random()} 
                cats = { categories } insertedValue = { insertedValue }/>
        </>)
}

export default GifExpertApp;
