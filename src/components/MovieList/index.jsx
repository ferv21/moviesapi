import { useEffect, useState } from 'react';
import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react'
import EffectCoverflow from 'swiper';
import {BsFire} from 'react-icons/bs'

import "./styles.scss";

import MovieCard from '../MovieCard'
import SectionTitle from '../SectionTitle';

const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=a4ffcbf84beafd41f636bb89a5153ac2";


const MovieList = () => {

    const [moviesPolular, setMoviesPopular] = useState([]);
    const [moviesTopRated, setMoviesTopRated] = useState([]);

    useEffect(() => {
      fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data.results);
        setMoviesPopular(data.results);
      })
    },[])

    return (
        <div className="section__padding">

            <SectionTitle title="Most Popular" icon={<BsFire color="red" size={25}/>} />

          <Swiper 
            className="movielist"
            slidesPerView={3}
            navigation
            modules={{EffectCoverflow}}
            // effect="coverflow"
            // coverflowEffect={{slideShadows:false}}
          >
            {moviesPolular.map((movie) => (
              <SwiperSlide className="movieitem">
                <MovieCard key={movie.id} {...movie}/> 
              </SwiperSlide>
            ))}

          </Swiper>
        </div>
        
    )
}

export default MovieList;