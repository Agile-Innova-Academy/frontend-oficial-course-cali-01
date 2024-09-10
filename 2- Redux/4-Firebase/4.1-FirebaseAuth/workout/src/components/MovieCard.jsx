import React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Box, Modal, TextField } from '@mui/material'
import useForm from '../../hooks/useForm'
import { updateAsync } from '../redux/slices/movies'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: '#000'
}

const MovieCard = ({ movie, refreshStore }) => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const [formValues, handleInputChange, reset] = useForm({
    Title: movie.Title,
    Type: movie.Type,
    Poster: movie.Poster,
    Value: movie.Value,
  })

  const handleSubmit = async e => {
    e.preventDefault()
    const newData = {
      ...formValues,
      id: movie.id,
    }

    await updateAsync(newData).then(() => {refreshStore()})
    reset()
  }

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              {movie.Value}
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={movie.Title}
          subheader={movie.Year}
        />
        <CardMedia
          component='img'
          height='194'
          image={movie.Poster}
          alt='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {movie.Description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='edit'>
            <EditIcon onClick={handleOpen} />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
          >
            <Box sx={style}>
              <Typography id='modal-modal-title' variant='h5' component='h2'>
                Editting {movie.Title}
              </Typography>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Nombre Pelicula:</label>
                  <TextField
                    type='text'
                    name='Title'
                    value={formValues.Title}
                    onChange={handleInputChange}
                    placeholder='Nombre de la película'
                  />
                </div>
                <div>
                  <label>Tipo:</label>
                  <TextField
                    type='text'
                    name='Type'
                    value={formValues.Type}
                    onChange={handleInputChange}
                    placeholder='Ingrese tipo'
                  />
                </div>
                <div>
                  <label>Photo url:</label>
                  <TextField
                    type='text'
                    name='Poster'
                    value={formValues.Poster}
                    onChange={handleInputChange}
                    placeholder='Ingrese una url de imagen'
                  />
                </div>
                <div>
                  <label>Calificación:</label>
                  <TextField
                    type='number'
                    name='Value'
                    value={formValues.Value}
                    onChange={handleInputChange}
                    placeholder='Ingrese su contraseña'
                  />
                </div>
                <button type='submit'>Registrar</button>
              </form>
            </Box>
          </Modal>
        </CardActions>
      </Card>
    </>
  )
}

export default MovieCard
