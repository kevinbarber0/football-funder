import React, { useState, useContext } from "react";
import {
  Button,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepperBackButton,
  StepLabel,
  ConfirmBox,
} from "UI";
import {
  AccountEmailData,
  AccountPasswordData,
  AccountConfirmPasswordData,
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactOrganisationData,
  ContactPhoneNumberData,
  ContactPostcodeData,
  ContactTownData,
  RegionData,
} from "Config";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";

interface FundraiserSignUpSecondStepPropsType {
  handleSubmit: () => void;
  handlePrevPage: () => void;
}

export const FundraiserSignUpSecondStep: React.FC<
  FundraiserSignUpSecondStepPropsType
> = ({ handleSubmit, handlePrevPage }) => {
  const { handleFundraiserRegisterValue, fundraierRegisterValue } =
    useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);
  const [confirm, setConfirm] = useState<{ [key: string]: any }>({
    confirm: false,
  });
  const handleConfirm = (key: string, value: boolean) => {
    setConfirm({
      [key]: !value,
    });
  };

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      fundraierRegisterValue.password !==
      fundraierRegisterValue.confirm_password
    ) {
      showStatus("These passwords do not match. Try again.", "error");
    } else if (
      fundraierRegisterValue.password &&
      fundraierRegisterValue.password.length < 8
    ) {
      showStatus("Password must be longer than 8 characters", "error");
    } else {
      if (!confirm.confirm) {
        showStatus(
          "You must confirm Football Funder’s Terms & Conditions and Fraud Policy",
          "error"
        );
      } else {
        handleSubmit();
      }
    }
  };

  return (
    <form onSubmit={handleClick}>
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[120px] max-ns:mb-[60px] mx-auto"
      >
        <div className="mt-30">
          <PageTitle title="Create your listing" />
        </div>
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 2" title="Organisation information" />
        </div>

        <div className="mt-30">
          <PageSectionTitle
            title="Contact"
            intro="Please provide the details of the organisation that you are listing advertising opportunities for."
          />
          <div className="mt-[15px] xs:w-[500px]">
            <div className="flex flex-col gap-[10px]">
              <Input
                data={ContactOrganisationData}
                name="org_name"
                value={fundraierRegisterValue.org_name}
                setValue={handleFundraiserRegisterValue}
                required={true}
                disabled={false}
              />

              <DropdownInput
                data={ContactPhoneNumberData}
                name="org_phone_number"
                phoneCountry="org_pn_country"
                value={fundraierRegisterValue.org_phone_number}
                setValue={handleFundraiserRegisterValue}
                country={fundraierRegisterValue.org_pn_country}
                required={true}
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine1Data}
                      name="org_address1"
                      value={fundraierRegisterValue.org_address1}
                      setValue={handleFundraiserRegisterValue}
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine2Data}
                      name="org_address2"
                      value={fundraierRegisterValue.org_address2}
                      setValue={handleFundraiserRegisterValue}
                      required={true}
                      disabled={false}
                    />
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactTownData}
                      name="org_city"
                      value={fundraierRegisterValue.org_city}
                      setValue={handleFundraiserRegisterValue}
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactPostcodeData}
                      name="org_post_code"
                      value={fundraierRegisterValue.org_post_code}
                      setValue={handleFundraiserRegisterValue}
                      required={true}
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
              <div>
                <Select
                  backgroundColor="bg-white"
                  name="org_country"
                  label="Country (Region)"
                  SelectFormData={RegionData}
                  textSize="generalText"
                  value={fundraierRegisterValue.org_country}
                  setValue={handleFundraiserRegisterValue}
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
              value={fundraierRegisterValue.email}
              setValue={handleFundraiserRegisterValue}
              required={true}
              disabled={false}
            />
            <Input
              data={AccountPasswordData}
              name="password"
              value={fundraierRegisterValue.password}
              setValue={handleFundraiserRegisterValue}
              required={true}
              disabled={false}
            />
            <Input
              data={AccountConfirmPasswordData}
              name="confirm_password"
              value={fundraierRegisterValue.confirm_password}
              setValue={handleFundraiserRegisterValue}
              required={true}
              disabled={false}
            />
          </div>
        </div>

        <div className="mt-30">
          <PageSectionTitle title="Confirmation" />
          <div className="mt-[15px]">
            {/* <CheckBox
              align="flex-row-reverse gap-[10px]"
              name="confirm"
              label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
              value={1}
              textClass="generalSmallText text-gray-500"
            /> */}
          </div>
          <ConfirmBox
            name="confirm"
            label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
            checkboxStyle={true}
            value={confirm.confirm}
            setValue={handleConfirm}
          />
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
