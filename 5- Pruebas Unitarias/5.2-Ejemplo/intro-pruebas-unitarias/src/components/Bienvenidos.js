import React, { useState } from 'react'

const Bienvenidos = ({name}) => {
  const [stateName, setStateName]= useState(name)
    const [stateColor, setStateColor] = useState("red");

  return (
    <div>
      <h1
        title={`Bienvenidos! ${stateName}`}
        style={{ backgroundColor: stateColor }}
      >
        Welcome! {stateName}{" "}
      </h1>{" "}
      <button onClick={() => setStateName("Este es otro Nombre")}>
        Cambiar el Nombre
      </button>
      <button onClick={() => setStateColor("yellow")}>
        cambiar el Color
      </button>
    </div>
  );
}

export default Bienvenidos