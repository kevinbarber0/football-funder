import React, { useState, useContext } from "react";
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
  ConfirmBox,
} from "UI";
import {
  AccountEmailData,
  AccountPasswordData,
  AccountConfirmPasswordData,
  ContactAddressLine1Data,
  ContactAddressLine2Data,
  ContactPhoneNumberData,
  ContactPostcodeData,
  ContactTownData,
  DateData,
  FirstNameData,
  LastNameData,
  ProfileURLData,
  RegionData,
} from "Config";
import { MdAnnouncement } from "react-icons/md";
import { StatusContext } from "App/StatusProvider";
import { useAxios } from "Lib";
import { CREATEADVERTISING_URL } from "Lib/urls";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { registerFormDataType } from "Pages/Auth/SingUp/types";
import { setUserInfo } from "Data/User";

export const AdvertisingAccountUpdate: React.FC = () => {
  const [advertiserAccountUpdateValue, setAdvertiserAccountUpdateValue] =
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
  const handleAdvertiserAccountUpdateValue = (key: string, value: any) => {
    setAdvertiserAccountUpdateValue({
      ...advertiserAccountUpdateValue,
      [key]: value,
    });
  };
  const [confirm, setConfirm] = useState<{
    [key: string]: boolean;
  }>({
    confirm: false,
  });
  const handleConfirm = (key: string, value: boolean) => {
    setConfirm({
      ...confirm,
      [key]: !value,
    });
  };
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state.user);
  const axios = useAxios();
  const navigate = useNavigate();

  const { showStatus } = useContext(StatusContext);

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!confirm.confirm) {
      showStatus(
        "You must confirm Football Funder’s Terms & Conditions and Fraud Policy",
        "error"
      );
    } else {
      advertiserAccountUpdate(data);
    }
  };

  const data: any = {
    address_line1: advertiserAccountUpdateValue.address_line1,
    address_line2: advertiserAccountUpdateValue.address_line2,
    city: advertiserAccountUpdateValue.city,
    post_code: advertiserAccountUpdateValue.post_code,
    country: advertiserAccountUpdateValue.country,
    phone_number: advertiserAccountUpdateValue.phone_number,
    first_name: advertiserAccountUpdateValue.first_name,
    last_name: advertiserAccountUpdateValue.last_name,
  };
  const storeUserInfo = (userInfo: any) => {
    dispatch(setUserInfo(userInfo));
  };
  const { mutate: advertiserAccountUpdate, isLoading } = useMutation(
    (params: registerFormDataType) =>
      axios.put(`/user/${userInfo.id}/update_account`, params),
    {
      onSuccess: (res) => {
        showStatus("Your account has been succesfully updated!");
        const data = res.data;
        const userInfo = data.data;
        storeUserInfo(userInfo);
        navigate(CREATEADVERTISING_URL);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  return (
    <Template isLoading={isLoading}>
      <form onSubmit={handleClick}>
        <div
          className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
        mb-[120px] max-ns:mb-[60px] mx-auto"
        >
          <div className="mt-30">
            <PageTitle title="Create your listing" />
          </div>

          <div className="mt-30">
            <StepLabel number="Step 2" title="Your basic information" />
          </div>

          <div className="mt-30">
            <PageSectionTitle
              title="Contact"
              intro="Please provide the details of the commercial contact for the advertising."
            />
            <div className="mt-[15px] xs:w-[500px]">
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <Input
                    data={FirstNameData}
                    name="first_name"
                    value={advertiserAccountUpdateValue.first_name}
                    setValue={handleAdvertiserAccountUpdateValue}
                    required={true}
                    disabled={false}
                  />
                  <Input
                    data={LastNameData}
                    name="last_name"
                    value={advertiserAccountUpdateValue.last_name}
                    setValue={handleAdvertiserAccountUpdateValue}
                    required={true}
                    disabled={false}
                  />
                  <DatePicker
                    data={DateData}
                    name="birth_date"
                    value={advertiserAccountUpdateValue.birth_date}
                    setValue={handleAdvertiserAccountUpdateValue}
                    required={true}
                  />
                </div>
                <DropdownInput
                  data={ContactPhoneNumberData}
                  name="phone_number"
                  phoneCountry="pn_country"
                  country={ContactPhoneNumberData[0].country}
                  setValue={handleAdvertiserAccountUpdateValue}
                  value={advertiserAccountUpdateValue.phone_country}
                  required={true}
                />
                <div className="flex flex-col gap-[10px]">
                  <div className="flex gap-[10px]">
                    <div className="w-1/2">
                      <Input
                        data={ContactAddressLine1Data}
                        name="address_line1"
                        value={advertiserAccountUpdateValue.address_line1}
                        setValue={handleAdvertiserAccountUpdateValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <Input
                        data={ContactAddressLine2Data}
                        name="address_line2"
                        value={advertiserAccountUpdateValue.address_line2}
                        setValue={handleAdvertiserAccountUpdateValue}
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
                        value={advertiserAccountUpdateValue.city}
                        setValue={handleAdvertiserAccountUpdateValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <Input
                        data={ContactPostcodeData}
                        name="post_code"
                        value={advertiserAccountUpdateValue.post_code}
                        setValue={handleAdvertiserAccountUpdateValue}
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
                    value={advertiserAccountUpdateValue.country}
                    setValue={handleAdvertiserAccountUpdateValue}
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
                value={advertiserAccountUpdateValue.email}
                setValue={handleAdvertiserAccountUpdateValue}
                required={true}
                disabled={false}
              />
              <Input
                data={AccountPasswordData}
                name="password"
                value={advertiserAccountUpdateValue.password}
                setValue={handleAdvertiserAccountUpdateValue}
                required={true}
                disabled={false}
              />
              <Input
                data={AccountConfirmPasswordData}
                name="confirm_password"
                value={advertiserAccountUpdateValue.confirm_password}
                setValue={handleAdvertiserAccountUpdateValue}
                required={true}
                disabled={false}
              />
            </div>
          </div>
          <div className="mt-30 md:w-[630px]">
            <PageSectionTitle
              title="Profile URL"
              intro="Each club and organisation signed up to Football Funder is given their own profile page to share their fundraisers and advertising or sponsorship listings from one place. "
            />
            <div className="mt-7 introText">
              Enter your preferred subdomain name below:
            </div>
            <div className="mt-[35px] xs:w-[500px]">
              <Input
                data={ProfileURLData}
                name="profile_url"
                value={advertiserAccountUpdateValue.profile_url}
                setValue={handleAdvertiserAccountUpdateValue}
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
    </Template>
  );
};
