import React from "react";
import { RxCaretLeft } from "react-icons/rx";

interface StepperPageBackBtnPropType {
  handleBackPage: () => void;
}

export const StepperBackButton: React.FC<StepperPageBackBtnPropType> = ({
  handleBackPage,
}) => {
  return (
    <button
      className="flex gap-2.5 items-center"
      type="button"
      onClick={handleBackPage}
    >
      <RxCaretLeft />
      <div className="generalText text-gray-10">Back</div>
    </button>
  );
};
