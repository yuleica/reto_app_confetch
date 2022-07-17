import {useState, useEffect} from 'react';


export const useFetch =  (url) => {
    const [estado,setEstado]=useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        fetch(url)
        .then((response) => response.json())
        .then( (dataResultante) => setEstado({
            loading: false,
            data: dataResultante} ) )
        .catch(error => console.error('Error en el URL:', error));

    }, [url]);

    return estado;
}


