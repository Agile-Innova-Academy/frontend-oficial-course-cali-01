import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import useFetch from '../hooks/useFetch'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  Pagination,
  Stack,
  TextField
} from '@mui/material'
import Search from '@mui/icons-material/Search'
import CharacterCard from './CharacterCard'

const RyMApi = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});

  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const data = useFetch(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${searchTerm}`
  )

  const handleClickOpen = (id) => {
    setOpen(true);
    setSelected(data?.results.find(item => item.id === id));
  };

  const handleClose = () => {
    console.log('cerrar')
    setOpen(false);
  };


  return (
    <>
      <Box justifyContent='center' display='flex' my={4}>
        <TextField
          id='input-with-icon-textfield'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <Search />
              </InputAdornment>
            )
          }}
          placeholder='Buscar personaje'
          variant='outlined'
          onInput={({ target }) => {
            setSearchTerm(target.value)
            setPage(1)
          }}
        />
        
      </Box>
      <Box justifyContent='center' display='flex' my={4}>
        <Stack spacing={2}>
          <Pagination
            count={data?.info.pages}
            color='primary'
            onChange={(e, value) => {
              setPage(value)
            }}
          />
        </Stack>
      </Box>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {data?.results.map(item => {
          return (
            <CharacterCard item={item} handleClickOpen={handleClickOpen}/>
          )
        })}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          {selected && <CharacterCard item={selected || {}} handleClickOpen={handleClickOpen}/>}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Volver</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default RyMApi
