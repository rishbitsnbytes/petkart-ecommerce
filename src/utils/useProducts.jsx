import { useState, useEffect } from "react";
import axios from "axios";
const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const {
        data: { products: receivedProducts },
      } = await axios.get("/api/products");
      setProducts(receivedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return [products];
};

export { useProducts };
