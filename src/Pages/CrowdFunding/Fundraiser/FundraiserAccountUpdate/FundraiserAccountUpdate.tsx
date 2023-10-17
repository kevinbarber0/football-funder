import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  DropdownInput,
  Input,
  PageSectionTitle,
  PageTitle,
  Select,
  StepLabel,
  DatePicker,
  Template,
} from "UI";
import {
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactPhoneNumberData,
  ContactPostcodeData,
  ContactTownData,
  DateData,
  FirstNameData,
  LastNameData,
  RegionData,
} from "Config";
import { CREATEFUNDRAISER_URL } from "Lib/urls";
import { MdAnnouncement } from "react-icons/md";
import { useMutation } from "react-query";
import { registerFormDataType } from "Pages/Auth/SingUp/types";
import { StatusContext } from "App/StatusProvider";
import { useDispatch, useSelector } from "react-redux";
import { useAxios } from "Lib";
import { setUserInfo } from "Data/User";

export const FundraiserAccountUpate: React.FC = () => {
  const { showStatus } = useContext(StatusContext);
  const [fundraiserAccountUpdateValue, setFundraiserAccountUpdateValue] =
    useState<{
      [key: string]: any;
    }>({
      first_name: "",
      last_name: "",
      address_line1: "",
      address_line2: "",
      city: "",
      post_code: "",
      country: "",
      phone_number: "",
      phone_country: ContactPhoneNumberData[0].country,
      profile_url: "",
      birth_date: "",
    });
  const handleFundraiserAccountUpdateValue = (key: string, value: any) => {
    setFundraiserAccountUpdateValue({
      ...fundraiserAccountUpdateValue,
      [key]: value,
    });
  };
  const axios = useAxios();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state.user);

  const data: any = {
    address_line1: fundraiserAccountUpdateValue.address_line1,
    address_line2: fundraiserAccountUpdateValue.address_line2,
    city: fundraiserAccountUpdateValue.city,
    post_code: fundraiserAccountUpdateValue.post_code,
    country: fundraiserAccountUpdateValue.country,
    phone_number: fundraiserAccountUpdateValue.phone_number,
    first_name: fundraiserAccountUpdateValue.first_name,
    last_name: fundraiserAccountUpdateValue.last_name,
  };
  const storeUserInfo = (userInfo: any) => {
    dispatch(setUserInfo(userInfo));
  };
  const { mutate: fundraiserAccountUpdate, isLoading } = useMutation(
    (params: registerFormDataType) =>
      axios.put(`/user/${userInfo.id}/update_account`, params),
    {
      onSuccess: (res) => {
        const data = res.data;
        const userInfo = data.data;
        storeUserInfo(userInfo);
        showStatus("Your account has been succesfully updated!");
        navigate(CREATEFUNDRAISER_URL);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fundraiserAccountUpdate(data);
  };

  return (
    <Template isLoading={isLoading}>
      <form onSubmit={handleClick}>
        <div
          className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[120px] max-ns:mb-[60px] mx-auto"
        >
          <div className="mt-30">
            <PageTitle title="Create your fundraiser" />
          </div>
          <div className="mt-30">
            <StepLabel number="Step 1" title="Your basic information" />
          </div>

          <div className="mt-30">
            <PageSectionTitle
              title="Contact"
              intro="Please provide the details of the legal contact for the fundraiser."
            />
            <div className="mt-[15px] xs:w-[500px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <Input
                    data={FirstNameData}
                    name="first_name"
                    value={fundraiserAccountUpdateValue.first_name}
                    setValue={handleFundraiserAccountUpdateValue}
                    required={true}
                    disabled={false}
                  />
                  <Input
                    data={LastNameData}
                    name="last_name"
                    value={fundraiserAccountUpdateValue.last_name}
                    setValue={handleFundraiserAccountUpdateValue}
                    required={true}
                    disabled={false}
                  />

                  <DatePicker
                    data={DateData}
                    name="birth_date"
                    value={fundraiserAccountUpdateValue.birth_date}
                    setValue={handleFundraiserAccountUpdateValue}
                    required={true}
                  />
                </div>
                <DropdownInput
                  data={ContactPhoneNumberData}
                  name="phone_number"
                  phoneCountry="pn_country"
                  value={fundraiserAccountUpdateValue.phone_number}
                  setValue={handleFundraiserAccountUpdateValue}
                  country={fundraiserAccountUpdateValue.phone_country}
                  required={true}
                />
                <div className="flex flex-col gap-[10px]">
                  <div className="flex gap-[10px]">
                    <div className="w-1/2">
                      <Input
                        data={ContactAddressLine1Data}
                        name="address_line1"
                        value={fundraiserAccountUpdateValue.address_line1}
                        setValue={handleFundraiserAccountUpdateValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <Input
                        data={ContactAddressLine2Data}
                        name="address_line2"
                        value={fundraiserAccountUpdateValue.address_line2}
                        setValue={handleFundraiserAccountUpdateValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                  </div>
                  <div className="flex gap-[10px]">
                    <div className="w-1/2">
                      <Input
                        data={ContactTownData}
                        name="city"
                        value={fundraiserAccountUpdateValue.city}
                        setValue={handleFundraiserAccountUpdateValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <Input
                        data={ContactPostcodeData}
                        name="post_code"
                        value={fundraiserAccountUpdateValue.post_code}
                        setValue={handleFundraiserAccountUpdateValue}
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
                    label="Country (Region)"
                    SelectFormData={RegionData}
                    textSize="generalText"
                    value={fundraiserAccountUpdateValue.country}
                    setValue={handleFundraiserAccountUpdateValue}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[500px] mt-30">
            <div
              className="px-15 xs:py-[15px] py-2 w-full bg-gray-200 rounded-10 
              flex items-center gap-[10px] generalSmallText text-green-80"
            >
              <div className="w-[14px] h-[14px]">
                <MdAnnouncement />
              </div>
              You can modify your fundraiser details at any time after posting.
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
    </Template>
  );
};
