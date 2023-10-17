import React from "react";
import { Button } from "UI";
import { StepperActionPropsType } from "types";

export const ConfirmPage: React.FC<StepperActionPropsType> = ({
  handleNextPage,
}) => {
  return (
    <div>
      <div className="sm:mt-[60px] mt-[80px] xs:mb-[500px] mb-[200px]">
        <div className="w-[520px] max-xs:w-full mx-auto max-xs:px-5">
          <div className="mt-30 titleText text-center max-xs:text-start">
            Confirm your email to continue
          </div>
          <div className="mt-15 introText">
            We’ve sent you a confirmation link to your email to complete your
            account setup. Please confirm your email in order to continue to the
            next steps.
          </div>
          <div className="mt-30 introText text-center max-xs:text-start">
            Not received yet?
          </div>
          <div className="mt-2.5 mx-auto">
            <div className="xs:w-[390px] w-full mx-auto">
              <Button
                backgroundColor="bg-green-10"
                width="w-full"
                height="h-[50px]"
                text="Resend email"
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
