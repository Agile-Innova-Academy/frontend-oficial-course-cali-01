import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../containers/Home";
import Register from "../containers/Register";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Error from "../components/Error";
import List from "../containers/List";
import EditPlanta from "../containers/EditPlanta";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/list" element={<List />} />
          <Route path="/edit/:id" element={<EditPlanta />} />
          <Route path="/e" element={<Error />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
