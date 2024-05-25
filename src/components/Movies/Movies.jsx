import React from 'react'
// import dataBase from '../../../db.json' //imported json file 
import MovieCard from '../MovieCard/MovieCard';

const Movies = ({ movies }) => {
    return (
        <div className="container">
            {/* Render the filtered movie data */}
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
}

export default Movies