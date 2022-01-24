

import { useParams, NavLink, Link, Outlet } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import searchApi from '../../services/api'
import { toast } from 'react-toastify';
        


export default function Cast() {
   
    const [cast, setCast] = useState(null)
    const { movieId } = useParams();
    const [error, setError] = useState(null);

    useEffect(() => {
        searchApi
            .fetchCast(movieId)
            .then(({cast} )=> {
                setCast(cast)
            
            })
   
            .catch(error => setError(error.message))
        
      
    }, [movieId]);
console.log(cast);

    return (
        <>
            {cast ? (
                <ul>
        
                    {cast.map(cast => (
                        <li key={cast.id} >
                            <img style={{
                                width: 100,
                                height: 150
                            }}
                
                                src={
                                    cast.profile_path
                                        ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                                        : <p>No img</p>
                                }
                                alt={cast.name}
                            />
                            <h2>{cast.name}</h2>
                            <p>character: {cast.character}</p>
                        </li>
                    ))}
                </ul>) : (<p>There is no information here</p>)}
        </>
         
       
    )
}