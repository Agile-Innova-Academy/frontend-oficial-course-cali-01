import { Input, Select } from "antd";
import React from "react";
import useForm from "../hooks/useForm";
import { uploadFile } from "../helpers/uploadFile";
import { postData } from "../helpers/Peticiones";
import Swal from "sweetalert2";
import { DivForm, FormStyled } from "../Styles/Styled";

const Register = () => {
  const [
    dataForm,
    handleChange,
    handleSelect,
    reset,
    handleChangeImagen,
  ] = useForm({
    nombre: "",
    tipoPlan: "",
    color: "",
    altura: "",
    imagen: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("lo que trae", dataForm);

    let objPlanta = {
      id: Math.floor(Math.random() * 100),
      nombre: dataForm.nombre,
      tipo: dataForm.tipoPlan,
      color: dataForm.color,
      altura: dataForm.altura,
      foto: dataForm.imagen,
    };
    console.log("La planta es: ", objPlanta);
    const resp = await postData(objPlanta);
    switch (resp) {
      case 201:
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Creada exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
        break;
      case 404:
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops...",
          showConfirmButton: false,
          timer: 1500,
        });
        break;
      default:
        break;
    }

    reset();
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    uploadFile(file).then((resp) => handleChangeImagen(resp));
  };
  return (
    <DivForm>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          name="nombre"
          placeholder="Nombre de la Planta"
          onChange={handleChange}
          value={dataForm.nombre}
        />

        <Select
          name="tipoPlan"
          defaultValue="Elegir"
          style={{ width: 150 }}
          onChange={handleSelect}
          options={[
            { value: "arboles", label: "Árboles" },
            { value: "arbustos", label: "Arbustos" },
            { value: "hierbas", label: "Hierbas" },
            { value: "flores", label: "Flores" },
            { value: "Orquideas", label: "Orquideas" },
          ]}
        />
        <Input
          name="color"
          placeholder="Color de la Planta"
          onChange={handleChange}
          value={dataForm.color}
        />
        <Input
          name="altura"
          placeholder="Altura de la Planta"
          onChange={handleChange}
          value={dataForm.altura}
        />
        <input
          accept="image/*"
          type="file"
          name="imagen"
          onChange={handleUpload}
        />
        <button type="submit">Guardar</button>
      </FormStyled>
    </DivForm>
  );
};

export default Register;
