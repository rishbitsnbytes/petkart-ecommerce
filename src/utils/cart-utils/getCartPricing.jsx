import { getDiscountedPrice } from "../../utils";

const getCartPricing = (cartItems, couponAppliedState) => {
  const {
    couponApplied: { couponDiscountPercent, couponDiscountFlatAmount },
    couponAppliedType,
  } = couponAppliedState;

  let totalMRP = 0,
    totalDiscountOnMRP = 0,
    totalDiscountPercent = 0,
    totalDiscountedPrice = 0,
    finalDeliveryCharge = 0,
    savedDeliveryCharge = 0,
    subtotalAmount = 0,
    couponDiscount = 0,
    totalDiscount = 0,
    totalAmount = 0,
    totalSavings = 0;

  cartItems.forEach(
    (
      { originalMRP, discountPercent, qty, delivery: { deliveryCharge } },
      index
    ) => {
      originalMRP = Number(originalMRP);
      discountPercent = Number(discountPercent);
      deliveryCharge = Number(deliveryCharge);
      qty = Number(qty);

      totalMRP += originalMRP * qty;
      totalDiscountedPrice +=
        getDiscountedPrice(originalMRP, discountPercent) * qty;
      if (index === cartItems.length - 1) {
        finalDeliveryCharge = totalDiscountedPrice > 499 ? 0 : deliveryCharge;
        savedDeliveryCharge = totalDiscountedPrice > 499 ? deliveryCharge : 0;
      }
    }
  );

  totalDiscountOnMRP = totalMRP - totalDiscountedPrice;
  totalDiscountPercent = (totalDiscountOnMRP / totalMRP) * 100;
  subtotalAmount = totalDiscountedPrice + finalDeliveryCharge;

  const getCouponDiscount = () => {
    switch (couponAppliedType) {
      case "COUPON_FLAT_DISCOUNT": {
        return Number(couponDiscountFlatAmount);
      }
      case "COUPON_PERCENT_DISCOUNT": {
        return Number(totalDiscountedPrice * (couponDiscountPercent / 100));
      }
      default:
        return 0;
    }
  };

  couponDiscount = getCouponDiscount();
  totalDiscount = totalDiscountOnMRP + couponDiscount;
  totalAmount = subtotalAmount - couponDiscount;
  totalSavings = totalDiscountOnMRP + couponDiscount + savedDeliveryCharge;

  //   Rounding off all the computations before returning
  totalMRP = Math.round(totalMRP);
  totalDiscountOnMRP = Math.round(totalDiscountOnMRP);
  totalDiscountPercent = Math.round(totalDiscountPercent);
  totalDiscountedPrice = Math.round(totalDiscountedPrice);
  finalDeliveryCharge = Math.round(finalDeliveryCharge);
  subtotalAmount = Math.round(subtotalAmount);
  couponDiscount = Math.round(couponDiscount);
  totalDiscount = Math.round(totalDiscount);
  totalAmount = Math.round(totalAmount);
  totalSavings = Math.round(totalSavings);

  return {
    totalMRP: totalMRP,
    totalDiscountOnMRP: totalDiscountOnMRP,
    totalDiscount: totalDiscount,
    totalDiscountPercent: totalDiscountPercent,
    totalDiscountedPrice: totalDiscountedPrice,
    finalDeliveryCharge: finalDeliveryCharge,
    subtotalAmount: subtotalAmount,
    couponDiscount: couponDiscount,
    totalAmount: totalAmount,
    totalSavings: totalSavings,
  };
};

export { getCartPricing };
