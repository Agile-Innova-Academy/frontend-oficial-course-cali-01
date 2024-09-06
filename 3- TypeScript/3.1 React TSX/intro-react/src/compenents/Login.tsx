import useForm from "../Hooks/useForm";

interface valuesForm {
    pass: string;
    email: string;
}
const Login = () => {

 const { dataForm, handleChange, reset } = useForm<valuesForm>({
   email: "",
   pass: "",
 });

 const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();
   console.log("Entre", dataForm, typeof dataForm.email);
   reset();
 };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
  );
};

export default Login;
