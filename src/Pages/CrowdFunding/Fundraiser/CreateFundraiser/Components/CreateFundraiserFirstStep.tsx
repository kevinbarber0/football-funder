import React, { useContext } from "react";
import {
  Button,
  PageSectionTitle,
  PageTitle,
  AmountShow,
  StepLabel,
  Textarea,
} from "UI";
import { StepperActionPropsType } from "types";
import { FormStepperContext } from "App/FormStepperProvider";

export const CreateFundraiserFirstStep: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const { createFundraiserValue, handleCreateFundraiserValue } =
    useContext(FormStepperContext);
  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleNextPage();
  };
  return (
    <form onSubmit={handleClick}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] max-ns:mb-[60px] mx-auto"
      >
        <div>
          <PageTitle title="Create your fundraiser" />
          <div className="mt-30">
            <StepLabel number="Step 1" title="Fundraiser details" />
          </div>
          <div className="mt-30">
            <PageSectionTitle
              title="Fundraiser title"
              intro="What is the title of your fundraiser?"
            />
            <div className="mt-15">
              <div className="xs:w-[500px]">
                <Textarea
                  name="title"
                  title="Title"
                  value={createFundraiserValue.title}
                  setValue={handleCreateFundraiserValue}
                  titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                  limit={150}
                  height="h-[124px]"
                  showLeftCharacters={true}
                  required={true}
                />
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle
                title="Fundraiser tagline"
                intro="Describe what your fundraiser is aiming to achieve in a sentence or two. 
              This description will sit below the fundraiser title."
              />
            </div>
            <div className="mt-[15px] xs:w-[500px]">
              <Textarea
                name="description"
                title="Short description"
                value={createFundraiserValue.description}
                setValue={handleCreateFundraiserValue}
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                limit={300}
                height="h-[150px]"
                showLeftCharacters={true}
                required={true}
              />
            </div>
            <div className="mt-30">
              <PageSectionTitle
                title="Fundraiser amount"
                intro="The final amount you wish to raise, after fees are deducted."
              />
            </div>
            <div className="mt-[10px]">
              <div className="text-xs text-gray-500">
                <span>
                  We take a platform fee for each donation - this pays for all
                  admin and promotion of your fundraising campaign.
                </span>
                <span className="ml-1 text-green-70 underline">See fees</span>
              </div>
            </div>
            <div className="mt-[10px] xs:w-[500px]">
              <AmountShow
                name="amount"
                value={createFundraiserValue.amount}
                setValue={handleCreateFundraiserValue}
              />
            </div>
          </div>
        </div>
        <div className="xs:mt-[100px] mt-[60px]">
          <div className="flex xs:justify-end">
            <div className="xs:w-[250px] w-full">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
