import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import NavBar from './containers/NavBar'
import Nombre from './components/Nombre'
import CallbackMemo from './components/CallbackMemo'
import Video from './components/Video'
import RyMApi from './components/RyMApi'
import CountDown from './components/CountDown'
import CardDetail from './components/CardDetail'

const AppRouter = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Nombre />} />
          <Route path="/callbacks" element={<CallbackMemo />} />
          <Route path="/player" element={<Video />} />
          <Route path="/rick_morty" element={<RyMApi />} />
          <Route path="/rick_morty/:id" element={<CardDetail />} />
          <Route path="/countdown" element={<CountDown />} />
        </Routes>
      </BrowserRouter>
  )
}

export default AppRouter