import {
  ProductProvider,
  FilterProvider,
  AuthProvider,
  WishlistProvider,
  CartProvider,
  OrdersProvider,
  AddressesProvider,
  CheckoutProvider,
} from "./contexts";

const AllProviders = ({ children }) => {
  return (
    <AuthProvider>
      <AddressesProvider>
        <OrdersProvider>
          <CartProvider>
            <CheckoutProvider>
              <WishlistProvider>
                <FilterProvider>
                  <ProductProvider>{children}</ProductProvider>
                </FilterProvider>
              </WishlistProvider>
            </CheckoutProvider>
          </CartProvider>
        </OrdersProvider>
      </AddressesProvider>
    </AuthProvider>
  );
};

export { AllProviders };
