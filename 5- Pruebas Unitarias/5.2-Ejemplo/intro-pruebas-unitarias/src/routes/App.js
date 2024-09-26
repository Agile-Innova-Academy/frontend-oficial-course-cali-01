import { useEffect } from "react";
import { getApi } from "../components/TiposDatos";
import Bienvenidos from "../components/Bienvenidos";

function App() {
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Yudith</h1>
      </header>
      <Bienvenidos name="Camilo" />
    </div>
  );
}

export default App;
