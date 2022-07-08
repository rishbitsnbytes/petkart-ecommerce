import { v4 as uuid } from "uuid";
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    staticId: 1,
    title:
      "Isle of Dogs Everyday Silky Coating Dog Shampoo - Jasmine + Vanilla - 500 ml",
    subtitle: "Softening, cleansing, hydrating & fragrant",
    originalMRP: 2500,
    discountPercent: 45,
    totalRatings: 98,
    totalStars: 4.8,
    productCategory: "Grooming",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Isle of Dogs",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 2,
    title: "Isle of Dogs Tearless - Puppy Shampoo - 473 ml",
    subtitle: "Gentle, tear-free, paraben-free & fragrant",
    originalMRP: 2500,
    discountPercent: 55,
    totalRatings: 58,
    totalStars: 4.9,
    productCategory: "Grooming",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Isle of Dogs",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 3,
    title: "Isle Of Dogs 2 Heal Dog Conditioner - 1 Gallon (3.8 liters)",
    subtitle: "Rejuvenating, moisturising & easy to use",
    originalMRP: 12000,
    discountPercent: 25,
    totalRatings: 107,
    totalStars: 4.2,
    productCategory: "Grooming",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Isle of Dogs",
    availability: {
      newArrival: true,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 4,
    title:
      "Isle of Dog Silky Oatmeal Conditioner For Dogs Sulfate & Paraben Free - 250 ml",
    subtitle: "Mild, gentle on the skin & with odor neutralizers",
    originalMRP: 2000,
    discountPercent: 50,
    totalRatings: 87,
    totalStars: 5.0,
    productCategory: "Grooming",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Isle of Dogs",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 5,
    title:
      "Happi Doggy Dental Chew Care (Immune Support )- Turmeric & Shiitake - Regular 4 inch - 150 g - 6 pieces",
    subtitle: "Grain-free, rawhide-free dog treats",
    originalMRP: 700,
    discountPercent: 40,
    totalRatings: 57,
    totalStars: 4.0,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Veg",
    brand: "Happi Doggy",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 6,
    title: "Happi Doggy Dental Chew Dog Treats - Pack of 2",
    subtitle: "Dehydrated, slow-cooked & gluten-free",
    originalMRP: 300,
    discountPercent: 45,
    totalRatings: 52,
    totalStars: 4.3,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Veg",
    brand: "Happi Doggy",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 7,
    title: "Happi Doggy Gluten-Free Dog Treats Combo (Pack of 4) 150 g each",
    subtitle: "Dehydrated, slow-cooked & gluten-free",
    originalMRP: 2500,
    discountPercent: 25,
    totalRatings: 152,
    totalStars: 2.7,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Veg",
    brand: "Happi Doggy",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 8,
    title:
      "Happi Doggy Vegetarian Dental Chew - Zest - Mint (Singles) - Regular - 4 inch - 25 g",
    subtitle: "Grain-free, rawhide-free dog treats",
    originalMRP: 200,
    discountPercent: 65,
    totalRatings: 520,
    totalStars: 3.1,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Veg",
    brand: "Happi Doggy",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 9,
    title:
      "Farmina N&D Pumpkin Lamb & Blueberry Grain Free Medium & Maxi Breed Dry Puppy Food",
    subtitle: "Gluten-free, cruelty-free & preservative-free",
    originalMRP: 2999,
    discountPercent: 25,
    totalRatings: 520,
    totalStars: 1.6,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Non-Veg",
    brand: "Farmina",
    availability: {
      newArrival: true,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 10,
    title:
      "Farmina N&D Low Grain Medium & Maxi Breed Adult Dry Dog Food - Chicken & Pomegranate",
    subtitle: "Preservative-free, GMO-free, delicious dog food",
    originalMRP: 2999,
    discountPercent: 35,
    totalRatings: 50,
    totalStars: 1.0,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Non-Veg",
    brand: "Farmina",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 11,
    title: "Farmina Matisse Premium Dry Kitten Food - (1 - 12 months)",
    subtitle: "Cruelty-free, specially formulated, taurine-rich cat food",
    originalMRP: 599,
    discountPercent: 35,
    totalRatings: 50,
    totalStars: 2.5,
    productCategory: "Food",
    petCategory: "Cat",
    foodCategory: "Non-Veg",
    brand: "Farmina",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 12,
    title: "Farmina N&D Chicken & Pomegranate Grain Free Adult Dry Cat Food",
    subtitle: "Gluten-free, cruelty-free & preservative-free",
    originalMRP: 5999,
    discountPercent: 25,
    totalRatings: 90,
    totalStars: 4.8,
    productCategory: "Food",
    petCategory: "Cat",
    foodCategory: "Non-Veg",
    brand: "Farmina",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 13,
    title: "Sheba Rich Chicken Premium Loaf Adult Wet Cat Food",
    subtitle: "Delicious, nutritious, flavourful & easy to eat",
    originalMRP: 999,
    discountPercent: 30,
    totalRatings: 70,
    totalStars: 3.8,
    productCategory: "Food",
    petCategory: "Cat",
    foodCategory: "Non-Veg",
    brand: "Sheba",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 14,
    title: "Sheba Fish with Dry Bonito Flake Adult Wet Cat Food - 35 g packs",
    subtitle: "High-quality, savourity & delicious",
    originalMRP: 999,
    discountPercent: 50,
    totalRatings: 97,
    totalStars: 2.8,
    productCategory: "Food",
    petCategory: "Cat",
    foodCategory: "Non-Veg",
    brand: "Sheba",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 15,
    title:
      "Sheba Tuna White Meat and Snapper in Gravy Adult Wet Cat Food - 85 g packs",
    subtitle: "Tender, high-quality, delicious, international cat food",
    originalMRP: 1999,
    discountPercent: 55,
    totalRatings: 67,
    totalStars: 1.8,
    productCategory: "Food",
    petCategory: "Cat",
    foodCategory: "Non-Veg",
    brand: "Sheba",
    availability: {
      newArrival: true,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 16,
    title: "Sheba Rich Chicken Premium Loaf Wet Kitten Food Box - 1.68 kg",
    subtitle: "Delicious, flavourful & made from real ingredients",
    originalMRP: 2499,
    discountPercent: 35,
    totalRatings: 107,
    totalStars: 4.6,
    productCategory: "Food",
    petCategory: "Cat",
    foodCategory: "Non-Veg",
    brand: "Sheba",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 17,
    title: "Royal Canin Fit 32 Adult Dry Cat Food",
    subtitle: "High-quality, safe, international cat food",
    originalMRP: 499,
    discountPercent: 40,
    totalRatings: 47,
    totalStars: 1.6,
    productCategory: "Food",
    petCategory: "Cat",
    foodCategory: "Non-Veg",
    brand: "Royal Canin",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 18,
    title: "Royal Canin Labrador Retriever Dry Puppy Food",
    subtitle: "Rich, nourishing, balanced, tailored dog food",
    originalMRP: 1999,
    discountPercent: 55,
    totalRatings: 167,
    totalStars: 3.9,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Non-Veg",
    brand: "Royal Canin",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 19,
    title: "Royal Canin Giant Breed Dry Puppy Food",
    subtitle: "Balanced, nutritious, conveniently designed dog food",
    originalMRP: 1899,
    discountPercent: 60,
    totalRatings: 127,
    totalStars: 2.9,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Non-Veg",
    brand: "Royal Canin",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 20,
    title: "Royal Canin Mini Breed Starter Dry Puppy Food",
    subtitle: "Easy to digest, hydrating, international dog food",
    originalMRP: 1799,
    discountPercent: 55,
    totalRatings: 93,
    totalStars: 3.9,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Non-Veg",
    brand: "Royal Canin",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 21,
    title: "Royal Canin Persian Dry Kitten Food",
    subtitle: "Balanced, specially designed, international cat food",
    originalMRP: 2999,
    discountPercent: 35,
    totalRatings: 103,
    totalStars: 2.9,
    productCategory: "Food",
    petCategory: "Cat",
    foodCategory: "Non-Veg",
    brand: "Royal Canin",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 22,
    title: "Pedigree Chicken & Vegetables Adult Dry Dog Food",
    subtitle: "High-quality, wholesome, balanced dog food",
    originalMRP: 399,
    discountPercent: 35,
    totalRatings: 103,
    totalStars: 3.9,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Non-Veg",
    brand: "Pedigree",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 23,
    title: "Pedigree Lamb Biscrok Biscuits for Dogs - 500 gm",
    subtitle: "Complete, balanced & delicious",
    originalMRP: 999,
    discountPercent: 35,
    totalRatings: 63,
    totalStars: 4.3,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Non-Veg",
    brand: "Pedigree",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 24,
    title: "Pedigree Meat Jerky Adult Dog Treat - Roasted Lamb",
    subtitle: "Long-lasting, delicious & made from real ingredients",
    originalMRP: 1199,
    discountPercent: 55,
    totalRatings: 52,
    totalStars: 3.3,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Non-Veg",
    brand: "Pedigree",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 25,
    title: "Pedigree Ranchos Super Bones Chicken And Milky Dog Treat - 70 gm",
    subtitle: "Long-lasting, delicious & made from real ingredients",
    originalMRP: 1399,
    discountPercent: 45,
    totalRatings: 102,
    totalStars: 4.3,
    productCategory: "Food",
    petCategory: "Dog",
    foodCategory: "Non-Veg",
    brand: "Pedigree",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 26,
    title: "KONG Puppy Chew Toy",
    subtitle: "Fun, easy to use & made from natural rubber",
    originalMRP: 999,
    discountPercent: 40,
    totalRatings: 32,
    totalStars: 4.3,
    productCategory: "Toy",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Kong",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 27,
    title: "KONG Wobbler Interactive Dog Toy (In multiple sizes)",
    subtitle: "Engaging, fun & easy to clean",
    originalMRP: 1999,
    discountPercent: 30,
    totalRatings: 92,
    totalStars: 3.3,
    productCategory: "Toy",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Kong",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 28,
    title: "KONG Extreme Ball Dog Chew Toy",
    subtitle: "Sturdy, durable, rubber dog toy",
    originalMRP: 1999,
    discountPercent: 25,
    totalRatings: 92,
    totalStars: 1.3,
    productCategory: "Toy",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Kong",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 29,
    title: "KONG Ring Dog Chew Toy",
    subtitle: "Enriching, durable dog toy",
    originalMRP: 2199,
    discountPercent: 50,
    totalRatings: 52,
    totalStars: 1.8,
    productCategory: "Toy",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Kong",
    availability: {
      newArrival: true,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 30,
    title: "KONG Extreme Goodie Bone Dog Chew Toy",
    subtitle: "Durable dog toy made from extreme rubber",
    originalMRP: 1999,
    discountPercent: 40,
    totalRatings: 32,
    totalStars: 2.8,
    productCategory: "Toy",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Kong",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 31,
    title: "KONG Kickeroo Giraffe Print Cat Toy (With Catnip)",
    subtitle: "Soft, cuddly & engaging",
    originalMRP: 999,
    discountPercent: 30,
    totalRatings: 172,
    totalStars: 4.8,
    productCategory: "Toy",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Kong",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 32,
    title: "KONG Wobbler Interactive Cat Toy",
    subtitle: "Durable, engaging & contains catnip",
    originalMRP: 2299,
    discountPercent: 20,
    totalRatings: 125,
    totalStars: 3.8,
    productCategory: "Toy",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Kong",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 33,
    title: "KONG Treat Dispenser Interactive Cat Toy",
    subtitle: "Ultra-durable & easy to use",
    originalMRP: 999,
    discountPercent: 50,
    totalRatings: 168,
    totalStars: 1.7,
    productCategory: "Toy",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Kong",
    availability: {
      newArrival: false,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 34,
    title: "Trixie Luna Cuddly Cave Cat Bed (40X24X46 cm) - Grey",
    subtitle: "Two-in-one, insulating, dirt-repellent, cosy bed",
    originalMRP: 2999,
    discountPercent: 20,
    totalRatings: 168,
    totalStars: 3.7,
    productCategory: "Comfort",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Trixie",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 35,
    title: "Trixie Minou Cuddly Cave Puppy-Cat Bed (51x31x41 cm)",
    subtitle: "Gorgeous, warm, easy care pet bed",
    originalMRP: 3999,
    discountPercent: 30,
    totalRatings: 198,
    totalStars: 4.2,
    productCategory: "Comfort",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Trixie",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 36,
    title: "Trixie Jimmy Donut Bed - Taupe",
    subtitle: "Soft, stylish, comfortable dog bed",
    originalMRP: 1999,
    discountPercent: 30,
    totalRatings: 98,
    totalStars: 3.2,
    productCategory: "Comfort",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Trixie",
    availability: {
      newArrival: false,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 37,
    title: "Trixie BE NORDIC Bed Fohr - Dark Blue",
    subtitle: "Soft, stylish, comfortable dog bed",
    originalMRP: 19999,
    discountPercent: 30,
    totalRatings: 287,
    totalStars: 4.2,
    productCategory: "Comfort",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Trixie",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 38,
    title: "Trixie Badalona Scratching Post",
    subtitle: "Stylish, luxurious & convenient",
    originalMRP: 3999,
    discountPercent: 20,
    totalRatings: 287,
    totalStars: 5.0,
    productCategory: "Comfort",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Trixie",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 39,
    title: "Savic Gizmo Cat Litter Tray with Rim - Mocha",
    subtitle: "Stylish, easy to clean & ideal for young/sick/elderly cats",
    originalMRP: 999,
    discountPercent: 20,
    totalRatings: 87,
    totalStars: 5.0,
    productCategory: "Comfort",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Savic",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 40,
    title: "Savic Nestor Cat Toilet - Blue - 14.8 x 14.8 x 23 imch",
    subtitle: "Convenient, covered, leak-prevention cat litter tray",
    originalMRP: 1999,
    discountPercent: 20,
    totalRatings: 187,
    totalStars: 5.0,
    productCategory: "Comfort",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Savic",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 41,
    title:
      "Savic Trotter 3 - Dog & Cat Carrier - Atlantic Blue - 24 X 16 X 15 inches - Holds up to 10 kg",
    subtitle: "Durable, ventilated & easy to carry",
    originalMRP: 4299,
    discountPercent: 15,
    totalRatings: 162,
    totalStars: 5.0,
    productCategory: "Comfort",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Savic",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 42,
    title: "Savic Hop In Modern Cat Litter Tray - Mocha 22.6 x 17.9 x 5.1 inch",
    subtitle: "Private, durable & easy to use",
    originalMRP: 3299,
    discountPercent: 15,
    totalRatings: 62,
    totalStars: 5.0,
    productCategory: "Comfort",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Savic",
    availability: {
      newArrival: false,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 43,
    title: "HUFT Easy On Dog Harness - Blue",
    subtitle: "Breathable, comfortable, easy to wear dog harness",
    originalMRP: 3199,
    discountPercent: 10,
    totalRatings: 192,
    totalStars: 5.0,
    productCategory: "Accessory",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 44,
    title: "HUFT Velvet Dog Bow Tie - Red",
    subtitle: "Designer, lightweight dog bow",
    originalMRP: 499,
    discountPercent: 30,
    totalRatings: 12,
    totalStars: 5.0,
    productCategory: "Accessory",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 45,
    title: "HUFT X Alicia Souza YES I am Unbelievably Adorable Dog Bandana",
    subtitle: "Designer, lightweight dog bandana",
    originalMRP: 399,
    discountPercent: 25,
    totalRatings: 72,
    totalStars: 5.0,
    productCategory: "Accessory",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: false,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 46,
    title: "HUFT X Shivan & Narresh Leger Leisure Series Dog Bandana",
    subtitle: "Designer, lightweight dog bandana",
    originalMRP: 399,
    discountPercent: 15,
    totalRatings: 62,
    totalStars: 4.0,
    productCategory: "Accessory",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: false,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 47,
    title: "HUFT X©Marvel Captain America Cape",
    subtitle: "Exclusive, superhero dog bandana",
    originalMRP: 399,
    discountPercent: 15,
    totalRatings: 192,
    totalStars: 4.0,
    productCategory: "Accessory",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 48,
    title: "HUFT Bloom Wildly Scarf For Cats and Puppies",
    subtitle: "Elegant, printed accessories",
    originalMRP: 699,
    discountPercent: 25,
    totalRatings: 92,
    totalStars: 3.0,
    productCategory: "Accessory",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 49,
    title: "HUFT Nail Cutter for Dogs with Safety Guard",
    subtitle: "Non-slip, easy to use nail clipper",
    originalMRP: 699,
    discountPercent: 15,
    totalRatings: 92,
    totalStars: 3.0,
    productCategory: "Grooming",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 50,
    title: "HUFT Double Sided Steel Comb for Cats & Dogs - Orange",
    subtitle: "Strong, easy to use pet grooming comb",
    originalMRP: 599,
    discountPercent: 40,
    totalRatings: 92,
    totalStars: 1.0,
    productCategory: "Grooming",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: false,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 51,
    title: "HUFT Bamboo Slicker Brush For Dogs & Cats",
    subtitle: "Lightweight, easy to use pet grooming brush",
    originalMRP: 999,
    discountPercent: 40,
    totalRatings: 192,
    totalStars: 1.0,
    productCategory: "Grooming",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: false,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 52,
    title: "HUFT Double Sided Brush for Dogs & Cats - Orange",
    subtitle: "No-slip, easy to use pet grooming brush",
    originalMRP: 999,
    discountPercent: 50,
    totalRatings: 12,
    totalStars: 1.0,
    productCategory: "Grooming",
    petCategory: "Cat",
    foodCategory: "None",
    brand: "Heads Up For Tails",
    availability: {
      newArrival: false,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 99,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 53,
    title: "Trixie Care Dog Brush with Wire Bristle",
    subtitle: "No-slip, easy to use pet grooming brush",
    originalMRP: 499,
    discountPercent: 40,
    totalRatings: 62,
    totalStars: 1.0,
    productCategory: "Grooming",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Trixie",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: true,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 54,
    title: "Trixie Double-Sided Lint Brush for Pets",
    subtitle: "No-slip, easy to use pet grooming brush",
    originalMRP: 499,
    discountPercent: 40,
    totalRatings: 62,
    totalStars: 2.0,
    productCategory: "Grooming",
    petCategory: "Dog",
    foodCategory: "None",
    brand: "Trixie",
    availability: {
      newArrival: false,
      inStock: false,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
  {
    _id: uuid(),
    staticId: 55,
    title: "Farmina Matisse Premium Salmon & Tuna Dry Cat Food",
    subtitle: "Cruelty-free, specially formulated & rich in taurine",
    originalMRP: 599,
    discountPercent: 45,
    totalRatings: 60,
    totalStars: 3.8,
    productCategory: "Food",
    petCategory: "Cat",
    foodCategory: "Non-Veg",
    brand: "Farmina",
    availability: {
      newArrival: true,
      inStock: true,
    },
    delivery: {
      deliveryCharge: 0,
      fastDelivery: false,
    },
    imgUrl:
      "https://raw.githubusercontent.com/rishbitsnbytes/petkart-ecommerce/development/src/assets/prod-images/",
  },
];
