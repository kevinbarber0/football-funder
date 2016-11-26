import React, { useContext } from "react";
import { AccountEmailData } from "Config";
import { Button, Input, StepperBackButton } from "UI";
import { FormStepperContext } from "App/FormStepperProvider";

interface ResetPasswordStep2PropsType {
  handlePrevPage: () => void;
  handleSendResetPassword: () => void;
}

export const ForgotPasswordStepSecond: React.FC<
  ResetPasswordStep2PropsType
> = ({ handleSendResetPassword, handlePrevPage }) => {
  const { forgotPasswordValue, handleForgotPasswordValue } =
    useContext(FormStepperContext);
  return (
    <form onSubmit={handleSendResetPassword}>
      <div
        className="
        md:w-[720px] w-full px-5 ns:mt-[90px] mt-[60px] ns:mb-[500px] mb-[300px]  mx-auto"
      >
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30 generalTitle  xs:text-center">Reset password</div>
        <div className="mt-15 introText  xs:text-center">
          Just enter the email address you registered with and we’ll send you a
          link to reset your password.
        </div>
        <div className="w-full mx-auto">
          <div className="mt-30 xs:w-[500px] w-full mx-auto">
            <Input
              data={AccountEmailData}
              name="email"
              value={forgotPasswordValue.email}
              setValue={handleForgotPasswordValue}
              required={true}
              disabled={false}
            />
          </div>
        </div>
        <div className="mt-30 w-full flex justify-center">
          <div className="xs:w-[500px] w-full">
            <Button
              type="submit"
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Send password reset link"
              textColor="text-green-70"
              textSize="buttonText"
            />
          </div>
        </div>
      </div>
    </form>
  );
};
