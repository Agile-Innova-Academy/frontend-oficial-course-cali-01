import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Register from "../containers/Register";
import { List } from "antd";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Error from "../components/Error";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<List />} />
           <Route path="/e" element={<Error />} /> 
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
