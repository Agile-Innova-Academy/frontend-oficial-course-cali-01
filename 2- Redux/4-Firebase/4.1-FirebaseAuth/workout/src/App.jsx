import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  facebookLogin,
  googleLogin,
  logout,
  setUser
} from './redux/slices/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase/firebaseConfig'
import RegisterForm from './components/RegisterForm'

function App () {
  const [count, setCount] = useState(0)
  const dispatch = useDispatch()
  const user = useSelector(store => store.user)

  const handleAuth = async type => {
    switch (type) {
      case 'google':
        await googleLogin().then(user => {
          dispatch(setUser(user))
        })
        break
      case 'facebook':
        await facebookLogin().then(user => {
          dispatch(setUser(user))
        })
        break

      case 'logout':
        await logout().then(() => {
          dispatch(
            setUser({
              displayName: '',
              email: '',
              photoURL: '',
              isAuthenticated: false
            })
          )
        })
        break

      default:
        break
    }
  }

  useEffect(() => {
    const validateUserState = onAuthStateChanged(auth, () => {
      if (user) {
        console.log('User is signed in:', user)
      } else {
        console.log('No user is signed in')
      }
    })

    
    return () => validateUserState()
  }, [dispatch])

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Bienvenido, {user.displayName}</h1>
      <h2>Con correo: {user.email}</h2>
      <img
        src={user.photoURL}
        alt='User profile image'
        referrerPolicy='no-referrer'
      />
      <button onClick={() => handleAuth('google')}>Login Google</button>
      <button onClick={() => handleAuth('facebook')}>Login Facebook</button>
      <button onClick={() => handleAuth('logout')}>Logout</button>


      <hr />
      <h1>Registrate</h1>
      <RegisterForm />
      
    </>
  )
}

export default App
