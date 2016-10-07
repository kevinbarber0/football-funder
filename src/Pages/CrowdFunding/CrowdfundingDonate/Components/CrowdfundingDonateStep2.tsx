import React, { useState, useContext } from "react";
import {
  AmountShow,
  Button,
  PageSectionTitle,
  PageTitle,
  RangeSlider,
  StepperBackButton,
  VerticalCardLabel,
  StepLabel,
} from "UI";
import { DonateClubLabel, DonateLocationLabel } from "Config";
import { StepperActionPropsType } from "types";
import { FormStepperContext } from "App/FormStepperProvider";

export const CrowdfundingDonateStep2: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const [showRange, setShowRange] = useState<boolean>(true);
  const { donateValue, handleDonateValue } = useContext(FormStepperContext);
  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
    >
      <div className="mt-30">
        <PageTitle title="Donate to this fundraiser" />
      </div>
      <div className="mt-6">
        <StepperBackButton handleBackPage={handlePrevPage} />
      </div>
      <div className="mt-9">
        <PageSectionTitle title="Running a crowdfunding campaign for my football club" />
        <div className="mt-2.5">
          <div className="flex flex-row max-vs:flex-col gap-2.5">
            <VerticalCardLabel cardLabelData={DonateClubLabel} />
            <VerticalCardLabel cardLabelData={DonateLocationLabel} />
          </div>
        </div>
      </div>
      <div className="mt-30">
        <StepLabel number="Step 2" title="Donation amount" />
      </div>
      <div className="xs:w-[500px]">
        <div className="mt-30 ">
          <PageSectionTitle
            title="Your donation"
            intro="Please enter the amount you would like to donate to this fundraiser"
          />
          <div className="mt-15">
            <AmountShow
              name="donation_amount"
              value={donateValue.donation_amount}
              setValue={handleDonateValue}
            />
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle
            title="Additional contribution"
            intro="
            To carry out the great work our team does to promote crowdfunding initiatives in football, 
            we rely on additional donations to put back into our business. 
            Please consider a small donation to help us out."
          />
          {
            <>
              {showRange && (
                <div className="mt-[70px]">
                  <RangeSlider minValue={0} maxValue={30} />
                  <div className="mt-5">
                    <button
                      className="text-xs underline underline-offset-1"
                      onClick={() => {
                        setShowRange(false);
                      }}
                    >
                      Custom amount
                    </button>
                  </div>
                </div>
              )}
              {!showRange && (
                <div className="mt-5">
                  <div className="flex items-center gap-2.5">
                    <PageSectionTitle title="Custom amount" />
                    <button
                      className="text-xs underline underline-offset-1"
                      onClick={() => {
                        setShowRange(true);
                      }}
                    >
                      Back to default
                    </button>
                  </div>
                  <div className="mt-2.5 xs:w-[390px]">
                    <AmountShow
                      name="amount"
                      value={donateValue.amount}
                      setValue={handleDonateValue}
                    />
                  </div>
                </div>
              )}
            </>
          }
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Total to pay" />
          <div className="mt-15 rounded-10 bg-gray-20 p-15">
            <div className="introText">Donation amount</div>
            <div className="mt-[5px] buttonText text-green-70">￡46.00</div>
          </div>
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
              handleClick={handleNextPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
