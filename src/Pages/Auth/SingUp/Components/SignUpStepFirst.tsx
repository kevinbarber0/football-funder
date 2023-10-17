import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  PageSectionTitle,
  UnchangePageTitle,
  CategoryButtonList,
} from "UI";
import { FundraiserCategoryData } from "Config";
import { FormStepperContext } from "App/FormStepperProvider";
import { SIGNIN_URL } from "Lib/urls";

interface SignUpFirstPagePropsType {
  handleNextPage: () => void;
  handleOtherPage: () => void;
}

export const SignUpStepFirst: React.FC<SignUpFirstPagePropsType> = ({
  handleNextPage,
  handleOtherPage,
}) => {
  const navigate = useNavigate();
  const { registerValue, handleRegisterValue } = useContext(FormStepperContext);
  const goToSignIn = () => {
    navigate(SIGNIN_URL);
  };
  const signUpFirstPageAction = () => {
    if (registerValue.category_id === 2) handleOtherPage();
    else handleNextPage();
  };
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 xs:mt-[60px] mt-5
       xs:mb-[150px] mb-[100px] mx-auto"
    >
      <UnchangePageTitle
        title="Create your Football Funder account"
        introText="Already have an account?"
        linkText="Sign in"
        linkFunction={goToSignIn}
      />
      <div className="mt-30">
        <PageSectionTitle
          title="Category"
          intro="Select the option below which reflects your organisation."
        />
        <div className="mt-[15px]">
          <CategoryButtonList
            options={FundraiserCategoryData}
            name="category_id"
            value={registerValue.category_id}
            setValue={handleRegisterValue}
          />
        </div>
      </div>
      <div className="xs:mt-[60px] mt-30">
        <div className="flex xs:justify-end max-xs:flex-col">
          <div className="xs:w-[250px]">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Continue"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={signUpFirstPageAction}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
