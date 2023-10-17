import React from "react";
import { Button, StepperBackButton } from "UI";

interface ResetPasswordStep4PropsType {
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

export const ForgotPasswordStepFourth: React.FC<
  ResetPasswordStep4PropsType
> = ({ handlePrevPage, handleNextPage }) => {
  return (
    <div>
      <div
        className="
      md:w-[720px] w-full px-5 ns:mt-[90px] mt-[60px] ns:mb-[500px] mb-[300px]  mx-auto"
      >
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30 xs:text-center generalTitle">
          Password reset successfully
        </div>
        <div className="mt-15 xs:text-center introText">
          Your password was reset successfully.
        </div>
        <div className="mt-30 w-full flex justify-center">
          <div className="xs:w-[500px] w-full mx-auto">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Sign in to my account"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
