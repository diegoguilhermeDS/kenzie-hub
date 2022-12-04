import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message, type) => {
  if (type === "sucess") {
    toast.success(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
      autoClose: 3000,
    });
  } else {
    toast.error(`${message}`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "dark",
      autoClose: 3000,
    });
  }
};
