
import { useParams, NavLink, Link, Outlet } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import searchApi from '../../services/api'
import { toast } from 'react-toastify';
export default function Reviews() {
    const [reviews, setReviews] = useState(null)
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    

    useEffect(() => {

        searchApi
            .fetchReviews(movieId)
            .then(({ results }) =>
                
                
                setReviews(results))
            //       .then(({ results }) => {
            //     if (results.length === 0) {
            //       toast.error('There are no reviews for this movie ')
            //         console.log("error");
            //       return;
            //     }
            //     setReviews(results);

            //   })
            .catch(error => setError(error.message))
        
      
    }, [movieId]);
         
     
    console.log(reviews)
    return (
        <div>
            {reviews ? (<ul>
{reviews.map(({ id, author, content }) =>  <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>)}
            </ul>) : (<p>There are no reviews for this movie </p>)
        }
       

        </div>
       
    )
}
     