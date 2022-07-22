import "./home-page.css";
import { Link, Navlink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  useCategories,
  getFullImgUrl,
  getDiscountedPrice,
  useBrands,
} from "../../utils";
import { useProducts } from "../../contexts";
import { useDocumentTitle } from "../../custom-hooks";

// Carousel Image Imports
import carouselImg1 from "../../assets/others/pet-carousel-4.png";
import carouselImg2 from "../../assets/others/pet-carousel-1.png";
import carouselImg3 from "../../assets/others/pet-carousel-2.png";
import carouselImg4 from "../../assets/others/pet-carousel-7.png";
import carouselImg5 from "../../assets/others/pet-carousel-5.png";

// Other Image Imports
import widePoster1 from "../../assets/others/wide-poster-offers-sale.png";
import widePoster2 from "../../assets/others/wide-poster-eos-sale.png";
import widePoster3 from "../../assets/others/wide-poster-play-0.png";
import foodBrandImg1 from "../../assets/others/food-brand-1.png";
import foodBrandImg2 from "../../assets/others/food-brand-2.png";
import foodBrandImg3 from "../../assets/others/food-brand-3.png";
import foodBrandImg4 from "../../assets/others/food-brand-4.png";
import foodBrandImg5 from "../../assets/others/food-brand-5.png";
import foodBrandImg6 from "../../assets/others/food-brand-6.png";
import foodBrandImg7 from "../../assets/others/food-brand-7.png";
import foodBrandImg8 from "../../assets/others/food-brand-8.png";
import foodBrandImg9 from "../../assets/others/food-brand-9.png";
import foodBrandImg10 from "../../assets/others/food-brand-10.png";
import topOffersImg1 from "../../assets/others/top-offers-1.png";
import topOffersImg2 from "../../assets/others/top-offers-2.png";
import topOffersImg3 from "../../assets/others/top-offers-3.png";
import topOffersImg4 from "../../assets/others/top-offers-4.png";
import topOffersImg5 from "../../assets/others/top-offers-5.png";
import topOffersImg6 from "../../assets/others/top-offers-6.png";
import topOffersImg7 from "../../assets/others/top-offers-7.png";
import topOffersImg8 from "../../assets/others/top-offers-8.png";
import { PawBgPrints } from "../../components";

// Main HomePage Export Component
const HomePage = () => {
  const [setDocumentTitle] = useDocumentTitle();

  useEffect(() => {
    setDocumentTitle("Petkart | HomePage");
  }, []);

  return (
    <div>
      <Carousel />
      <ShopByCategory />
      <TopFoodBrands />
      <TopOffers />
      <TopPicks />
      <FeaturedBrands />
      <FacilitesOffered />
    </div>
  );
};

const Carousel = () => {
  const carouselImgsData = [
    { imgSrc: carouselImg1 },
    { imgSrc: carouselImg2 },
    { imgSrc: carouselImg3 },
    { imgSrc: carouselImg4 },
    { imgSrc: carouselImg5 },
  ];

  const [currentImg, setCurrentImg] = useState(0);

  const getPreviousImg = () => {
    const previousImg =
      currentImg === 0 ? carouselImgsData.length - 1 : currentImg - 1;
    setCurrentImg(previousImg);
  };

  const getNextImg = () => {
    const nextImg =
      currentImg >= carouselImgsData.length - 1 ? 0 : currentImg + 1;
    setCurrentImg(nextImg);
  };

  useEffect(() => {
    const carouselInterval = setInterval(getNextImg, 2000);
    return () => clearInterval(carouselInterval);
  });

  return (
    <div>
      {/* Header Carousel */}
      <header className="carousel-container w-full relative">
        <div className="carousel-inner my-1">
          {carouselImgsData.map((image, index) => {
            if (index === currentImg) {
              return (
                <div className="carousel-item w-full h-40" key={index}>
                  <Link to="/products" className="w-full h-full">
                    <img
                      className="w-full h-inherit rounded-md"
                      src={image.imgSrc}
                      alt="Pet Carousel Image"
                    />
                  </Link>
                </div>
              );
            }
          })}
        </div>
        <div className="prev-btn absolute">
          <button
            className="btn rounded-circle btn-secondary px-1-5 py-1 flex flex-justify-center flex-align-center"
            onClick={getPreviousImg}
          >
            <span>
              <i className="fa-solid fa-angle-left fa-2xl" />
            </span>
          </button>
        </div>
        <div className="next-btn absolute">
          <button
            className="btn rounded-circle btn-secondary px-1-5 py-1 flex flex-justify-center flex-align-center"
            onClick={getNextImg}
          >
            <span>
              <i className="fa-solid fa-angle-right fa-2xl" />
            </span>
          </button>
        </div>
        <ol className="carousel-indicators absolute flex-row flex-justify-center flex-align-center gap-1 pointer">
          {carouselImgsData.map((image, index) => {
            if (index === currentImg) {
              return <li className="active" key={index} />;
            } else {
              return (
                <li
                  onClick={() => {
                    setCurrentImg(index);
                  }}
                  key={index}
                />
              );
            }
          })}
        </ol>
      </header>
    </div>
  );
};

