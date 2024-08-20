import { Input, Select } from "antd";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { uploadFile } from "../helpers/uploadFile";
import Swal from "sweetalert2";
import { patchData } from "../helpers/Peticiones";
import useForm from "../hooks/useForm";
import { useState } from "react";
import axios from "axios";
import { url } from "../helpers/constants";

const EditPlanta = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  //------------------traer la data-----------------//
  useEffect(() => {
    async function cargar() {
      const resp = await axios.get(`${url}/${id}`);
      console.log(resp.data);
      setData(resp?.data);
    }
    cargar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(data);

  const [dataForm, handleChange, handleSelect, reset, handleChangeImagen] =
    useForm({
      nombre: data?.nombre,
      tipoPlan: data?.tipo,
      color: data?.color,
      altura: data?.altura,
      imagen: data?.foto,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("lo que trae en Modificar", dataForm);

    let objPlanta = {
      id: data?.id,
      nombre: dataForm.nombre,
      tipo: dataForm.tipoPlan,
      color: dataForm.color,
      altura: dataForm.altura,
      foto: dataForm.imagen,
    };
    console.log("La planta es: ", objPlanta);
    const resp = await patchData(id, objPlanta);
    switch (resp) {
      case 200:
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Modificada exitosamente",
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
    <div>
      {" "}
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
            defaultValue="elegir"
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
        </form>
      </div>
    </div>
  );
};

export default EditPlanta;
