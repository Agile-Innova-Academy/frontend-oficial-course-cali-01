import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Products from "../components/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
