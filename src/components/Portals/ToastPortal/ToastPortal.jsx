// import React from "react";
import { createPortal } from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastPortal = () => {
  return createPortal(
    <ToastContainer
      theme="light"
      position="bottom-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop
      limit={3}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />,
    document.getElementById("toast-portal")
  );
};

export { ToastPortal };
