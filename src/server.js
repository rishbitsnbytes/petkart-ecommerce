import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
} from "./backend/controllers/AuthController";
import {
  addItemToCartHandler,
  getCartItemsHandler,
  removeItemFromCartHandler,
  updateCartItemHandler,
  clearCart,
} from "./backend/controllers/CartController";
import {
  getAllCategoriesHandler,
  getPetCategoriesHandler,
  getCategoryHandler,
} from "./backend/controllers/CategoryController";
import {
  getAllProductsHandler,
  getProductHandler,
} from "./backend/controllers/ProductController";
import {
  addItemToWishlistHandler,
  getWishlistItemsHandler,
  removeItemFromWishlistHandler,
} from "./backend/controllers/WishlistController";
import {
  addNewAddressHandler,
  editAddressHandler,
  getAllAddressesHandler,
  removeAddressHandler,
} from "./backend/controllers/AddressController";
import {
  addItemToOrdersHandler,
  getAllOrdersHandler,
} from "./backend/controllers/OrderController";
import { getBrandsHandler } from "./backend/controllers/BrandController";
import { getCouponsHandler } from "./backend/controllers/CouponController";
import { categories, petCategories } from "./backend/db/categories";
import { products } from "./backend/db/products";
import { users } from "./backend/db/users";
import { brands } from "./backend/db/brands";
import { coupons } from "./backend/db/coupons";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      product: Model,
      category: Model,
      petCategory: Model,
      brand: Model,
      user: Model,
      cart: Model,
      wishlist: Model,
      coupons: Model,
      addresses: Model,
      orders: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disballing console logs from Mirage
      server.logging = false;
      products.forEach((item) => {
        server.create("product", { ...item });
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          cart: [],
          wishlist: [],
          orders: [],
        })
      );

      categories.forEach((item) => server.create("category", { ...item }));

      petCategories.forEach((item) =>
        server.create("petCategory", { ...item })
      );

      brands.forEach((item) => server.create("brand", { ...item }));

      coupons.forEach((item) => server.create("coupon", { ...item }));
    },

    routes() {
      this.namespace = "api";
      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));

      // products routes (public)
      this.get("/products", getAllProductsHandler.bind(this));
      this.get("/products/:productId", getProductHandler.bind(this));

      // categories routes (public)
      this.get("/categories", getAllCategoriesHandler.bind(this));
      this.get("/petCategories", getPetCategoriesHandler.bind(this));
      this.get("/categories/:categoryId", getCategoryHandler.bind(this));

      // brands routes (public)
      this.get("/brands", getBrandsHandler.bind(this));

      // coupons routes (public)
      this.get("/coupons", getCouponsHandler.bind(this));

      // cart routes (private)
      this.get("/user/cart", getCartItemsHandler.bind(this));
      this.post("/user/cart", addItemToCartHandler.bind(this));
      this.post("/user/cart/:productId", updateCartItemHandler.bind(this));
      this.delete(
        "/user/cart/:productId",
        removeItemFromCartHandler.bind(this)
      );
      this.get("/user/cart/clear", clearCart.bind(this));

      // wishlist routes (private)
      this.get("/user/wishlist", getWishlistItemsHandler.bind(this));
      this.post("/user/wishlist", addItemToWishlistHandler.bind(this));
      this.delete(
        "/user/wishlist/:productId",
        removeItemFromWishlistHandler.bind(this)
      );

      // address management routes(private)
      this.get("/user/addresses", getAllAddressesHandler.bind(this));
      this.post("/user/addresses", addNewAddressHandler.bind(this));
      this.post(
        "/user/addresses/edit/:addressId",
        editAddressHandler.bind(this)
      );
      this.delete(
        "/user/addresses/:addressId",
        removeAddressHandler.bind(this)
      );

      // orders routes(private)
      this.get("/user/orders", getAllOrdersHandler.bind(this));
      this.post("/user/orders", addItemToOrdersHandler.bind(this));
    },
  });
}
