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
  SaleClubLabel,
  SaleLocationLabel,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";
import { LivePagePropsType } from "types";
import { FormStepperContext } from "App/FormStepperProvider";

export const AdvertisingSaleStep1: React.FC<LivePagePropsType> = ({
  handleNextPage,
}) => {
  const { adsSaleValue, handleAdsSaleValue } = useContext(FormStepperContext);
  const [confirm, setConfirm] = useState<{ [key: string]: any }>({});
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
          <PageTitle title="Pitchside advertising board 1220x610cm" />
        </div>
        <div className="mt-9">
          <PageSectionTitle title="Advertising enquiry" />
          <div className="mt-2.5">
            <div className="flex flex-row max-vs:flex-col gap-2.5">
              <VerticalCardLabel cardLabelData={SaleClubLabel} />
              <VerticalCardLabel cardLabelData={SaleLocationLabel} />
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
                  value={adsSaleValue.first_name}
                  setValue={handleAdsSaleValue}
                  required={true}
                  disabled={false}
                />
                <Input
                  data={LastNameData}
                  name="last_name"
                  value={adsSaleValue.last_name}
                  setValue={handleAdsSaleValue}
                  required={true}
                  disabled={false}
                />

                <DatePicker
                  data={DateData}
                  name="birth_date"
                  value={adsSaleValue.birth_date}
                  setValue={handleAdsSaleValue}
                  required={true}
                />
              </div>
              <DropdownInput
                data={ContactPhoneNumberData}
                name="phone_number"
                phoneCountry="pn_country"
                country={ContactPhoneNumberData[0].country}
                value={adsSaleValue.phone_number}
                setValue={handleAdsSaleValue}
                required={true}
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactPostcodeData}
                      name="post_code"
                      value={adsSaleValue.post_code}
                      setValue={handleAdsSaleValue}
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={AddressData}
                      name="address"
                      value={adsSaleValue.address}
                      setValue={handleAdsSaleValue}
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
                  value={adsSaleValue.country}
                  setValue={handleAdsSaleValue}
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
              value={adsSaleValue.email}
              setValue={handleAdsSaleValue}
              required={true}
              disabled={false}
            />
            <Input
              data={AccountPasswordData}
              name="password"
              value={adsSaleValue.password}
              setValue={handleAdsSaleValue}
              required={true}
              disabled={false}
            />
            <Input
              data={AccountConfirmPasswordData}
              name="confirm_password"
              value={adsSaleValue.confirm_password}
              setValue={handleAdsSaleValue}
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
