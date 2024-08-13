import React, { useEffect, useRef, useState } from 'react'
import styles from './nombre.module.css'
import style from '../styles/style.css'
import { BotonGrueso } from '../styles/globalStyles'

const Nombre = ({ nombre, apellido, estudiantes }) => {
  const miBoton1 = {
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '8px',
    fontSize: '16px',
    padding: '10px 20px',
    cursor: 'pointer'
  }

  //  --------------- Ejemplo sencillo contador --------------
  const controlPersonas = useRef(null)

  //      var     setter             initial
  const [cuenta, setCuenta] = useState(0)

  function reducir () {
    setCuenta(cuenta - 1)
  }

  function aumentar () {
    setCuenta(cuenta + 1)
  }

  useEffect(() => {
    controlPersonas.current.classList.toggle('darkMode')
  }, [cuenta])

  // ---------------- Ejemplo useState para Formulario --------------

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Bienvenido usuario: ${name}, con correo ${email}`)
  }

  const handleName = e => {
    console.log(e)
    setName(e.target.value)
  }

  const handleMail = e => {
    setEmail(e.target.value)
  }

  // ---------------- Ejemplo useRef para actualizar imagen --------------
  const girlsImg = useRef(null)

  function handleImageChange () {
    console.log(girlsImg.current)
    girlsImg.current.src =
      'https://www.tvtime.com/_next/image?url=https%3A%2F%2Fartworks.thetvdb.com%2Fbanners%2Fposters%2F79472-1.jpg&w=640&q=75'
  }


  // ---------------- Ejemplo useEffect 

  useEffect(() => {
    document.title = 'Home'

  }, [])
  

  // ---------------- Ejemplo contador automático --------------
  const [contador, setContador] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setContador(contador + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  })
  

  return (
    <div>
      {/* <div>Aquí voy a mostrar mi Nombre: {nombre}</div>
      <div>Aquí voy a mostrar mi Apellido: {apellido}</div>
      <h1>Estos son algunos de mis estudiantes: </h1>
      
      <br></br>
      {estudiantes.map((estudiante, index) => {
        return (
          <div key={index}>
            Estudiante #{index + 1}: {estudiante}
          </div>
        )
      })}

      <button style={miBoton1}>Botón 1</button>
      <button className={styles.boton2}>Botón 2</button>
      <BotonGrueso>Botón 3</BotonGrueso>
      <button style={{ ...miBoton1, color: 'black' }}>Botón 4</button> */}

      <div ref={controlPersonas}>
        <h1>Control de ingreso de personas</h1>

        <button onClick={reducir}>Reducir</button>
        <h2>{cuenta}</h2>
        <button onClick={aumentar}>Incrementar</button>
      </div>

      <section>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type='text'
              value={name}
              onChange={handleName}
              placeholder='Ingrese nombre'
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type='email'
              value={email}
              onChange={handleMail}
              placeholder='Ingrese correo'
            />
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </section>

      <section>
        <img
          ref={girlsImg}
          src='https://personajes.top/wp-content/uploads/2024/02/personajes-de-las-chicas-superpoderosas-portada.jpg'
          alt='powerPuffGirls'
        />
        <button onClick={handleImageChange}>Actualizar Imagen</button>
      </section>

      <section>
        <h1>Contador automático</h1>
        <h2>Contador: {contador}</h2>
      </section>
    </div>
  )
}

export default Nombre
