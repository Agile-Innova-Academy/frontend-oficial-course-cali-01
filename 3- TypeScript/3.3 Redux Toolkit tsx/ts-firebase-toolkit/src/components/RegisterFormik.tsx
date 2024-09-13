import { useFormik } from "formik";
import * as Yup from "yup";

interface FormRegister {
  nombre: string;
  email: string;
  password: string;
  telefono: string;
}

const RegisterFormik = () => {
  const formik = useFormik<FormRegister>({
    initialValues: {
      nombre: "",
      email: "",
      password: "",
      telefono: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string()
        .email("Debe ser de tipo email")
        .required("Este campo es obligatorio"),
      password: Yup.string()
        .min(8, "La contraseña debe tener al menos 8 carcateres")
        .max(12, "La contreseña debe etenr maximo 12 caracteres")
        .matches(/[A-Z].*[A-Z]/, "Debe contener al menos dos letras mayúsculas")
        .matches(/\d.*\d/, "Debe contener al menos 2 números")
        .matches(
          /[!@#$%&/()=?¿.*,:;+-|/]/,
          "Debe contener al menos 1 carácter especial"
        )
        .required("Este campo es obligatorio"),
      telefono: Yup.string()
        .matches(/^[0-9]+$/, "Solo debe contener números")
        .min(10, " el número debe contener 10 dígitos")
        .required("Este campo es obligatorio"),
    }),
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.nombre}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nombre && formik.touched.nombre ? (
              <div>{formik.errors.nombre}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.touched.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.touched.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>
          <div>
            <label htmlFor="telefono">Teléfono</label>
            <input
              id="telefono"
              name="telefono"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.telefono}
            />
            {formik.touched.telefono && formik.touched.telefono ? (
              <div>{formik.errors.telefono}</div>
            ) : null}
          </div>
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterFormik;
