import React, { useState } from "react";
import classNames from "classnames";

interface HexColorInputPropsType {
  setColor: (value: string) => void;
  defaultColor: string;
  labelName: string;
}

export const HexColorInput: React.FC<HexColorInputPropsType> = ({
  defaultColor,
  setColor,
  labelName,
}) => {
  const [inputColor, setInputColor] = useState<string>(defaultColor);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputColor = event.target.value;
    if (/^[0-9A-Fa-f]{0,6}$/.test(inputColor)) {
      setInputColor(inputColor.toUpperCase());
      setColor(inputColor.toUpperCase());
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (event.target.value === "") {
      setInputColor(defaultColor);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          type="text"
          value={inputColor}
          className={classNames(
            "relative peer bg-white w-full rounded-10  appearance-none",
            "transition duration-200 border-2 border-gray-200 ",
            "ease-linear placeholder:text-transparent focus:pb-[0.625rem] focus:pt-[1.625rem] ",
            "focus:outline-none [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]",
            "text-green-70 h-[54px] text-base px-15 border-2 border-gary-10"
          )}
          maxLength={6}
          onChange={onChangeHandler}
          onFocus={handleFocus}
          placeholder="Hex Color Input"
          required
        />
        {inputColor.length === 6 && /^[0-9A-Fa-f]{6}$/.test(inputColor) ? (
          <div className="absolute h-full flex items-center top-0 right-[15px] ">
            <div
              className={classNames(
                "border-2 border-gray-300 w-[30px] h-[30px] rounded-10"
              )}
              style={{
                backgroundColor: `#${inputColor}`,
              }}
            ></div>
          </div>
        ) : (
          <div className="absolute h-full flex items-center  top-0 right-[15px]">
            <div
              className={classNames(
                "border-2 border-gray-300 w-[30px] h-[30px] rounded-10",
                `bg-[#${inputColor}]`
              )}
            ></div>
          </div>
        )}
        <label
          htmlFor="floatingInput"
          className={classNames(
            "pointer-events-none absolute left-0 top-0 origin-[0_0] border text-[14px]",
            "border-solid border-transparent px-3 py-4 transition-[opacity,_transform]",
            "duration-200 ease-linear peer-focus:-translate-y-1.5 peer-focus:translate-x-[0.15rem]",
            "peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem]",
            " peer-[:not(:placeholder-shown)]:scale-[0.75] peer-focus:scale-[0.75] ",
            "motion-reduce:transition-none dark:peer-focus:text-primary",
            "after:content-['*'] after:ml-1 after:text-green-10 ",
            "text-gray-10"
          )}
        >
          {labelName}
          {/* <span className="text-green-10 ml-1">*</span> */}
        </label>
      </div>
    </div>
  );
};