const ShopByCategory = () => {
  const [categories, petCategories] = useCategories();
  return (
    <div>
      {/* Category Icons */}
      <section className="category-section flex-col mx-2 my-7 p-1 gap-3 flex-wrap relative">
        <h2>
          Shop By <span className="color-tertiary"> PRODUCT CATEGORY </span>
        </h2>
        <div className="flex-row flex-justify-evenly flex-align-center flex-wrap gap-1 my-1 mx-3 py-1 px-3">
          {categories.map(({ _id, categoryImg, categoryName }) => (
            <div className="category-icons" key={_id}>
              <Link className="btn" to="/products">
                <img
                  src={getFullImgUrl(categoryImg, categoryName, "png")}
                  alt={categoryName}
                />
              </Link>
              <Link className="btn h5 color-tertiary" to="/products">
                {categoryName}
              </Link>
            </div>
          ))}
        </div>
        <Link
          to="/products"
          className="btn btn-secondary w-20-pc m-1 px-3 py-1 rounded-full align-self-center text-center"
        >
          {" "}
          VIEW ALL{" "}
        </Link>
        {/* Background graphical paws (design elements) */}
        <PawBgPrints />
      </section>
      {/* Sale Wide Poster */}
      <Link to="/products" className="w-full">
        <img
          className="w-full h-fit my-2"
          src={widePoster1}
          alt="Offers-Sale-Poster"
        />
      </Link>
      {/* Pet Category Icons */}
      <section className="category-section flex-col mx-2 my-7 p-1 gap-3 flex-wrap relative">
        <h2>
          Shop By <span className="color-tertiary">PET CATEGORY </span>
        </h2>
        <div className="flex-row flex-justify-evenly flex-align-center flex-wrap gap-1 my-1 mx-3 py-1 px-3">
          {petCategories.map(({ _id, categoryImg, categoryName }) => (
            <div className="category-icons" key={_id}>
              <Link className="btn" to="/products">
                <img
                  src={getFullImgUrl(categoryImg, categoryName, "png")}
                  alt={categoryName}
                />
              </Link>
              <Link className="btn h5 color-tertiary" to="/products">
                {categoryName}
              </Link>
            </div>
          ))}
        </div>
        <Link
          to="/products"
          className="btn btn-secondary w-20-pc m-1 px-3 py-1 rounded-full align-self-center text-center"
        >
          {" "}
          VIEW ALL{" "}
        </Link>
        {/* Background graphical paws (design elements) */}
        <PawBgPrints />
      </section>
      {/* EOS Sale Wide Poster */}
      <Link to="/products" className="w-full">
        <img
          className="w-full h-fit my-2"
          src={widePoster2}
          alt="EOS-Sale-Poster"
        />
      </Link>
    </div>
  );
};

