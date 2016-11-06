import React, { useState } from "react";
import { SignUpButton } from "Pages";
import { Select, Input } from "UI";
import {
  FirstNameData,
  LastNameData,
  ContactOrganisationData,
  AccountEmailData,
  PhoneNumberData,
  SignUpSelectFormData,
  WebSiteData,
} from "Config";

export const LandingSignUpForm: React.FC = () => {
  const [value, setValue] = useState<{ [key: string]: any }>({});
  const handleValue = (key: string, value: any) => {
    setValue({
      ...value,
      [key]: value,
    });
  };

  return (
    <form>
      <div className="mt-[18px]">
        <div className="text-base font-normal text-center text-green-10">
          Sign up for early access
        </div>
        <div
          className="
                mt-[15px] mx-auto
                w-[390px] md:w-[527px] max-ns:w-full max-ns:px-5
              "
        >
          <Select
            backgroundColor="bg-white"
            name="category"
            value={value.category}
            setValue={handleValue}
            label="Select your category"
            SelectFormData={SignUpSelectFormData}
            textSize="generalText"
          />

          <div className="mt-30 ">
            {value.category === "organisation" && (
              <div>
                <div className="text-white text-sm text-center">
                  Please fill the requested information below
                </div>
                <div className="mt-[15px]">
                  <div className="flex flex-col gap-y-[10px]">
                    <Input
                      data={FirstNameData}
                      name="first_name"
                      value={value.first_name}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={LastNameData}
                      name="last_name"
                      value={value.last_name}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={ContactOrganisationData}
                      name="org_name"
                      value={value.org_name}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={AccountEmailData}
                      name="email"
                      value={value.email}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={PhoneNumberData}
                      name="phone_number"
                      value={value.phone_number}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={WebSiteData}
                      name="website_url"
                      value={value.website_url}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                  </div>

                  <div className="mt-30">
                    <SignUpButton />
                  </div>
                </div>
              </div>
            )}
            {value.category === "individual" && (
              <div>
                <div className="text-white text-sm text-center">
                  Please fill the requested information below
                </div>
                <div className="mt-[15px]">
                  <div className="flex flex-col gap-y-[10px]">
                    <Input
                      data={FirstNameData}
                      name="first_name"
                      value={value.first_name}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={LastNameData}
                      name="last_name"
                      value={value.last_name}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={AccountEmailData}
                      name="email"
                      value={value.email}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                    <Input
                      data={PhoneNumberData}
                      name="phone_number"
                      value={value.phone_number}
                      setValue={handleValue}
                      required={true}
                      disabled={false}
                    />
                  </div>

                  <div className="mt-30">
                    <SignUpButton />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
