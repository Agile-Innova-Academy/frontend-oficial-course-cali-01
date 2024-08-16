import { Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
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