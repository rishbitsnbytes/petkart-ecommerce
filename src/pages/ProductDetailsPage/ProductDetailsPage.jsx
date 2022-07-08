import { useEffect } from "react";

import { ProductDetails } from "../../components";
import { useDocumentTitle } from "../../custom-hooks";

const ProductDetailsPage = () => {
  const [setDocumentTitle] = useDocumentTitle();

  useEffect(() => {
    setDocumentTitle("Product Details || Petkart");
  }, []);

  return <ProductDetails />;
};

export { ProductDetailsPage };
