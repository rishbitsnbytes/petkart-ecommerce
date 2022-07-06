import { useEffect, useState } from "react";
import { fetchCategories, fetchPetCategories } from "./";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [petCategories, setPetCategories] = useState([]);

  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  useEffect(() => {
    fetchPetCategories(setPetCategories);
  }, []);

  return [[...categories], [...petCategories]];
};

export { useCategories };
