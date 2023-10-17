import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MYACCOUNT_URL } from "Lib/urls";
import { Button, Input, StepperBackButton } from "UI";
import { AccountPasswordData, AccountConfirmPasswordData } from "Config";
import { StepperActionPropsType } from "types";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import { FormStepperContext } from "App/FormStepperProvider";

export const UpdatePasswordStep2: React.FC<StepperActionPropsType> = ({
  handlePrevPage,
}) => {
  const navigate = useNavigate();
  const { updatePasswordValue, handleUpdatePasswordValue } =
    useContext(FormStepperContext);
  const onUpdateBtnClick = () => {
    navigate(MYACCOUNT_URL);
    sessionStorage.setItem("updatedPassword", "true");
  };

  return (
    <div className="relative md:pt-5 pt-[10px] md:pb-[300px] pb-[250px]">
      <div className="relative sm:pt-[60px] pt-30">
        <div className="absolute w-full top-0 z-0">
          <img
            src={ExploreMask}
            alt="explore back mask"
            className="object-cover w-full max-ns:hidden"
          />
          <img
            src={MobileExploreMask}
            alt="explore back mask"
            className="object-cover w-full ns:hidden"
          />
        </div>
        <div className="relative lg:w-[1000px] w-full px-5 mx-auto z-10">
          <div className=" xs:w-[500px]">
            <div className="generalTitle">Update password</div>
            <div className="mt-30">
              <StepperBackButton handleBackPage={handlePrevPage} />
            </div>
            <div className="mt-15 flex gap-1">
              <div className="introText">Enter your new password.</div>
            </div>
            <div className="mt-30">
              <Input
                data={AccountPasswordData}
                name="password"
                value={updatePasswordValue.new_password}
                setValue={handleUpdatePasswordValue}
                required={true}
                disabled={false}
              />
              <div className="mt-2.5">
                <Input
                  data={AccountConfirmPasswordData}
                  name="confirm_password"
                  value={updatePasswordValue.confirm_password}
                  setValue={handleUpdatePasswordValue}
                  required={true}
                  disabled={false}
                />
              </div>
            </div>
            <div className="mt-30">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Update new password"
                textColor="text-green-70"
                textSize="buttonText"
                handleClick={onUpdateBtnClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
