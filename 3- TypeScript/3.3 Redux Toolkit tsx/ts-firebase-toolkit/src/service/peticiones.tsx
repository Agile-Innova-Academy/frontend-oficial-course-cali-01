import { addDoc, collection, getDocs } from "firebase/firestore";
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
