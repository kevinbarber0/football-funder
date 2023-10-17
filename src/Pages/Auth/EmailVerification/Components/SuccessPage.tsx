import React from "react";
import { Button, StepperBackButton } from "UI";
import { StepperActionPropsType } from "types";

export const SuccessPage: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  return (
    <div>
      <div className="sm:mt-[60px] mt-[80px] 2xs:mb-[690px] mb-[300px]">
        <div className="w-[520px] max-xs:w-full mx-auto max-xs:px-5">
          <div className="mt-15">
            <StepperBackButton handleBackPage={handlePrevPage} />
          </div>
          <div className="mt-30 titleText text-center max-xs:text-start">
            Email confirmed successfully
          </div>
          <div className="mt-30 mx-auto">
            <div className="xs:w-[390px] w-full mx-auto">
              <Button
                backgroundColor="bg-green-10"
                width="w-full"
                height="h-[50px]"
                text="Continue"
                textColor="text-green-70"
                textSize="text-[16px] leading-5 font-semibold"
                handleClick={handleNextPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
