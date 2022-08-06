import { CartMain } from "../../components";
import { useDocumentTitle } from "../../custom-hooks";
import { useEffect } from "react";

const CartPage = () => {
  const [setDocumentTitle] = useDocumentTitle();

  useEffect(() => {
    setDocumentTitle("Cart Details || Petkart");
  }, []);

  return (
    <div>
      <CartMain />
    </div>
  );
};

export { CartPage };
