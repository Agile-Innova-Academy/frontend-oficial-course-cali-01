import React, { useState } from 'react'
import { UserContext } from './context/userContext'
import App from './App'
import AppRouter from './AppRouter'

const MainContext = () => {
  const [userInfo, setUserInfo] = useState({})

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <AppRouter />
    </UserContext.Provider>
  )
}

export default MainContext


//
// index.html
//    index.js
//      MainContext.js
//         AppRouter.js