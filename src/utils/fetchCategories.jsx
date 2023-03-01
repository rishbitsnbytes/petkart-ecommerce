import axios from "axios";

const fetchCategories = async (setCategories) => {
  try {
    const {
      data: { categories: receivedCategories },
    } = await axios.get("/api/categories");
    setCategories(receivedCategories);
  } catch (error) {
    console.log(error);
  }
};

export { fetchCategories };
