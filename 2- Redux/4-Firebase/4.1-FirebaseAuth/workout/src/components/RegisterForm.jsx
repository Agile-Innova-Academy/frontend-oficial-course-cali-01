import React from 'react'
import useForm from '../../hooks/useForm'
import { mailRegister } from '../redux/slices/userSlice'

const RegisterForm = () => {
  const [formValues, handleInputChange, reset] = useForm({
    name: '',
    email: '',
    photoURL: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await mailRegister(formValues.email, formValues.password).then(
      
    )

    reset()
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type='text'
            name='name'
            value={formValues.name}
            onChange={handleInputChange}
            placeholder='Ingrese nombre'
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formValues.email}
            onChange={handleInputChange}
            placeholder='Ingrese correo'
          />
        </div>
        <div>
          <label>Photo url:</label>
          <input
            type='text'
            name='photoURL'
            value={formValues.photoURL}
            onChange={handleInputChange}
            placeholder='Ingrese una url de imagen'
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={formValues.password}
            onChange={handleInputChange}
            placeholder='Ingrese su contraseña'
          />
        </div>
        <button type='submit'>Registrar</button>
      </form>
    </section>
  )
}

export default RegisterForm
