import { v4 as uuid } from "uuid";

/**
 * Coupons Database has been added here.
 * */

export const coupons = [
  {
    _id: uuid(),
    couponName: "PAW-INFANT",
    couponDescription: "10% Off on orders above ₹499",
    couponType: "COUPON_PERCENT_DISCOUNT",
    couponValue: "10",
    minCartValue: "499",
  },
  {
    _id: uuid(),
    couponName: "PAW-BABY",
    couponDescription: "15% Off on orders above ₹999",
    couponType: "COUPON_PERCENT_DISCOUNT",
    couponValue: "15",
    minCartValue: "999",
  },
  {
    _id: uuid(),
    couponName: "PAWSITIVITY",
    couponDescription: "Flat ₹399 Off on orders above ₹2999",
    couponType: "COUPON_FLAT_DISCOUNT",
    couponValue: "399",
    minCartValue: "2999",
  },
  {
    _id: uuid(),
    couponName: "PAWLOVE",
    couponDescription: "20% Off on order above ₹1999",
    couponType: "COUPON_PERCENT_DISCOUNT",
    couponValue: "20",
    minCartValue: "1999",
  },
  {
    _id: uuid(),
    couponName: "PAWSOME",
    couponDescription: "Flat ₹999 Off on orders above ₹4999",
    couponType: "COUPON_FLAT_DISCOUNT",
    couponValue: "999",
    minCartValue: "4999",
  },
];
