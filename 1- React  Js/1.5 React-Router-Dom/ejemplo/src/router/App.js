import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../containers/Login";
import { AuthContext } from "../context/AuthsContext";
import { useReducer } from "react";
import AuthReducer from "../useReducer/reducers/reducerUser";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import DashboardRouter from "./DashboardRouter";

const init = () => {
  return { logged: false };
};
function App() {
  const [state, dispatch] = useReducer(AuthReducer, {}, init);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          {/* Públicas */}
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
          {/* <Route
            path="/register"
            element={
              <PublicRouter>
                <RegisterUser />
              </PublicRouter>
            }
          /> */}

          {/* Privadas */}
          <Route
            path="/*"
            element={
              <PrivateRouter>
                <DashboardRouter />
              </PrivateRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
