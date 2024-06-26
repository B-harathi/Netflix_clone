import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import Text from '../Text/Text'
import Button from '../../components/Button/Button'
import {FaPlay} from "react-icons/fa";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { getPageData } from '../../API/Movies';
import './HeroBanner.css'

const HeroBanner = () => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getPageData();
        const randomIndex = Math.floor(
          Math.random() * response?.netflixOriginals?.results.length
        );
        setMovie(response?.netflixOriginals?.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    };

    fetchMovie();

    const intervalId = setInterval(fetchMovie, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const handleDescription = (data, n) => {
    return data?.length > n ? data.substring(0, n) + "..." : data;
  };



  return (
    <div id='hero_banner'>
       <NavBar/>
    {movie && (
      <>
        <div className="hero-img">
          <img
            src={`${baseUrl + movie?.backdrop_path}`}
            alt="hero banner img"
          />
        </div>
        <div className="hero-content " >
          <Text content={movie?.name || movie?.title}  className="movies_title" fontSize='37px' fontWeight='600'/>
          <div className="hero-text">
          <Text 
            content={handleDescription(movie?.overview, 200)}color={"white"} fontSize='22px' />

          </div>
          <div className="hero-buttons">
            <Button
              size="small-play"
              icons={<FaPlay/>}
              color="black"
              bg="bg-white"
              value="Play"
            />
            
            <Button
              size="small-play"
              icon={<AiTwotoneExclamationCircle className="moreicon" />}
              className="watchlater"
              color="white"
              bg="grey"
              value="More Info"

            />
          </div>
        </div>
      </>
    )} 
    </div>
  )
}

export default HeroBanner
