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
import { FormStepperContext } from "App/FormStepperProvider";
import { StatusContext } from "App/StatusProvider";

interface FundraiserSignUpSecondStepPropsType {
  handleSubmit: () => void;
  handlePrevPage: () => void;
}
export const SponsorSignUpSecondStep: React.FC<
  FundraiserSignUpSecondStepPropsType
> = ({ handleSubmit, handlePrevPage }) => {
  const { sponsorshipRegisterValue, handleSponsorshipRegisterValue } =
    useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      sponsorshipRegisterValue.password !==
      sponsorshipRegisterValue.confirm_password
    ) {
      showStatus("These passwords do not match. Try again.", "error");
    } else if (
      sponsorshipRegisterValue.password &&
      sponsorshipRegisterValue.password.length < 8
    ) {
      showStatus("Password must be longer than 8 characters", "error");
    } else {
      handleSubmit();
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
                value={sponsorshipRegisterValue.org_name}
                setValue={handleSponsorshipRegisterValue}
                required={true}
                disabled={false}
              />
              <DropdownInput
                data={ContactPhoneNumberData}
                name="org_phone_number"
                phoneCountry="org_pn_country"
                value={sponsorshipRegisterValue.org_phone_number}
                setValue={handleSponsorshipRegisterValue}
                country={sponsorshipRegisterValue.pn_country}
                required={true}
              />
              <div className="flex flex-col gap-[10px]">
                <div className="flex gap-[10px]">
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine1Data}
                      name="org_address1"
                      value={sponsorshipRegisterValue.org_address1}
                      setValue={handleSponsorshipRegisterValue}
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactAddressLine2Data}
                      name="org_address2"
                      value={sponsorshipRegisterValue.org_address2}
                      setValue={handleSponsorshipRegisterValue}
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
                      value={sponsorshipRegisterValue.org_city}
                      setValue={handleSponsorshipRegisterValue}
                      required={true}
                      disabled={false}
                    />
                  </div>
                  <div className="w-1/2">
                    <Input
                      data={ContactPostcodeData}
                      name="org_post_code"
                      value={sponsorshipRegisterValue.org_post_code}
                      setValue={handleSponsorshipRegisterValue}
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
                  value={sponsorshipRegisterValue.org_country}
                  setValue={handleSponsorshipRegisterValue}
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
              value={sponsorshipRegisterValue.email}
              setValue={handleSponsorshipRegisterValue}
              required={true}
              disabled={false}
            />
            <Input
              data={AccountPasswordData}
              name="password"
              value={sponsorshipRegisterValue.password}
              setValue={handleSponsorshipRegisterValue}
              required={true}
              disabled={false}
            />
            <Input
              data={AccountConfirmPasswordData}
              name="confirm_password"
              value={sponsorshipRegisterValue.confirm_password}
              setValue={handleSponsorshipRegisterValue}
              required={true}
              disabled={false}
            />
          </div>
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
                type="submit"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
