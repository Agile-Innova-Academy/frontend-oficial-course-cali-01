import { useEffect, useState } from "react";
import { addProducts, getProducts } from "../service/peticiones";

const Products = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const [products, setProducts] = useState<any[]>([]);
  const [newProduct, setNewProduct] = useState("");

  const handleAdd = async () => {
    await addProducts({ nombre: newProduct });
  };

  const cargarProductos = async () => {
    const productList = await getProducts();
    console.log(productList)
    // setProducts(productList);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <div>
      <input
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Ingrese nombre de producto"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Products;
