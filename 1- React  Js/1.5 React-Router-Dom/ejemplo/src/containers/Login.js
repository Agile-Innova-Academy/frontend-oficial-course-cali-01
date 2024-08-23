import { Input } from "antd";
import React, { useContext } from "react";
import useForm from "../hooks/useForm";
import { DivForm, FormStyled } from "../Styles/Styled";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthsContext";
import { actionLogin } from "../useReducer/action/actionsUser";

const Login = () => {
  const { dispatch } = useContext(AuthContext);

  const [dataForm, handleChange, reset] = useForm({
    email: "",
    pass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(".................");
    console.log(dataForm);

    let obj = {
      id: Math.floor(Math.random() * 100),
      email: dataForm.email,
      pass: dataForm.pass,
    };
    reset();
    if (dataForm.email === "yudith@gmail.com" && dataForm.pass === "123456") {
      localStorage.setItem("user", JSON.stringify(obj));

      dispatch(actionLogin(obj));

      //-------hacer el disparo de la accion para finalmente actualizar el estado----------------//
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "No estás registrado Adioss........",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <DivForm>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={dataForm.emali}
        />
        <Input
          name="pass"
          placeholder="Password"
          onChange={handleChange}
          value={dataForm.pass}
        />
        <button type="submit">Login</button>
      </FormStyled>
    </DivForm>
  );
};

export default Login;
