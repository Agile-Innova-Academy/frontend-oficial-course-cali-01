import { useState } from "react";
export default function useForm({ initialState = {} }) {
  const [dataForm, setDataForm] = useState({ initialState });

  const handleChange = ({ target }) => {
    setDataForm({
      ...dataForm,
      [target.name]: target.value,
    });
  };

  const handleSelect = (e) => {
    setDataForm({
      ...dataForm,
      tipoPlan: e,
    });
  };
  ;
  const handleChangeImagen = (url) => {
    setDataForm({
      ...dataForm,
      imagen: url,
    });
  };
  const reset = () => {
    setDataForm(initialState);
  };

  return [dataForm, handleChange, handleSelect, reset, handleChangeImagen];
}
