import React from "react";
import classNames from "classnames";
import { ButtonDataType } from "types/ComponentsTypes/buttonType";

export const Button: React.FC<ButtonDataType> = (props) => {
  return (
    <button
      type={props.type ? props.type : "button"}
      className={classNames(
        "rounded-10 flex items-center justify-center",
        props.backgroundColor,
        props.otherStyle,
        props.padding,
        props.height,
        props.width,
        props.textColor,
        props.textSize,
        props.border,
        props.disabled && "bg-black bg-opacity-50 text-opacity-50"
      )}
      onClick={props.handleClick}
      disabled={props.disabled}
      value={props.value}
    >
      {props.text && props.text}
      {props.icon && <props.icon />}
      {props.image && <img src={props.image} alt=" button content" />}
    </button>
  );
};
