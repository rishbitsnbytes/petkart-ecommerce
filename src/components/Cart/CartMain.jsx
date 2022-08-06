import "./cart.css";
import {
  CartProductCard,
  CartPricing,
  LoadingAnimation,
  ErrorMessage,
} from "../../components";
import { getCartTotalItems } from "../../utils";
import { useCart } from "../../contexts";
import { Link } from "react-router-dom";

const CartMain = () => {
  const {
    cartState: { cartItems, isCartLoading, cartError },
    cartDispatch,
  } = useCart();

  const totalCartItems = getCartTotalItems(cartItems);

  return (
    <main className="cart-page-main flex-col flex-justify-start flex-align-center gap-5 m-1 p-5 h-full">
      {isCartLoading ? (
        <div className="flex-col flex-justify-center flex-align-center h-full my-5 py-5 w-full">
          <LoadingAnimation
            width="20"
            height="20"
            loadingMessage="Fetching the cart..."
          />
        </div>
      ) : cartError ? (
        <div className="w-50-pc h-full my-5 py-5">
          <ErrorMessage errorMessage={cartError} />
        </div>
      ) : (
        <div className="flex-col flex-justify-start flex-align-center gap-5">
          <h1>
            {totalCartItems > 0 ? "Your Cart has " : "Your Cart is "}
            <span className="color-tertiary font-bold">
              {totalCartItems > 0
                ? totalCartItems === 1
                  ? ` only ${totalCartItems} item!`
                  : ` ${totalCartItems} items!`
                : " Empty!"}
            </span>
          </h1>
          {cartItems.length > 0 && (
            <section className="grid grid-50-50-layout grid-cols-2 grid-rows-1 m-1 gap-5">
              <section className="flex-col flex-justify-start flex-align-start gap-3 w-full mx-auto h-fit">
                {cartItems.map((cartItem) => {
                  return (
                    <CartProductCard product={cartItem} key={cartItem._id} />
                  );
                })}
              </section>
              <section className="w-85-pc mx-auto">
                <CartPricing totalCartItems={totalCartItems} />
              </section>
            </section>
          )}
          <Link
            to="/products"
            className="btn btn-primary w-fit py-1 px-5 rounded-md"
          >
            {totalCartItems > 0 ? "Keep Shopping.." : "Let's Shop!"}
          </Link>
        </div>
      )}
    </main>
  );
};

export { CartMain };
