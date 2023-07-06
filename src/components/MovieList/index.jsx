import { useEffect, useState } from 'react';
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import EffectCoverflow from 'swiper';

import "./styles.scss";

import MovieCard from '../MovieCard'

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=a4ffcbf84beafd41f636bb89a5153ac2";

const MovieList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setMovies(data.results);
      })
    },[])

    return (
        <div className="section__padding">
          <Swiper 
            className="movielist"
            slidesPerView={3}
            navigation
            modules={{EffectCoverflow}}
            // effect="coverflow"
            // coverflowEffect={{slideShadows:false}}
          >
            {movies.map((movie) => (
              <SwiperSlide className="movieitem">
                <MovieCard key={movie.id} {...movie}/> 
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
        
    )
}

export default MovieList;