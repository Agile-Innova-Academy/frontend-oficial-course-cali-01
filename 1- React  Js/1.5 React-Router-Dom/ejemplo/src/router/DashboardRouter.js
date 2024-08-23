import React from 'react'
import NavBar from '../components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Register from '../containers/Register';
import EditPlanta from '../containers/EditPlanta';
import Error from '../components/Error';
import Footer from '../components/Footer';
import List from '../containers/List';
import Home from '../containers/Home';

const DashboardRouter = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit/:id" element={<EditPlanta />} />

        <Route path="/e" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default DashboardRouter