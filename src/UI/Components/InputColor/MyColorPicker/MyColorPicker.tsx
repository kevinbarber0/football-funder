import React, { useState } from "react";

import Sketch from "@uiw/react-color-sketch";

import classNames from "classnames";

interface MyColorPickerPropsType {
  setColor: (value: string) => void;
  defaultColor: string;
  labelName: string;
}

export const MyColorPicker: React.FC<MyColorPickerPropsType> = ({
  defaultColor,
  setColor,
  labelName,
}) => {
  const [inputColor, setInputColor] = useState<string>(defaultColor);

  const [pickedColor, setPickedColor] = useState<string>(defaultColor);

  const [showPanel, setShowPanel] = useState<boolean>(false);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setShowPanel(true);
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
          onChange={() => {}}
          onFocus={handleFocus}
          placeholder="Color Input"
          required
        />

        {/* <div className="absolute h-full w-full flex items-center top-0 right-0 ">
          <input
            type="color"
            value={pickedColor || "#000000"}
            id="colorPicker"
            className={classNames("w-full h-full opacity-0")}
            onChange={onChanageColorPickerHandler}
          />
        </div> */}

        <div className="absolute h-full flex items-center top-0 right-[15px] ">
          <div
            className={classNames(
              "border-2 border-gray-300 w-[30px] h-[30px] rounded-10"
            )}
            style={{
              backgroundColor: `${inputColor}`,
            }}
          ></div>
        </div>

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
        </label>
        <div className="absolute z-10">
          {showPanel && (
            <div className="realative">
              <Sketch
                width={210}
                color={pickedColor}
                disableAlpha={true}
                onChange={(color) => {
                  setPickedColor(color.hex);
                  setInputColor(color.hex.toUpperCase());
                  setColor(color.hex);
                  // setInputColor(pickedColor.toUpperCase());
                }}
              />
              <div
                className="absolute w-[212px] h-10 -bottom-9 -left-[1px]  
                border-[1px] border-t-0 border-gray-300 rounded-b-[4px]  bg-white flex justify-center gap-2.5 py-2"
              >
                <button
                  className="w-20 rounded-10 bg-green-10 border-[1px] border-gray-300 text-xs font-semibold"
                  onClick={() => setShowPanel(false)}
                >
                  OK
                </button>
                <button
                  className="w-20 rounded-10 bg-white border-[1px] border-gray-300 text-xs font-semibold"
                  onClick={() => {
                    setInputColor("");
                    setShowPanel(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
