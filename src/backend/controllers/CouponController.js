import { Response } from "miragejs";

/**
 * All the routes related to Coupons are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all brands in the db.
 * send GET Request at /api/coupons
 * */

export const getCouponsHandler = function () {
  try {
    return new Response(200, {}, { coupons: this.db.coupons });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
