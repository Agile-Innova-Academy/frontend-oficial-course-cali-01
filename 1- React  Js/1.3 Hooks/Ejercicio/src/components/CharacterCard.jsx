import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import React from 'react'

const CharacterCard = ({item, handleClickOpen}) => {
  return (
    <Card
      key={item.id}
      sx={{ maxWidth: 345, width: '12rem' }}
      onClick={() => {handleClickOpen(item.id)}}
    >
      <CardMedia sx={{ height: 140 }} image={item.image} title={item.name} />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {item.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {item.species}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {item.gender}
        </Typography>
      </CardContent>
      <CardActions display='flex' sx={{ justifyContent: 'center' }}>
        <Button
          variant='contained'
          size='small'
          color={
            item.status === 'Alive'
              ? 'success'
              : item.status === 'Dead'
              ? 'error'
              : 'secondary'
          }
        >
          {item.status}
        </Button>
      </CardActions>
    </Card>
  )
}

export default CharacterCard
