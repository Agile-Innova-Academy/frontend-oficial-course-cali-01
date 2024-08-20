import { Button, Table } from "antd";
import React, { useEffect } from "react";
import { deletData, getData } from "../helpers/Peticiones";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const columns = [
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: "Tipo",
      dataIndex: "tipo",
      key: "tipo",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Altura",
      dataIndex: "altura",
      key: "altura",
    },
    {
      title: "Imagen",
      key: "foto",
      dataIndex: "foto",
      render: (i) => (
        <>
          <img src={i} alt="" style={{ width: "50px" }} />
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (ac) => (
        <>
          <Button size="middle" onClick={() => deletePlanta(ac.id)}>
            Delete
          </Button>
          <Button size="middle" onClick={() => editPlanta(ac.id)}>
            {" "}
            Edit
          </Button>
        </>
      ),
    },
  ];

  const deletePlanta = async (id) => {
    const response = await deletData(id);
    console.log(response);
    switch (response) {
      case 200:
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Se elimino exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
        break;

      default:
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Ocurrio un error",
          showConfirmButton: false,
          timer: 2000,
        });
    }
  };

  const editPlanta = (id) => {
    console.log("Estamos por editando", id);
    navigate(`/edit/${id}`);
    // Swal.fire({
    //         position: "center",
    //         icon: "success",
    //         title: "Modificada exitosamente",
    //         showConfirmButton: false,
    //         timer: 1500,
    //       });
  };

  useEffect(() => {
    async function cargar() {
      const resp = await getData();
      console.log(resp);
      setData(resp);
    }
    cargar();
  }, []);
  return (
    <div>
      {setData !== null ? (
        <Table columns={columns} dataSource={data} />
      ) : (
        <h1>Estoy cargando</h1>
      )}
    </div>
  );
};

export default List;
