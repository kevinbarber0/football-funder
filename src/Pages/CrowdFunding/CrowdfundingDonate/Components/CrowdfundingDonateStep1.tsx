import React, { useState, useContext } from "react";
import {
  Button,
  DatePicker,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  VerticalCardLabel,
  StepLabel,
  ConfirmBox,
} from "UI";
import {
  AccountEmailData,
  AccountPasswordData,
  AccountConfirmPasswordData,
  AddressData,
  ContactPhoneNumberData,
  ContactPostcodeData,
  DateData,
  DonateClubLabel,
  DonateLocationLabel,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";
import { StepperActionPropsType } from "types";
import { FormStepperContext } from "App/FormStepperProvider";

export const CrowdfundingDonateStep1: React.FC<StepperActionPropsType> = ({
  handleNextPage,
}) => {
  const { donateValue, handleDonateValue } = useContext(FormStepperContext);
  const [confirm, setConfirm] = useState<{ [key: string]: any }>({
    confirm: false,
    sign: false,
  });
  const handleConfirm = (key: string, value: any) => {
    setConfirm({
      [key]: !value,
    });
  };
  return (
    <form>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[150px] max-ns:mb-[100px] mx-auto"
      >
        <div className="mt-30">
          <PageTitle title="Donate to this fundraiser" />
        </div>
        <div className="mt-6">{/* <StepperBackButton /> */}</div>
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
          <StepLabel number="Step 1" title="Create your account" />
        </div>
        <div className="mt-30">
          <PageSectionTitle
            title="Personal information"
            intro="Please provide your personal details in order to create you an account and donate."
          />
          <div className="mt-[15px] xs:w-[500px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[10px]">
                <Input
                  data={FirstNameData}
                  name="first_name"
                  value={donateValue.first_name}
                  setValue={handleDonateValue}
                  required={true}
                  disabled={false}
                />
                <Input
                  data={LastNameData}
                  name="last_name"
                  value={donateValue.last_name}
                  setValue={handleDonateValue}
                  required={true}
                  disabled={false}
                />

                <DatePicker
                  data={DateData}
                  name="birth_date"
                  value={donateValue.birth_date}
                  setValue={handleDonateValue}
                  required={true}
                />
              </div>
              <DropdownInput
                data={ContactPhoneNumberData}
                name="phone_number"
                phoneCountry="pn_country"
                country={ContactPhoneNumberData[0].country}
                value={donateValue.phone_number}
                setValue={handleDonateValue}
                required={true}
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactPostcodeData}
                      name="post_code"
                      value={donateValue.post_code}
                      setValue={handleDonateValue}
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={AddressData}
                      name="address"
                      value={donateValue.address}
                      setValue={handleDonateValue}
                      required={true}
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Select
                  backgroundColor="bg-white"
                  name="country"
                  value={donateValue.country}
                  setValue={handleDonateValue}
                  label="Country (Region)"
                  SelectFormData={RegionData}
                  textSize="generalText"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-30 xs:w-[500px]">
          <PageSectionTitle title="Account details" />
          <div className="mt-5 flex flex-col gap-[10px]">
            <Input
              data={AccountEmailData}
              name="email"
              value={donateValue.email}
              setValue={handleDonateValue}
              required={true}
              disabled={false}
            />
            <Input
              data={AccountPasswordData}
              name="password"
              value={donateValue.password}
              setValue={donateValue.password}
              required={true}
              disabled={false}
            />
            <Input
              data={AccountConfirmPasswordData}
              name="confirm_password"
              value={donateValue.confirm_password}
              setValue={handleDonateValue}
              required={true}
              disabled={false}
            />
          </div>
        </div>
        <div className="mt-30">
          <PageSectionTitle title="Confirmation" />
          <div className="mt-[15px]">
            <ConfirmBox
              name="confirm"
              label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
              checkboxStyle={true}
              value={confirm.confirm}
              setValue={handleConfirm}
            />
            <ConfirmBox
              name="sign"
              label="I would like to sign up to receive newsletters from Football Funder. See Privacy Policy."
              checkboxStyle={true}
              value={confirm.sign}
              setValue={handleConfirm}
            />
          </div>
        </div>
        <div className="xs:mt-[60px] mt-30">
          <div className="flex xs:justify-end max-xs:flex-col gap-2.5">
            <div className="xs:w-[250px]">
              <Button
                backgroundColor="bg-white"
                height="h-[50px]"
                width="w-full"
                border="border border-[1px] border-green-70"
                text="I already have an account"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
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
