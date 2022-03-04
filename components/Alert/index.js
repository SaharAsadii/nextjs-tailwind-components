import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class CustomSnackbar extends React.Component {
  show = (messages) => {
    if (messages) {
      for (let i = 0; i < messages.length; i++) {
        if (messages[i].type === "error") {
          toast.error(messages[i].title);
        } else if (messages[i].type === "warn") {
          toast.warn(messages[i].title);
        } else if (messages[i].type === "info") {
          toast.warn(messages[i].title);
        } else {
          toast.success(messages[i].title);
        }
      }
    }
  };

  render() {
    return (
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="font-IranYekan"
        toastClassName="font-IranYekan"
      />
    );
  }
}

export default CustomSnackbar;
