import useForm from "../Hooks/useForm";

interface valuesForm {
  pass: string;
  email: string;
  name: string
}
const Register = () => {

    const { dataForm, handleChange, reset }= useForm<valuesForm>({
        name: "",
        email: "",
        pass: ""
    })
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          console.log("Entre", dataForm, typeof dataForm.name);
          reset()
        };
  return (
    <div>
      {" "}
      <div>
        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input
            type="name"
            name="name"
            value={dataForm.name}
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="pass"
            name="pass"
            value={dataForm.pass}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Register