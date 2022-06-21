import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Food",
    description:
      "Food for Cat and Dogs. Includes both Veg and Non-Veg.",
  },
  {
    _id: uuid(),
    categoryName: "Toy",
    description:
      "Includes all kinds of playful toys to give the pets time of their life.",
  },
  {
    _id: uuid(),
    categoryName: "Grooming",
    description:
      "Grooming is as important as food to stay disease, ticks free.",
  },
  {
    _id: uuid(),
    categoryName: "Accessory",
    description:
      "Pet accessory includes their fashion utility which makes them look really beautiful.",
  },
  {
    _id: uuid(),
    categoryName: "Comfort",
    description:
      "Comfort for pets include their, beddings, litter trays etc to assist them in living comfortable life.",
  },
];