import { useSelector } from "react-redux"

const Home = () => {
    console.log("dentro de home")
    const {count} = useSelector((state)=> state.contador)
  return (
    <div>Home 
         <h1>Estado: {count} </h1>

    </div>
  )
}

export default Home