import { useSelector } from "react-redux"

const Listar = () => {
    console.log("listar")
    const {count} = useSelector((state) => state.contador)

  return (
    <div>Listar
  <h1>Estado: {count} </h1>


    </div>
  )
}

export default Listar