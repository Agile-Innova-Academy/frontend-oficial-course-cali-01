import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Nombre from "./components/Nombre";
import Video from './components/Video';
import RyMApi from './components/RyMApi';
import CountDown from './components/CountDown';

function App() {
  const estudiantes = [
    "Camilo", "Javier", "Joseph", "Julian", "Kevin"
  ]
  const nombre = "Sebastian"
  console.log("Estoy en el componente principal: App. Mi nombre es " + nombre)

  const infousuario = {
    nombre: "Sebastian",
    apellido: "Luna",
    correo: "ejemplo@gmail.com",
    edad: 28,
    proyectos: ["Camilo", "Javier", "Joseph", "Julian", "Kevin"]
  }

  const [currrentComponent, setCurrrentComponent] = useState("")

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button onClick={() => {setCurrrentComponent("Viewer")}} color="inherit">Viewer</Button>
            <Button onClick={() => {setCurrrentComponent("Home")}} color="inherit">Home</Button>
            <Button onClick={() => {setCurrrentComponent("R&M")}} color="inherit">Rick & Morty</Button>
            <Button onClick={() => {setCurrrentComponent("CountDown")}} color="inherit">CountDown</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* {currrentComponent === "Viewer" ? <Video /> : <Nombre nombre="Sebastian" apellido="Luna" estudiantes={estudiantes} />} */}

      {currrentComponent === "Viewer" && <Video />}
      {currrentComponent === "Home" && <Nombre nombre="Sebastian" apellido="Luna" estudiantes={estudiantes} />}
      {currrentComponent === "R&M" && <RyMApi />}
      {currrentComponent === "CountDown" && <CountDown />}
    </>
  );
}

export default App;
