import React, { useContext } from "react";

import classNames from "classnames";

import { ColorContext } from "App/ColorProvider";

interface FactItemPropsType {
  textColor: string;
  title: string;
  value: string;
}

export const FactItem: React.FC<FactItemPropsType> = ({
  textColor,
  title,
  value,
}) => {
  const { primaryColor } = useContext(ColorContext)!;

  return (
    <div className="flex flex-col">
      <div className={classNames("generalSmallText", textColor)}>{title}</div>
      <div
        className="text-[32px] font-semibold"
        style={{ color: primaryColor }}
      >
        {value}
      </div>
    </div>
  );
};
