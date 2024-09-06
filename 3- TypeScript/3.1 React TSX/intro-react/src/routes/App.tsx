import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../compenents/Login"
import Register from "../compenents/Register";
import Home from "../compenents/Home";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
