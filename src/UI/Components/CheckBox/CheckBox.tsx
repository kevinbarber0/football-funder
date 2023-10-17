import React from "react";
import classNames from "classnames";
import { BsCheckLg } from "react-icons/bs";

interface CheckBoxProps {
  align?: string;
  label: string;
  textClass?: string;
  value: any;
  checked: boolean;
  onChange: (value: any) => void;
}

export const CheckBox: React.FC<CheckBoxProps> = ({
  align,
  label,
  textClass,
  value,
  onChange,
  checked,
}) => {
  return (
    <div className={classNames("flex justify-between items-center", align)}>
      <label
        id="label1"
        className={classNames("flex-1", textClass)}
        onClick={() => onChange(value)}
      >
        {label}
      </label>
      <div
        className="bg-white rounded-full w-5 h-5 flex 
         justify-center items-center relative"
      >
        <input
          aria-labelledby="label1"
          type="checkbox"
          checked={checked}
          name="checkbox"
          onChange={() => onChange(value)}
          className=" appearance-none focus:opacity-100 border rounded-md 
           border-gray-300 absolute cursor-pointer w-full h-full"
        />
        <div
          className={classNames(
            " bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold",
            checked ? "flex" : "hidden"
          )}
        >
          <BsCheckLg />
        </div>
      </div>
    </div>
  );
};
