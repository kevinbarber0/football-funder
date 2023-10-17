import React from "react";
import classNames from "classnames";
import { AccountPageTabButtonType } from "types";

export const TabButton: React.FC<AccountPageTabButtonType> = ({
  handleClick,
  icon: Icon,
  name,
  selectedBtnName,
  textColor,
  textSize,
  value,
}) => {
  return (
    <button
      className={classNames(
        "cursor-pointer transition-colors duration-200 py-[5px]",
        textSize,
        value === selectedBtnName
          ? "text-black border-b-2 border-green-10 font-semibold"
          : `${textColor}`
      )}
      onClick={handleClick}
    >
      <div className="flex items-center gap-2.5">
        {Icon && <Icon />}
        {name}
      </div>
    </button>
  );
};
