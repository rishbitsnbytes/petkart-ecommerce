import axios from "axios";

const fetchPetCategories = async (setPetCategories) => {
  try {
    const {
      data: { petCategories: receivedPetCategories },
    } = await axios.get("/api/petCategories");
    setPetCategories(receivedPetCategories);
  } catch (error) {
    console.log(error);
  }
};

export { fetchPetCategories };
