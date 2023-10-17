import React from "react";
import classNames from "classnames";
import cn from "classnames";
import { CardLabelType } from "types";

interface CardLabelProps {
  cardLabelData: CardLabelType;
  className?: string;
}

export const HorizontalCardLabel: React.FC<CardLabelProps> = ({
  cardLabelData,
  className,
}) => {
  return (
    <div className={cn("flex", className)}>
      <div
        className={classNames(
          "rounded-10 xs:px-[10px] px-2 xs:py-[5px] py-1 flex gap-[5px]",
          cardLabelData.backgroundColor
        )}
      >
        <div
          className={classNames("flex items-center", cardLabelData.textColor)}
        >
          <cardLabelData.icon />
        </div>
        <div
          className={classNames(
            " leading-[20px] font-medium ns:text-[14px] text-[10px] whitespace-nowrap",
            cardLabelData.textColor
          )}
        >
          {cardLabelData.text}
        </div>
      </div>
    </div>
  );
};
