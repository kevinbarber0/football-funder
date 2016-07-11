import React from "react";
import classNames from "classnames";

interface ModalPropsType {
  children?: any;
}

export const Modal: React.FC<ModalPropsType> = ({ children }) => {
  return (
    <div
      className={classNames(
        "fixed top-0 w-full h-full  px-5 overflow-y-auto inset-0 bg-black bg-opacity-30",
        "flex justify-center items-center z-50"
      )}
    >
      {children}
    </div>
  );
};
