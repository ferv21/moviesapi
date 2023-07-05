import React from "react";

const MovieCard = ({title,overview,poster_path}) => {

    const API_IMG ="https://image.tmdb.org/t/p/w500/"

    return (
        <div>
            <img src={`${API_IMG}`+poster_path} alt="" />
            <h1>{title}</h1>
            <p>{overview}</p>
        </div>
    )
}

export default MovieCard;