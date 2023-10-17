import { toast } from "react-toastify";

export const handleErrorMessage = (errorMessage: string) => {
    toast.error(`${errorMessage}`, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
};