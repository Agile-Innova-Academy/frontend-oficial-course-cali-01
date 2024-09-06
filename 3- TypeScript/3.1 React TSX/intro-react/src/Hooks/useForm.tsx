import { useState } from "react";


type stateForm<T> = {
    dataForm: T;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>)=> void,
    reset: ()=> void
}

const useForm = <T extends object>(initialState: T): stateForm<T>  => {
 const [dataForm, setDataform] = useState(initialState)

 const handleChange =  (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target
    setDataform({
        ...dataForm,
        [name]: value
    })
 }

 const reset =()=>{
    setDataform(initialState)
 }

 return {
    dataForm, handleChange, reset
 }
}

export default useForm