import {
  ProductProvider,
  FilterProvider,
  AuthProvider,
  WishlistProvider,
} from "./contexts";

const AllProviders = ({ children }) => {
  return (
    <AuthProvider>
      <WishlistProvider>
        <FilterProvider>
          <ProductProvider>{children}</ProductProvider>
        </FilterProvider>
      </WishlistProvider>
    </AuthProvider>
  );
};

export { AllProviders };
