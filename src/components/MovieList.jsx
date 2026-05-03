import React from 'react'
import MovieCard from './MovieCard'

function MovieList({films}) {
 
  return (
     <>
     {
    films.map((element)=>(
    <MovieCard {...element}/>
  ))
     }
     </>
  )
}

export default MovieList
