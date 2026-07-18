import { IMovie } from "./model/IMovie";
import MovieCard from "./props/MovieCard";
import React from 'react'
import moviejson from '../data/movie.json'
const Movie = () => {
    const  films :IMovie[]= moviejson
  return (
    <div style={{textAlign:"center",backgroundColor:"brown"}}>
        <>
        <MovieCard movie={films} />
        </>
    </div>
  )
}

export default Movie