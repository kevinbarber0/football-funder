import React from "react";

interface StepLabelPropsType {
  number: string;
  title: string;
}

export const StepLabel: React.FC<StepLabelPropsType> = ({ number, title }) => {
  return (
    <div className="rounded-10 bg-gray-100 px-[14px] py-[10px]">
      <div className="introText">{number}</div>
      <div className="stepLabelTitle">{title}</div>
    </div>
  );
};
