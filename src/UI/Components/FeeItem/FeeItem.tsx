import React from "react";
import classNames from "classnames";

interface FeeItemProsType {
  title: string;
  label: string;
  condition1: string;
  condition2?: string;
}

export const FeeItem: React.FC<FeeItemProsType> = ({
  title,
  label,
  condition1,
  condition2,
}) => {
  return (
    <div
      className={classNames(
        "pb-5",
        !condition2 && " border-b-2 border-gray-200"
      )}
    >
      <div className="vs:buttonText vs:text-green-70 valueText">{title}</div>
      <div className="flex mt-7">
        <div className="px-2 py-1 bg-green-10 generalTitle rounded-10 ">
          {label}
        </div>
      </div>
      <div className="mt-5 vs:introText smallIntroText">
        <div>{condition1}</div>
        <div>{condition2}</div>
      </div>
    </div>
  );
};
