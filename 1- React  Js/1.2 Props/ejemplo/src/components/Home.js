import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Details from "./Details";

const Home = ({ movie }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {" "}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={movie.Poster}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.Title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.Description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="outlined"
            onClick={handleClickOpen}
          >
            Detalle
          </Button>
        </CardActions>
      </Card>{" "}
      {/* EL Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{movie?.Title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Details item={movie} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Salir</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Home;
