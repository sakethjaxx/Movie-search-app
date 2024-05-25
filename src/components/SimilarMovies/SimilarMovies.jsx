import React, { useEffect, useState } from 'react'
import MovieDB from "../../../db.json"
import { useParams } from 'react-router-dom'
import "./SimilarMovies.css"

const SimilarMovies = ({ genre }) => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const moviesFiltered = MovieDB.movies.filter((elem) => {
            for (let i = 0; i < genre.length; i++) {
                for (let j = 0; j < elem.genres.length; j++) {
                    return genre[i] == elem.genres[j] && id != elem.id
                }
            }
        })
        setMovies(moviesFiltered)
    }, [])


    return (
        <div className='main'>
            <p>More like this</p>
            <div className="wrapper">
                {movies.map((elem) => {
                    return (
                        <img src={elem.posterUrl} alt={elem.title} key={elem.id} />
                    )
                })}
            </div>
        </div>
    )
}

export default SimilarMovies