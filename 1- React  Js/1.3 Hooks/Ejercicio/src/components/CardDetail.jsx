import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const CardDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [info, setInfo] = useState({})

  console.log(location);

  const getCharacterData = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    )
    const data = await response.json()
    setInfo(data)
  }

  useEffect(() => {
    getCharacterData()
  }, [id])

  return (
    <Box>
      <h1>{info.name}</h1>
    </Box>
  )
}

export default CardDetail
