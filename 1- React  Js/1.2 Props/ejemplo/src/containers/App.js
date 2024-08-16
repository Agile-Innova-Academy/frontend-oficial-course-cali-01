import { useState } from "react";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Nav from "../components/Nav";
import { url } from "../constants/Const";
import GetData from "../helpers/GetData";

function App() {
  const [stateDatos, setStateDatos] = useState();
  
  console.log("El resul_inicio", stateDatos);
  const TraerDatos = async () => {
    console.log("Loading Traer");
    const data = await GetData(url);
    setStateDatos(data);
  };
  console.log("El resul", stateDatos);
  return (
    <div className="App">
      <button onClick={() => TraerDatos()}>Ir</button>
      <Nav />
      {stateDatos?.map((item) => (
        <Home key={item.id} movie={item} />
      ))}
  
      <Footer />
    </div>
  );
}

export default App;
