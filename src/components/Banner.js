import React, { useState, useEffect } from 'react'
import axios from '../api/axios'; // Assuming you have an axios insta
import requests from '../api/request'; // Import the requests object
import './Banner.css'; // Assuming you have a CSS file for styling

const Banner = () => {

  const [movie, setMovie] = useState("");

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    // 배너 전체 정보 가져오기 20개
    const request = await axios.get(requests.fetchNowPlaying);
    // 랜덤으로 영화 하나 가져오기
    const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length - 1)].id;
    console.log('movie Id : ' + movieId);
    // 가져온 하나 영화의 상세 정보 가져오기
    const { data: movieDetail } = await axios.get(`/movie/${movieId}`, {
      params: {
        append_to_response: 'videos',
      }
    });

    setMovie(movieDetail);
  }


  return (
<header
        className='banner'
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >
        <div style={{ fontSize: 10 }} className='banner__contents'>
          <h1 className='banner__title'>
            {movie.title || movie.name || movie.original_name}
          </h1>

          <div className='banner__buttons'>
            {movie?.videos?.results[0]?.key &&
              <button>
                Play
              </button>
            }

          </div>
          <p className='banner__description'>
            {movie.overview}
          </p>
        </div>
        <div className='banner--fadeBottom' />
      </header>
  )
}

export default Banner
