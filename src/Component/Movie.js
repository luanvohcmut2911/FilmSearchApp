import React from 'react';
const ConstURL = "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({movie})=>{
    // console.log("in movie", props);
    const linkPoster = (movie.Poster === "N/A" ? ConstURL : movie.Poster);
    // console.log(props);
    return (
        <div className="movie">
        <h4>{movie.Title}</h4>
        <div>
            <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={linkPoster}
            />
        </div>
        <p>({movie.Year})</p>
        </div>
    )
}
//using Poster and Title
export default Movie;