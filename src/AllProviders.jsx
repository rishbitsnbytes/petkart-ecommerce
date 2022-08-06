import {
  ProductProvider,
  FilterProvider,
  AuthProvider,
  WishlistProvider,
  CartProvider,
} from "./contexts";

const AllProviders = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <FilterProvider>
            <ProductProvider>{children}</ProductProvider>
          </FilterProvider>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export { AllProviders };
