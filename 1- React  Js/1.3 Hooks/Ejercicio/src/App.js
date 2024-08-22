import { useState } from 'react';
import Nombre from "./components/Nombre";
import Video from './components/Video';
import RyMApi from './components/RyMApi';
import CountDown from './components/CountDown';
import NavBar from './containers/NavBar';
import CallbackMemo from './components/CallbackMemo';

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

  function cambiarComponente (value) {
    setCurrrentComponent(value)
  }

  return (
    <>
      <NavBar cambiarComponente={cambiarComponente} />
      {/* {currrentComponent === "Viewer" ? <Video /> : <Nombre nombre="Sebastian" apellido="Luna" estudiantes={estudiantes} />} */}

      {currrentComponent === "memoize" && <CallbackMemo />}
      {currrentComponent === "Viewer" && <Video />}
      {currrentComponent === "Home" && <Nombre nombre="Sebastian" apellido="Luna" estudiantes={estudiantes} />}
      {currrentComponent === "R&M" && <RyMApi />}
      {currrentComponent === "CountDown" && <CountDown />}
    </>
  );
}

export default App;
