import CambiarState from "../components/CambiarState";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Listar from "../components/Listar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CambiarState />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<Listar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
