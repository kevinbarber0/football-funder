import React from "react";
import classNames from "classnames";
import { BsCheckLg } from "react-icons/bs";
interface confirmBoxPropsType {
  name: string;
  label: string;
  value: any;
  setValue: (key: string, value: boolean) => void;
  checkboxStyle: boolean;
}
export const ConfirmBox: React.FC<confirmBoxPropsType> = ({
  name,
  label,
  checkboxStyle,
  setValue,
  value,
}) => {
  return (
    <div className="flex flex-row items-center gap-2.5">
      <div className=" bg-white rounded-full w-5 h-5 flex justify-center items-center relative">
        <div
          className={classNames(
            "border border-gray-300 absolute cursor-pointer w-full h-full",
            checkboxStyle ? "rounded-md" : "rounded-full"
          )}
          onClick={() => {
            setValue(name, value);
          }}
        >
          {checkboxStyle ? (
            <div
              className={classNames(
                " bg-green-10 rounded-md w-full h-full z-1 justify-center items-center text-semibold",
                value ? "flex" : "hidden"
              )}
            >
              <BsCheckLg />
            </div>
          ) : (
            <div>
              <div
                className={classNames(
                  "border-[5px] border-green-10 rounded-full w-full h-full",
                  value ? "flex" : "hidden"
                )}
              ></div>
            </div>
          )}
        </div>
      </div>
      <div
        className="flex-1 introText"
        onClick={() => {
          setValue(name, value);
        }}
      >
        {label}
      </div>
    </div>
  );
};
