import React, { useContext } from "react";
import {
  Button,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepperBackButton,
  StepLabel,
} from "UI";
import {
  ContactPhoneNumberData,
  AddressData,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";
import { StepperActionPropsType } from "types";
import { FormStepperContext } from "App/FormStepperProvider";

export const BillingDetailsPage: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const { checkoutValue, handleCheckoutValue } = useContext(FormStepperContext);

  return (
    <form>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] mx-auto"
      >
        <PageTitle title="Checkout" />
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 2" title="Billing details" />

          <div className="mt-30 xs:w-[500px]">
            <PageSectionTitle title="Details" />
            <div className="mt-15 flex flex-col gap-2.5">
              <Input
                data={FirstNameData}
                name="first_name"
                value={checkoutValue.first_name}
                setValue={handleCheckoutValue}
                required={true}
                disabled={false}
              />
              <Input
                data={LastNameData}
                name="last_name"
                value={checkoutValue.last_name}
                setValue={handleCheckoutValue}
                required={true}
                disabled={false}
              />
              <DropdownInput
                data={ContactPhoneNumberData}
                name="phone_number"
                phoneCountry="pn_country"
                country={ContactPhoneNumberData[0].country}
                value={checkoutValue.phone_number}
                setValue={handleCheckoutValue}
                required={true}
              />
              <Input
                data={AddressData}
                name="address"
                value={checkoutValue.address}
                setValue={handleCheckoutValue}
                required={true}
                disabled={false}
              />
              <Select
                backgroundColor="bg-white"
                name="country"
                value={checkoutValue.country}
                setValue={handleCheckoutValue}
                label="Country (Region)"
                SelectFormData={RegionData}
                textSize="generalText"
              />
            </div>
          </div>
        </div>
        <div className="xs:mt-[200px] mt-30">
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
    </form>
  );
};
