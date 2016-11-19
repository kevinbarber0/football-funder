import React, {  useState, useEffect, useRef } from "react";
import classNames from "classnames";
import { SelectDataType } from "types";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  name: string;
  SelectFormData: SelectDataType[];
  backgroundColor: string;
  label: string;
  textSize: string;
  value: any;
  setValue: (key: string, value: any) => void;
}

export const Select: React.FC<Props> = ({
  backgroundColor,
  name,
  SelectFormData,
  textSize,
  label,
  value,
  setValue,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue(name, value);
  };
  const [floating, setFloating] = useState<boolean>(false);
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleSelectFormClick = () => {
    setShowOptions(!showOptions);
    setFloating(!floating);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowOptions(false);
        setFloating(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative w-full">
      <input
        type="text"
        value={value}
        onClick={handleSelectFormClick}
        className={classNames(
          "items-center h-[54px] px-3 pt-3 appearance-none w-full rounded-10 ",
          "transition duration-200 ease-linear border-2 border-gray-200 text-green-70",
          "appearance-none focus:outline-none cursor-context-menu",
          backgroundColor,
          textSize
        )}
        onChange={handleChange}
        readOnly={true}
        required
      />

      {showOptions && (
        <div
          className="absolute top-[60px] border-2 border-gray-20 rounded-10 
        w-full bg-white divide-gray-20 divide-y-2 overflow-hidden z-50"
        >
          {SelectFormData.map((formData, index) => {
            return (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setValue(name, formData.option);
                  setShowOptions(false);
                }}
                className={classNames("w-full py-2.5 hover:bg-green-10")}
              >
                {formData.option}
              </button>
            );
          })}
        </div>
      )}
      <div
        className={classNames(
          "pointer-events-none absolute inset-y-0 right-3 flex items-center px-2"
        )}
      >
        <MdKeyboardArrowDown />
      </div>
      <label
        htmlFor="floating_filled"
        className={classNames(
          "absolute left-3  top-[calc(50%-10px)] origin-[0_0] pointer-events-none text-sm  z-10",
          "duration-200 ease-linear text-gray-10",
          "after:content-['*'] after:ml-1 after:text-green-10",
          floating || value ? "scale-75 -translate-y-2.5" : ""
        )}
      >
        {label}
      </label>
    </div>
  );
};
