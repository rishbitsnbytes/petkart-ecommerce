import { useEffect, useState } from "react";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [petCategories, setPetCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const {
        data: { categories: receivedCategories },
      } = await axios.get("/api/categories");
      setCategories(receivedCategories);
    } catch (error) {
      console.log(Error);
    }
  };

  const fetchPetCategories = async () => {
    try {
      const {
        data: { petCategories: receivedPetCategories },
      } = await axios.get("/api/petCategories");
      setPetCategories(receivedPetCategories);
    } catch (error) {
      console.log(Error);
    }
  };

  useEffect(() => {
    fetchPetCategories();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  return [categories, petCategories];
};

export { useCategories };
