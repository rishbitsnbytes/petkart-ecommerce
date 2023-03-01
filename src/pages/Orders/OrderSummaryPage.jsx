import "./order-summary-page.css";
import {
  OrderSummaryCard,
  LoadingAnimation,
  ErrorMessage,
} from "../../components";
import { useOrders } from "../../contexts";
import { useDocumentTitle } from "../../custom-hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const OrderSummaryPage = () => {
  const {
    ordersState: { orders, areOrdersLoading, ordersError },
  } = useOrders();
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [setDocumentTitle] = useDocumentTitle();

  useEffect(() => {
    setDocumentTitle("Order Summary || Petkart");
  }, []);

  const order = orders?.find((order) => order.orderId === orderId);

  if (!order) {
    return navigate("/profile/orders", { replace: true });
  }

  return (
    <main className="order-summary-page-main flex-col flex-align-center flex-justify-center w-full gap-5 py-5">
      <h1 className="color-tertiary">Order Summary</h1>
      {areOrdersLoading ? (
        <div className="w-full">
          <LoadingAnimation
            width="20"
            height="20"
            loadingMessage="Order Details are being fetched..."
          />
        </div>
      ) : ordersError ? (
        <div className="w-full">
          <ErrorMessage errorMessage={ordersError} />
        </div>
      ) : (
        <OrderSummaryCard order={order} />
      )}
    </main>
  );
};

export { OrderSummaryPage };
