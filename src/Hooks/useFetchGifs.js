import { useState, useEffect } from "react";


export const useFetchGifs = () => {

    const [loadState, setLoadState] =  useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setTimeout(() => {
            setLoadState({
                data: [1, 2, 3, 4],
                loading: false
            })
        }, 3000) // Después de 3 segundos pasa loading se vuelve false.
    }, [])
    return loadState;

}