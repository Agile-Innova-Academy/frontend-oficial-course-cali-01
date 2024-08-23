import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthsContext'
import { Navigate } from 'react-router-dom'

const PublicRouter = ({children}) => {
 const {state }= useContext(AuthContext)
  return (
//    state.logged === false ? children : <Navigate to="/*"/>
   !state.logged  ? children : <Navigate to="/*"/>
  )
}

export default PublicRouter