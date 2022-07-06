import { ProductProvider, FilterProvider } from "./contexts";

const AllProviders = ({ children }) => {
  return (
    <FilterProvider>
      <ProductProvider>{children}</ProductProvider>
    </FilterProvider>
  );
};

export { AllProviders };
