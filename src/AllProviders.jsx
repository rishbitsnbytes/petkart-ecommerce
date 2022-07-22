import { ProductProvider, FilterProvider, AuthProvider } from "./contexts";

const AllProviders = ({ children }) => {
  return (
    <AuthProvider>
      <FilterProvider>
        <ProductProvider>{children}</ProductProvider>
      </FilterProvider>
    </AuthProvider>
  );
};

export { AllProviders };
