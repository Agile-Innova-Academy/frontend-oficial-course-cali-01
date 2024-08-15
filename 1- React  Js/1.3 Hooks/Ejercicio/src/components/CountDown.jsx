import { Box, Button } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'

const CountDown = () => {
  const [segundos, setSegundos] = useState(0)
  const [minutos, setMinutos] = useState(0)
  const interval = useRef(null)
  const countInput = useRef(null)

  function handleCount () {
    setMinutos(countInput.current.value)
    setSegundos(0)
  }

  useEffect(() => {
    if (countInput.current.value) {
      if (segundos < 0) {
        setSegundos(59)
        setMinutos(minutos - 1)
      } else {
        interval.current = setInterval(() => {
          setSegundos(segundos - 1)
        }, 1000)
      }
    } else {
      setMinutos(0)
      setSegundos(0)
    }

    if (countInput.current.value && minutos === 0 && segundos === 0) {
      clearInterval(interval.current)
      setMinutos(0)
      setSegundos(0)
      setTimeout(() => {
        alert('Tiempo finalizado')
      }, 1000);
    }

    return () => {
      clearInterval(interval.current)
    }
  })
  return (
    <>
      <h1>Cuenta regresiva</h1>
      <Box display='flex' justifyContent='center' flexDirection='column'>
        <input ref={countInput} type='number' placeholder='Ingrese minutos' />
        <Button variant='contained' onClick={handleCount}>
          Empezar
        </Button>
      </Box>
      <section style={{ display: 'flex' }}>
        <h2>{minutos > 9 ? minutos : `0${minutos}`}</h2>
        <h2>:</h2>
        <h2>{segundos > 9 ? segundos : `0${segundos}`}</h2>
      </section>
    </>
  )
}

export default CountDown
