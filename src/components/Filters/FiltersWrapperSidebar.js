import "./filters.css";
import {
  FilterSectionHeader,
  PriceFilter,
  PetCategoryFilter,
  ProductCategoryFilter,
  RatingFilter,
  FoodCategoryFilter,
  BrandFilter,
} from "../../components";

const FiltersWrapperSidebar = () => {
  return (
    <div>
      {/* Filter Sidebar Section */}
      <aside className="aside-filter w-28 py-1 px-1-5 rounded-md h-80-pc">
        <div className="filter-wrapper">
          {/* Filter Sidebar Section Header */}
          <FilterSectionHeader />
          <div className="filter-main-section">
            {/* Price Filter */}
            <PriceFilter />
            {/* Pet Category Filter */}
            <PetCategoryFilter />
            {/* Product Category Filter */}
            <ProductCategoryFilter />
            {/* Rating Filter */}
            <RatingFilter />
            {/* Food Category Filter */}
            <FoodCategoryFilter />
            {/* Brand Filter */}
            <BrandFilter />
          </div>
        </div>
      </aside>
    </div>
  );
};

export { FiltersWrapperSidebar };
