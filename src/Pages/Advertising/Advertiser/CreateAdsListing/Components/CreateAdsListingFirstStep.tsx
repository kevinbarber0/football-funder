import React, { useContext } from "react";
import {
  Button,
  DatePicker,
  PageSectionTitle,
  PageTitle,
  RadioButtonList,
  AmountShow,
  StepLabel,
  Textarea,
} from "UI";
import {
  CommencementDateDate,
  EndPeriodDateData,
  IncludingVatData,
  StartPeriodDateData,
} from "Config";
import { StepperActionPropsType } from "types";
import { FormStepperContext } from "App/FormStepperProvider";

export const CreateAdsListingFirstStep: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const { createAdvertisingValue, handleCreateAdvertisingValue } =
    useContext(FormStepperContext);
  const handleClick = () => {
    handleNextPage();
  };
  return (
    <form onSubmit={handleClick}>
      <div className="w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5 ns:mb-[100px] mb-[60px] mx-auto">
        <PageTitle title="Create your listing" />

        <div className="mt-30 ">
          <StepLabel number="Step 4" title="Listing details" />
        </div>
        <div className="mt-30 xs:w-[500px] flex flex-col gap-30">
          <div>
            <PageSectionTitle
              title="Advertising listing title"
              intro="What would you like the title of your listing to be?"
            />
            <div className="mt-15">
              <Textarea
                name="title"
                value={createAdvertisingValue.title}
                setValue={handleCreateAdvertisingValue}
                title="Title"
                limit={150}
                height="h-[124px]"
                titleStyle="text-[10px] leading-[14px] text-gray-10 after:content-['*'] after:ml-1 after:text-green-10"
                showLeftCharacters={true}
                required={true}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle
              title="Amount"
              intro="Place the amount you want for your advertisement."
            />
            <div className="mt-15">
              <AmountShow
                name="amount"
                value={createAdvertisingValue.amount}
                setValue={handleCreateAdvertisingValue}
              />
            </div>
          </div>

          <div className="">
            <PageSectionTitle
              title="VAT"
              intro="Does this price include or exclude VAT?"
            />
            <div className="mt-15">
              <RadioButtonList
                options={IncludingVatData}
                classes="flex flex-col gap-[15px]"
                textStyle="text-base"
                checkboxStyle={false}
                name="vat_fee"
                setValue={handleCreateAdvertisingValue}
                value={createAdvertisingValue.vat_fee}
              />
            </div>
          </div>
          <div>
            <PageSectionTitle
              title="Period of time"
              intro="Please select the time period you want your advertisement to last."
            />
            <div className="mt-15 flex gap-2.5">
              <div className="w-1/2">
                <DatePicker
                  data={StartPeriodDateData}
                  name="sPeriodDate"
                  value={createAdvertisingValue.sPeriodDate}
                  setValue={handleCreateAdvertisingValue}
                  required={true}
                />
              </div>
              <div className="w-1/2">
                <DatePicker
                  data={EndPeriodDateData}
                  name="lPeriodDate"
                  value={createAdvertisingValue.lPeriodDate}
                  setValue={handleCreateAdvertisingValue}
                  required={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle
            title="Commencement date (optional)"
            intro="If you have a date in mind for when the advert will be available, please select below."
          />
          <div className="mt-15 xs:w-[500px]">
            <DatePicker
              data={CommencementDateDate}
              name="commencementDate"
              value={createAdvertisingValue.commencementDate}
              setValue={handleCreateAdvertisingValue}
              required={false}
            />
          </div>
        </div>
        <div className="xs:mt-[100px] mt-[60px]">
          <div className="flex xs:justify-end w-full">
            <div className="xs:w-[250px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Continue"
                textColor="text-green-70"
                textSize="buttonText"
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
