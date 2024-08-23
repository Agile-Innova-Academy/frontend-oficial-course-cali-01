import React, { useContext } from "react";
import { AuthContext } from "../context/AuthsContext";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { state } = useContext(AuthContext);
  return state.logged ? children : <Navigate to="/login" />;
};

export default PrivateRouter;
