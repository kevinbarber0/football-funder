import React, { useState, useContext } from "react";
import {
  Button,
  // CheckBox,
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
// import { MdAnnouncement } from "react-icons/md";
import { StatusContext } from "App/StatusProvider";
import { useAxios } from "Lib";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { registerFormDataType } from "Pages/Auth/SingUp/types";
import { CREATESPONSORSHIP_URL } from "Lib/urls";
import { MdAnnouncement } from "react-icons/md";
import { setUserInfo } from "Data/User";

export const SponsorshipAccountUpdate: React.FC = () => {
  const { showStatus } = useContext(StatusContext);
  const [sponsorshipAccountUpdateValue, setSponsorshipAccountUpdateValue] =
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
      birth_date: "",
    });
  const handleSponsorshipAccountUpdateValue = (key: string, value: any) => {
    setSponsorshipAccountUpdateValue({
      ...sponsorshipAccountUpdateValue,
      [key]: value,
    });
  };
  const [confirm, setConfirm] = useState<{ [key: string]: any }>({
    confirm: false,
  });
  const handleConfirm = (key: string, value: any) => {
    setConfirm({
      [key]: !value,
    });
  };
  const axios = useAxios();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: any) => state.user);

  const data: any = {
    address_line1: sponsorshipAccountUpdateValue.address_line1,
    address_line2: sponsorshipAccountUpdateValue.address_line2,
    city: sponsorshipAccountUpdateValue.city,
    post_code: sponsorshipAccountUpdateValue.post_code,
    country: sponsorshipAccountUpdateValue.country,
    phone_number: sponsorshipAccountUpdateValue.phone_number,
    first_name: sponsorshipAccountUpdateValue.first_name,
    last_name: sponsorshipAccountUpdateValue.last_name,
  };
  const storeUserInfo = (userInfo: any) => {
    dispatch(setUserInfo(userInfo));
  };
  const { mutate: sponsorshipAccountUpdate, isLoading } = useMutation(
    (params: registerFormDataType) =>
      axios.put(`/user/${userInfo.id}/update_account`, params),
    {
      onSuccess: (res) => {
        const data = res.data;
        const userInfo = data.data;
        storeUserInfo(userInfo);
        showStatus("Your account has been succesfully updated!");
        navigate(CREATESPONSORSHIP_URL);
      },
      onError: (err: any) => {
        console.log(err);
      },
    }
  );

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!confirm.confirm) {
      showStatus(
        "You must confirm Football Funder’s Terms & Conditions and Fraud Policy",
        "error"
      );
    } else {
      console.log("123123123", data);
      sponsorshipAccountUpdate(data);
    }
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
            <PageTitle title="Your basic information" />
          </div>
          <div className="mt-30">
            <StepLabel number="Step 3" title="Your basic information" />
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
                    value={sponsorshipAccountUpdateValue.first_name}
                    setValue={handleSponsorshipAccountUpdateValue}
                    required={true}
                    disabled={false}
                  />
                  <Input
                    data={LastNameData}
                    name="last_name"
                    value={sponsorshipAccountUpdateValue.last_name}
                    setValue={handleSponsorshipAccountUpdateValue}
                    required={true}
                    disabled={false}
                  />
                  <DatePicker
                    data={DateData}
                    name="birth_date"
                    value={sponsorshipAccountUpdateValue.birth_date}
                    setValue={handleSponsorshipAccountUpdateValue}
                    required={true}
                  />
                </div>
                <DropdownInput
                  data={ContactPhoneNumberData}
                  name="phone_number"
                  phoneCountry="pn_country"
                  value={sponsorshipAccountUpdateValue.phone_number}
                  setValue={handleSponsorshipAccountUpdateValue}
                  country={sponsorshipAccountUpdateValue.phone_country}
                  required={true}
                />
                <div className="flex flex-col gap-[10px]">
                  <div className="flex gap-[10px]">
                    <div className="w-1/2">
                      <Input
                        data={ContactAddressLine1Data}
                        name="address_line1"
                        value={sponsorshipAccountUpdateValue.address_line1}
                        setValue={handleSponsorshipAccountUpdateValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <Input
                        data={ContactAddressLine2Data}
                        name="address_line2"
                        value={sponsorshipAccountUpdateValue.address_line2}
                        setValue={handleSponsorshipAccountUpdateValue}
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
                        value={sponsorshipAccountUpdateValue.city}
                        setValue={handleSponsorshipAccountUpdateValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <Input
                        data={ContactPostcodeData}
                        name="post_code"
                        value={sponsorshipAccountUpdateValue.post_code}
                        setValue={handleSponsorshipAccountUpdateValue}
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
                    value={sponsorshipAccountUpdateValue.country}
                    setValue={handleSponsorshipAccountUpdateValue}
                  />
                </div>
              </div>
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
