import { Input, Select } from "antd";
import React from "react";
import useForm from "../hooks/useForm";
import { uploadFile } from "../helpers/uploadFile";

const Register = () => {
  const [dataForm, handleChange, handleSelect, reset, handleChangeImagen] =
    useForm({
      nombre: "",
      tipoPlan: "",
      color: "",
      altura: "",
      imagen: "",
    });

  const handleSubmit = (e) => {
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
    reset();
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    uploadFile(file).then((resp) => handleChangeImagen(resp));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <input type="file" name="imagen" onChange={handleUpload} />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default Register;
