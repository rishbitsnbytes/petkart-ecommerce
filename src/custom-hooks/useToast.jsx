import { toast } from "react-toastify";

// This hook has 3 props :-
// toastText = string- text to be displayed inside toast
// toastType = string - [success, warn, error, info]
// toastTheme = string - [light, dark, colored]
// options object passed to the toastEmiited (toast()) will supersede the ToastContainer props!!

const useToast = () => {
  const showToast = (
    toastText = "Successfully Completed the task",
    toastType = "success",
    toastTheme = "colored"
  ) => {
    const options = {
      theme: toastTheme,
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

    const notify = () => toast[toastType](toastText, options);

    return notify();
  };

  return { showToast };
};

export { useToast };
