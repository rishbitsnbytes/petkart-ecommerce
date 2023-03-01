import "./profile.css";
import { useAuth, useOrders } from "../../contexts";
import {
  OrderSummaryCard,
  LoadingAnimation,
  ErrorMessage,
} from "../../components";
import { Link } from "react-router-dom";

const Orders = () => {
  const {
    authState: { user },
  } = useAuth();
  const {
    ordersState: { orders, areOrdersLoading, ordersError },
  } = useOrders();

  return (
    <div className="flex-col flex-align-center flex-justify-center w-full gap-5 py-1">
      <h2 className="profile-orders-head h1 color-tertiary text-center w-full py-1">
        Your Orders
      </h2>
      {areOrdersLoading ? (
        <div className="w-full">
          <LoadingAnimation
            width="15"
            height="15"
            loadingMessage="Orders are being fetched..."
          />
        </div>
      ) : ordersError ? (
        <div className="w-full">
          <ErrorMessage errorMessage={ordersError} />
        </div>
      ) : orders.length === 0 ? (
        <div className="flex-col flex-align-center flex-justify-center gap-5 py-3">
          <h2 className="h2 font-bold">No Orders Placed yet!</h2>
          <Link to="/products" className="btn btn-primary px-2 py-1 rounded-md">
            Let's Shop!
          </Link>
        </div>
      ) : (
        <section className="orders-history-section flex-col flex-align-center flex-justify-center gap-3 w-full">
          {orders.map((order) => {
            return <OrderSummaryCard order={order} key={order._id} />;
          })}
        </section>
      )}
    </div>
  );
};

export { Orders };
