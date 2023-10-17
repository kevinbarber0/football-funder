import React, { useContext } from "react";
import {
  AddAwardPanel,
  Button,
  PageSectionTitle,
  PageTitle,
  StepLabel,
  StepperBackButton,
} from "UI";
import { FormStepperContext } from "App/FormStepperProvider";

export interface AddrewardsFirstPagePropsType {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  handleNextPartPage: () => void;
}

export const CreateFundraiserThirdStep: React.FC<
  AddrewardsFirstPagePropsType
> = ({ handleNextPage, handlePrevPage, handleNextPartPage }) => {
  const { createFundraiserValue } = useContext(FormStepperContext);
  const { isClickedAddrewardBtn } = useContext(FormStepperContext);
  const handleContinueBtnClick = () => {
    if (isClickedAddrewardBtn) {
      handleNextPage();
    } else {
      handleNextPartPage();
      console.log(createFundraiserValue);
    }
  };
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         pb-[100px] max-ns:pb-[60px] mx-auto"
    >
      <PageTitle title="Create your fundraiser" />
      <div className="mt-15">
        <StepperBackButton handleBackPage={handlePrevPage} />
      </div>
      <div className="mt-30">
        <StepLabel number="Step 3" title="Add rewards" />
      </div>
      <div className="mt-30">
        <PageSectionTitle intro="Give your supporters something back by offering rewards for a certain donation amount. The number of rewards you can offer is unlimited." />
      </div>
      <div className="mt-30">
        <AddAwardPanel />
      </div>
      <div className="xs:mt-[100px] mt-[60px]">
        <div className="flex xs:justify-end">
          <div className="xs:w-[250px] w-full">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Continue"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={handleContinueBtnClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
