
import { useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import searchApi from '../../services/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Reviews() {
    const [reviews, setReviews] = useState(null)
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    

    useEffect(() => {

        searchApi
            .fetchReviews(movieId)
            .then(({ results }) => {
                  if (results.length === 0) {
                  toast('There are no reviews for this movie ')
                  return;
            }
                setReviews(results)})
            .catch(error => setError(error.message))
      
    }, [movieId]);

    return (
        <div>
            {reviews ? (<ul>
              {reviews.map(({ id, author, content }) =>  <li key={id}>
                <p>Author: {author}</p>
                <p>{content}</p>
              </li>)}
            </ul>) : (<p>There are no reviews for this movie </p>)
        }
        <ToastContainer theme="dark"
       position="top-right"
       autoClose={4000}
       hideProgressBar={false}
       newestOnTop={false}
       closeOnClick
       rtl={false}
       pauseOnFocusLoss
       draggable
       pauseOnHover/>
        </div>
       
    )
}
     