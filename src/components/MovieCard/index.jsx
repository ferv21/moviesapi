import React from "react";
import './styles.scss'



const MovieCard = ({title,overview,poster_path}) => {

    const getDescricao = (overview) => {
        if (overview.length > 100) {
          return overview.slice(0, 97) + '...'
        }
        return overview
      }

    const getTitle = (title) => {
        if(title.length > 15){
            return title.slice(0, 13) + '...'
        }
        return title;
    }  

    const API_IMG ="https://image.tmdb.org/t/p/w500/"

    return (
        <div className="moviecard">
            <img src={`${API_IMG}`+poster_path} alt="" />
            <div className="moviecard__content">
                <h1>{getTitle(title)}</h1>
                <p>{getDescricao(overview)}</p>
            </div>
        </div>
    )
}

export default MovieCard;