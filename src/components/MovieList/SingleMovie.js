import React from 'react'
import { useParams } from 'react-router-dom'

const SingleMovie = () => {
   const {movieId} = useParams()
  return (
    <div>
      <h2>SingleMovie - {movieId}</h2>
    </div>
  )
}

export default SingleMovie
