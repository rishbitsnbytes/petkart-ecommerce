import { useState, useEffect } from "react";
import axios from "axios";

const useBrands = () => {
  const [brands, setBrands] = useState([]);

  const fetchBrands = async () => {
    try {
      const {
        data: { brands: receivedBrands },
      } = await axios.get("/api/brands");
      setBrands(receivedBrands);
    } catch (error) {
      console.log("Brand Fetch Errors", error);
    }
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  return [[...brands]];
};

export { useBrands };
