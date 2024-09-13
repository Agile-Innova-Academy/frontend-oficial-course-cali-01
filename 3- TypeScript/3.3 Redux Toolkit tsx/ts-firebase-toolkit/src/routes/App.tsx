import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Products from "../components/Products";
import RegisterFormik from "../components/RegisterFormik";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Products />} />
          <Route path="/register" element={<RegisterFormik />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
