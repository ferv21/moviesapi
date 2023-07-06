import React, { useEffect, useState } from "react";
import {BsFillStarFill} from 'react-icons/bs'
import { Swiper, SwiperSlide } from "swiper/react";
import './styles.scss'
import MovieCard from "../MovieCard";
import SectionTitle from "../SectionTitle"

const API_TopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=a4ffcbf84beafd41f636bb89a5153ac2";


const TopRatedList = () => {

    const [moviesTopRated, setMoviesTopRated] = useState([]);

    useEffect(() => {
        fetch(API_TopRated)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            setMoviesTopRated(data.results);
        });
    },[])


    return (
        <div className="section__padding"> 
            
            
                <SectionTitle title="Top Rated" 
                icon={<BsFillStarFill color="gold" size={25}/>}
                />
                    
         

            <Swiper
            className="movielist"
            slidesPerView={3}
            navigation
            >
                {moviesTopRated.map((movie) =>(
                    <SwiperSlide className="movieitem">
                        <MovieCard key={movie.id}{...movie}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default TopRatedList;