import { CheckoutMain } from "../../components";
import { useDocumentTitle } from "../../custom-hooks";
import { useEffect } from "react";

const CheckoutPage = () => {
  const [setDocumentTitle] = useDocumentTitle();

  useEffect(() => {
    setDocumentTitle("Checkout || Petkart");
  }, []);

  return (
    <div>
      <CheckoutMain />
    </div>
  );
};

export { CheckoutPage };