const TopFoodBrands = () => {
  const foodBrandImgs = [
    { foodBrandImgSrc: foodBrandImg1 },
    { foodBrandImgSrc: foodBrandImg2 },
    { foodBrandImgSrc: foodBrandImg3 },
    { foodBrandImgSrc: foodBrandImg4 },
    { foodBrandImgSrc: foodBrandImg5 },
    { foodBrandImgSrc: foodBrandImg6 },
    { foodBrandImgSrc: foodBrandImg7 },
    { foodBrandImgSrc: foodBrandImg8 },
    { foodBrandImgSrc: foodBrandImg9 },
    { foodBrandImgSrc: foodBrandImg10 },
  ];

  const [startImg, setStartImg] = useState(0);

  const getNextImgs = () => {
    const nextImgStart =
      startImg === foodBrandImgs.length - 4 ? 0 : startImg + 1;
    setStartImg(nextImgStart);
  };

  const getPrevImgs = () => {
    const prevImgStart =
      startImg === 0 ? foodBrandImgs.length - 4 : startImg - 1;
    setStartImg(prevImgStart);
  };

  return (
    <div>
      {/* Section - Top Food Brands */}
      <section className="section flex-col mx-2 my-7 p-1 gap-3 flex-wrap">
        <div>
          <h2>
            Top <span className="color-tertiary"> FOOD BRANDS </span>
          </h2>
          <h6 className="color-faded">
            Love a particular Food Brand? Find it here!
          </h6>
        </div>
        <div className="section-with-sliders w-80-pc flex-row flex-justify-center relative">
          <div className="flex-row flex-align-center flex-justify-evenly gap-2 w-90-pc flex-wrap">
            {foodBrandImgs.map(({ foodBrandImgSrc }, index) => {
              if (index >= startImg && index <= startImg + 3) {
                return (
                  <Link to="/products" key={index}>
                    <img
                      className="w-full rounded-lg"
                      src={foodBrandImgSrc}
                      alt="Food Brand Image"
                    />
                  </Link>
                );
              }
            })}
          </div>
          <div className="prev-btn absolute">
            <button
              className="btn rounded-circle btn-secondary px-1-5 py-1 flex flex-justify-center flex-align-center"
              onClick={getPrevImgs}
            >
              <span>
                <i className="fa-solid fa-angle-left fa-2xl" />
              </span>
            </button>
          </div>
          <div className="next-btn absolute">
            <button
              className="btn rounded-circle btn-secondary px-1-5 py-1 flex flex-justify-center flex-align-center"
              onClick={getNextImgs}
            >
              <span>
                <i className="fa-solid fa-angle-right fa-2xl" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const TopOffers = () => {
  const topOffersImgs = [
    { topOffersImgSrc: topOffersImg1 },
    { topOffersImgSrc: topOffersImg2 },
    { topOffersImgSrc: topOffersImg3 },
    { topOffersImgSrc: topOffersImg4 },
    { topOffersImgSrc: topOffersImg5 },
    { topOffersImgSrc: topOffersImg6 },
    { topOffersImgSrc: topOffersImg7 },
    { topOffersImgSrc: topOffersImg8 },
  ];

  const [startImg, setStartImg] = useState(0);

  const getNextImgs = () => {
    const nextImgStart =
      startImg === topOffersImgs.length - 4 ? 0 : startImg + 1;
    setStartImg(nextImgStart);
  };

  const getPrevImgs = () => {
    const prevImgStart =
      startImg === 0 ? topOffersImgs.length - 4 : startImg - 1;
    setStartImg(prevImgStart);
  };

  return (
    <div>
      {/* Section - Top Food Brands */}
      <section className="section flex-col mx-2 my-7 p-1 gap-3 flex-wrap">
        <div>
          <h2>
            {" "}
            Top <span className="color-tertiary"> OFFERS </span> of the{" "}
            <span className="color-tertiary"> SEASON </span>
          </h2>
          <h6 className="color-faded text-center">
            {" "}
            Hot Offer! Grab them fast before they run out.
          </h6>
        </div>
        <div className="section-with-sliders w-80-pc flex-row flex-justify-center relative">
          <div className="flex-row flex-align-center flex-justify-evenly gap-2 w-90-pc flex-wrap">
            {topOffersImgs.map(({ topOffersImgSrc }, index) => {
              if (index >= startImg && index <= startImg + 3) {
                return (
                  <Link to="/products" key={index}>
                    <img
                      className="w-full rounded-lg"
                      src={topOffersImgSrc}
                      alt="Top Offers Image"
                    />
                  </Link>
                );
              }
            })}
          </div>
          <div className="prev-btn absolute">
            <button
              className="btn rounded-circle btn-secondary px-1-5 py-1 flex flex-justify-center flex-align-center"
              onClick={getPrevImgs}
            >
              <span>
                <i className="fa-solid fa-angle-left fa-2xl" />
              </span>
            </button>
          </div>
          <div className="next-btn absolute">
            <button
              className="btn rounded-circle btn-secondary px-1-5 py-1 flex flex-justify-center flex-align-center"
              onClick={getNextImgs}
            >
              <span>
                <i className="fa-solid fa-angle-right fa-2xl" />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const TopPicks = () => {
  const {
    productState: { products, areProductsLoading, productError },
  } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(null);

  const getNewArrivalProducts = (productsData) => {
    const newArrivalProducts = productsData.filter((product) => {
      return product.availability.newArrival;
    });
    setFilteredProducts(newArrivalProducts);
  };

  const getTopRatedProducts = (productsData) => {
    const topRatedProducts = productsData.sort((prevProduct, nextProduct) => {
      return nextProduct.totalStars - prevProduct.totalStars;
    });
    setFilteredProducts(topRatedProducts);
  };

  const getPriceBracketedProducts = (productsData, priceMaxLimit) => {
    const priceBracketedProducts = productsData.filter((product) => {
      const discountedPrice = getDiscountedPrice(
        product.originalMRP,
        product.discountPercent
      );
      return discountedPrice < priceMaxLimit;
    });
    setFilteredProducts(priceBracketedProducts);
  };
  const topPicksButtons = [
    {
      btnName: "New Arrivals",
      clickHandlerFunction: getNewArrivalProducts,
    },
    {
      btnName: "Top Rated",
      clickHandlerFunction: getTopRatedProducts,
    },
    {
      btnName: "Under ₹999 ",
      clickHandlerFunction: getPriceBracketedProducts,
    },
  ];
  const [activeBtn, setActiveBtn] = useState(null);

  return (
    <div>
      {/* Section - Top Products Picks with Tabs */}
      <section className="section section-top-picks flex-col mx-2 my-5 p-1 gap-3">
        <div>
          <h2>
            <span className="color-tertiary"> PETKART'S </span>
            Top
            <span className="color-tertiary"> PICKS </span>
          </h2>
          <h6 className="color-faded text-center">
            {" "}
            Loved by pets &amp; pet parents!
          </h6>
        </div>
        <div className="flex-row flex-justify-center flex-align-center gap-5 flex-wrap w-80-pc">
          {topPicksButtons.map((button) => {
            return (
              <button
                key={button.btnName}
                className={`btn btn-secondary m-1 py-1 px-2 w-20-pc rounded-full ${
                  activeBtn === button.btnName ? "active" : ""
                }`}
                onClick={() => {
                  button.clickHandlerFunction(products, 999);
                  setActiveBtn(button.btnName);
                }}
              >
                {button.btnName}
              </button>
            );
          })}
        </div>
        <div className="flex-row flex-justify-center flex-align-center flex-wrap gap-3 w-80-pc">
          {/* Horizontal mini product card */}
          {areProductsLoading ? (
            <p className="h2 font-bold">Products are loading from server....</p>
          ) : productError ? (
            <p className="h2 font-bold">{productError}</p>
          ) : (
            (filteredProducts || products).map(
              (
                {
                  _id,
                  staticId,
                  title,
                  brand,
                  originalMRP,
                  discountPercent,
                  imgUrl,
                },
                index
              ) => {
                if (index < 9) {
                  return (
                    <Link
                      key={_id}
                      to={`/products/${staticId}`}
                      className="mini-product-card btn"
                    >
                      <div className="mini-horizontal-product-card flex-row flex-justify-center flex-align-center gap-1 w-32 h-15">
                        <img
                          src={getFullImgUrl(imgUrl, title, "png")}
                          alt={title}
                          className="w-12 h-12 rounded-md"
                        />
                        <div className="m-0-25 w-20 h-12">
                          <p className="text-truncate-lines-2 mx-0-5 my-0-25 text-md">
                            {title}
                          </p>
                          <p className="color-faded mx-0-5 text-sm-2">
                            {brand}
                          </p>
                          <p className="color-tertiary mx-0-75 my-0-75 text-lg">
                            {" "}
                            ₹{getDiscountedPrice(originalMRP, discountPercent)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                }
              }
            )
          )}
        </div>
        <Link
          to="/products"
          className="btn btn-secondary w-20-pc m-1 px-3 py-1 rounded-full align-self-center text-center"
        >
          {" "}
          VIEW ALL{" "}
        </Link>
      </section>
      {/* Play Toys Wide Poster */}
      <Link to="/products" className="w-full">
        <img
          className="w-full h-fit my-2"
          src={widePoster3}
          alt="Play-Sale-Poster"
        />
      </Link>
    </div>
  );
};

const FeaturedBrands = () => {
  const [brands] = useBrands();

  return (
    <div>
      {/* Section - Featured Brands, Shop By Brands */}
      <section className="section flex-col mx-2 my-5 p-1 gap-3">
        <div>
          <h2>
            Featured
            <span className="color-tertiary"> Brands </span>
          </h2>
          <h6 className="color-faded text-center"> Shop By Brands</h6>
          <h6 className="color-faded text-center">
            {" "}
            Try them once, love them for life!
          </h6>
        </div>
        <div className="section-featured-brand flex-row flex-justify-evenly flex-align-center flex-wrap gap-5 w-70-pc">
          {brands.map(({ _id, brandName, brandImg }) => (
            <Link to="/products" className="btn" key={_id}>
              <img
                src={getFullImgUrl(brandImg, brandName, "png")}
                alt={brandName}
                className="w-15 h-15 rounded-md"
              />
            </Link>
          ))}
        </div>
        <Link
          to="/products"
          className="btn btn-secondary w-20-pc m-1 px-3 py-1 rounded-full align-self-center text-center"
        >
          {" "}
          VIEW ALL{" "}
        </Link>
      </section>
    </div>
  );
};

const FacilitesOffered = () => {
  return (
    <div>
      {/* Section - Facilities Offered */}
      <div className="section-perks flex-row flex-justify-evenly flex-align-center gap-2 flex-wrap mx-8 my-5 p-3">
        <div className="flex-row flex-justify-center flex-align-center gap-2 w-25">
          <span className="color-tertiary icon text-xxl">
            <i className="fa-solid fa-truck-fast" />
          </span>
          <div>
            <p className="text-lg">Fast Shipping</p>
            <p className="text-sm-2 color-faded">On all Orders</p>
          </div>
        </div>
        <div className="flex-row flex-justify-center flex-align-center gap-2 w-25">
          <span className="color-tertiary icon text-xxl">
            <i className="fa-solid fa-rotate-left" />
          </span>
          <div>
            <p className="text-lg">Free Returns</p>
            <p className="text-sm-2 color-faded">
              Withing 7 days (T&amp;C Apply)
            </p>
          </div>
        </div>
        <div className="flex-row flex-justify-center flex-align-center gap-2 w-25">
          <span className="color-tertiary icon text-xxl">
            <i className="fa-solid fa-handshake-angle" />
          </span>
          <div>
            <p className="text-lg">Best Deals</p>
            <p className="text-sm-2 color-faded">On all pet products</p>
          </div>
        </div>
        <div className="flex-row flex-justify-center flex-align-center gap-2 w-25">
          <span className="color-tertiary icon text-xxl">
            <i className="fa-solid fa-life-ring" />
          </span>
          <div>
            <p className="text-lg">We Support</p>
            <p className="text-sm-2 color-faded">7 days, 9AM to 9PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomePage };
