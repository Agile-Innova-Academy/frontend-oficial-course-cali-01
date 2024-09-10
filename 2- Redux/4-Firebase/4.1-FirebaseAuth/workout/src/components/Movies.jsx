import React, { useEffect } from 'react'
import {
  createAsync,
  readAsync,
  setMovies,
  updateAsync
} from '../redux/slices/movies'
import { useDispatch, useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import { Box } from '@mui/material'

const Movies = () => {
  const dispatch = useDispatch()
  const { movies } = useSelector(store => store.movies)

  async function addingData () {
    // await createAsync(movie)
  }

  async function refreshStore () {
    console.log("Actualizando")
    await readAsync().then(response => {
      dispatch(setMovies(response))
    })
  }

  useEffect(() => {
    refreshStore()
  }, [])

  return (
    <>
      <div>Movies</div>
      <button onClick={addingData}>Agregar</button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
        {movies.map(movie => (
          <MovieCard movie={movie} refreshStore={refreshStore}/>
        ))}
      </Box>
    </>
  )
}

export default Movies
