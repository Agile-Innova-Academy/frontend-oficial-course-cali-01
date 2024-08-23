import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthsContext'
import { actionLogout } from '../useReducer/action/actionsUser'

const NavBar = () => {
    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)
    const items = [        
             {
        key: '1',
        label: 'Home',
        pathname: '/',
        onClick: ()=> navigate('/')
     
      },
                   {
        key: '2',
        label: 'Registrar',
          pathname: '/register',
        onClick: ()=> navigate('/register')
     
     
      },
                   {
        key: '3',
        label: 'Listar',
          pathname: '/list',
        onClick: ()=> navigate('/list')
     
     
      },
                    {
        key: '4',
        label: 'Logout',
          pathname: '/login',
        onClick: ()=> {
          console.log("Cerrando sesión")
          dispatch(actionLogout());
          navigate('/login');}
     
     
      },
        
    ]
  return (
    <div>
        <Header>
 <Menu
    // onClick={onClick}
    style={{
      width: 256,
    }}
    theme="dark"
    mode="horizontal"
    items={items}
  />
        </Header>
       
  </div>
  )
}

export default NavBar