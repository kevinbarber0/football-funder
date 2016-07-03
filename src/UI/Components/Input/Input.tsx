import React, { useState } from "react";
import classNames from "classnames";
import { InputType } from "types";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { useSelector } from "react-redux";
// import { AppState } from "App/reducers";

interface InputProps {
  name: string;
  data: InputType;
  disabled: boolean;
  required: boolean;
  value: any;
  setValue: (key: string, value: any) => void;
}
export const Input: React.FC<InputProps> = ({
  data,
  name,
  value,
  setValue,
  disabled,
  required,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  const [inputType, setInputType] = useState<string>(data.type);

  const [floating, setFloating] = useState<boolean>(false);

  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleFocus = () => {
    setFloating(true);
  };

  const handleBlur = () => {
    setFloating(false);
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          name={name}
          type={inputType}
          value={value}
          className={classNames(
            "relative bg-white w-full rounded-10 z-10 pt-3 px-3",
            "transition duration-200 ease-linear border-2 border-gray-200 ",
            "appearance-none focus:outline-none",
            disabled ? "text-green-70 text-opacity-50" : "text-green-70",
            data.height,
            data.textSize,
            data.border
          )}
          disabled={disabled}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoComplete="on"
          required={required}
        />
        {data.type === "password" && (
          <div className="absolute h-full right-6 top-0 flex items-center z-10">
            <div
              onClick={() => {
                setIsShowPassword(!isShowPassword);
              }}
            >
              {disabled ? (
                <AiOutlineEye className="opacity-100" />
              ) : !isShowPassword ? (
                <div
                  onClick={() => {
                    setInputType("text");
                  }}
                >
                  <AiOutlineEye />
                </div>
              ) : (
                <div
                  onClick={() => {
                    setInputType("password");
                  }}
                >
                  <AiOutlineEyeInvisible />
                </div>
              )}
            </div>
          </div>
        )}
        <label
          htmlFor="floating_standard"
          className={classNames(
            "absolute left-3  top-[calc(50%-10px)] origin-[0_0] pointer-events-none text-sm  z-10",
            "duration-200 ease-linear ",
            floating || value ? "scale-75 -translate-y-2.5" : " ",
            disabled ? "text-opacity-50 text-gray-10" : "text-gray-10",
            data.content
          )}
        >
          {data.label}
        </label>
      </div>
    </div>
  );
};
