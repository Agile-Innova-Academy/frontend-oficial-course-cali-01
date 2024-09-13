import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const colletionProduct = collection(db, "productos");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const addProducts = async (product: any) => {
  await addDoc(colletionProduct, product);
};

export const getProducts = async () => {
  const data = await getDocs(colletionProduct);
  console.log(data);
return data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
}))

};


export const deleteProduct =async(id: string )=>{
  try{
   const productDelDoc = doc(db, "productos", id);
   await deleteDoc(productDelDoc);
  }
  catch(error){
    console.log(error);
  }
}


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const updateProduct = async (id: string, datosUpdate: any)=>{
  try {
    const productUpdateDoc = doc(db, "productos", id);
    await updateDoc(productUpdateDoc, datosUpdate);
   
  } catch (error) {
    console.log(error);
  }
}