import { arraysdataUser } from "../data/data"

//-------Bolean------
export const isLoggenIn = true

export const mayorEdad = (edad)=>{
  return (edad>=18 ? true : false)

}

//----String

export const nombre = "Yudith"

//------------Objeto
export const objUser =()=>{
  return {
  email: "yudith@gmail.com",
  pass: "123456"
  }
}
//------------Function
export const saludar= (nombreN)=>{
  return `Hola ${nombreN}, Bienvenido a Clase de Testing`
}
//-------------Arrays
export const userRegister = (id) =>{
  return arraysdataUser.find((use)=> use.if=== id)
}
//-----------Promesa------//
export const  getPromise =(id)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const user = userRegister(id)
      if(user){
        resolve(user)
      }else{
        reject(`No se encontro el usuario con id: ${id}`)
      }
    }, 15000);
  })

}

//-------Peticiones  Api - Asyn - await


export const getApi = async()=>{
  try{
       const response = await fetch('https://fakestoreapi.com/products')
       const data = await response.json()
       console.log(data)
       return data[0].image;
  }catch(error){
    console.log(error)
  }
}