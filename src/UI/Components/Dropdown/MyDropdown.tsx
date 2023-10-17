import React, { useState } from "react";
import classNames from "classnames";
import { MyDropdownType } from "types";

interface DropdownDataType {
  bgColor: string;
  clickStyle: string;
  dropdownData: MyDropdownType;
  iconSize: string;
  size?: string;
  titleColor: string;
}

export const MyDropdown: React.FC<DropdownDataType> = ({
  bgColor,
  clickStyle,
  dropdownData,
  iconSize,
  size,
  titleColor,
}) => {
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  return (
    <div className="relative group cursor-pointer">
      <button
        id="dropdownDefaultButton"
        className={classNames(
          "rounded-10 flex justify-center items-center",
          iconSize,
          size,
          isShowMenu ? `${clickStyle}` : `${titleColor} ${bgColor}`
        )}
        onClick={() => setIsShowMenu(!isShowMenu)}
      >
        {dropdownData.icon && <dropdownData.icon />}
      </button>
      {isShowMenu && (
        <div
          id="dropdown"
          className="
            absolute right-0 top-10 shadow-lg 
            bg-white rounded-10 w-[180px] overflow-hidden z-30"
        >
          <div className="text-sm font-semibold text-green-70 divide-y divide-gray-20">
            {dropdownData.children.map((item, index) => (
              <div key={index}>
                <button
                  className="w-full text-sm font-semibold px-15 py-15 
                      hover:bg-green-10"
                  onClick={() => {
                    setIsShowMenu(false);
                  }}
                >
                  <div className="flex items-center justify-start gap-2.5">
                    {item.icon && <item.icon />}
                    {item.title}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
