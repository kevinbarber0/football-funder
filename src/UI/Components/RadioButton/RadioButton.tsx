import React from "react";
import classNames from "classnames";
import { BsCheckLg } from "react-icons/bs";

interface RadioButtonPropsType {
  checkboxStyle: boolean;
  label: string;
  name: string;
  checked: boolean;
  onChange: (key: string, value: any) => void;
  value: number;
  classes: string | undefined;
  textStyle: string;
}

export const RadioButton: React.FC<RadioButtonPropsType> = ({
  checkboxStyle,
  label,
  value,
  classes,
  textStyle,
  name,
  checked,
  onChange,
}) => {
  return (
    <div className={classNames("flex items-center", classes)}>
      <label
        id="label1"
        className={classNames("font-normal text-green-70", textStyle)}
        onClick={() => {
          onChange(name, value);
        }}
      >
        {label}
      </label>
      <div className="bg-white rounded-full w-5 h-5 flex justify-center items-center relative">
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={() => onChange(name, value)}
          className={classNames(
            "appearance-none focus:opacity-100 ",
            "border border-gray-300 absolute cursor-pointer w-full h-full checked:border-none",
            checkboxStyle ? "rounded-md" : "rounded-full"
          )}
        />
        {!checkboxStyle ? (
          <div
            className={classNames(
              "border-[5px] border-green-10 rounded-full w-full h-full",
              checked ? "flex" : "hidden"
            )}
          ></div>
        ) : (
          <div
            className={classNames(
              " bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold",
              checked ? "flex" : "hidden"
            )}
          >
            <BsCheckLg />
          </div>
        )}
      </div>
    </div>
  );
};
