import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Rishabh",
    lastName: "Rathore",
    email: "rishrathore1613@gmail.com",
    password: "rishbitsnbytes",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses: [
      {
        _id: uuid(),
        fullName: "Rishabh Rathore",
        addressLine: "47-B Siddhipuram Colony Near Gopur Square",
        city: "Indore",
        state: "Madhya Pradesh",
        pincode: "452009",
        phoneNumber: "8269663131",
      },
    ],
  },
  {
    _id: uuid(),
    firstName: "Test",
    lastName: "Singh",
    email: "testSingh@test.com",
    password: "testPassword",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    addresses: [
      {
        _id: uuid(),
        fullName: "Test Singh",
        addressLine: "637, 14 Cross 8 Main 3 Phase, J P Nagar",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560078",
        phoneNumber: "9269663131",
      },
    ],
  },
];
