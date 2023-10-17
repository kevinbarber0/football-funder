import React from "react";
import { useNavigate } from "react-router-dom";
import { SIGNIN_URL } from "Lib/urls";
import { Button, StepperBackButton } from "UI";

interface ResetPasswordStep1PropsType {
  handleNextPage: () => void;
}

export const ForgotPasswordStepFirst: React.FC<ResetPasswordStep1PropsType> = ({
  handleNextPage,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="
        md:w-[720px] w-full px-5 ns:mt-[90px] mt-[60px] ns:mb-[500px] mb-[300px]  mx-auto"
    >
      <div className="mt-15">
        <StepperBackButton
          handleBackPage={() => {
            navigate(SIGNIN_URL);
          }}
        />
      </div>
      <div className="mt-30 generalTitle xs:text-center">
        I've forgotten my password
      </div>
      <div className="mt-15 introText xs:text-center">
        If you're logged out and can't remember your password, we can send you
        an email with a link to reset it.
      </div>
      <div className="mt-30 w-full flex justify-center">
        <div className="xs:w-[500px] w-full">
          <Button
            backgroundColor="bg-green-10"
            height="h-[50px]"
            width="w-full"
            text="Reset password"
            textColor="text-green-70"
            textSize="buttonText"
            handleClick={handleNextPage}
          />
        </div>
      </div>
    </div>
  );
};
