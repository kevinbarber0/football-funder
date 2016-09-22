import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, BuyerCard, DropdownInput, Input, Select, Template } from "UI";
import {
  AccountEmailData,
  AddressData,
  ContactPhoneNumberData,
  FirstNameData,
  LastNameData,
  NameData,
  PostcodeData,
  RegionData,
} from "Config";
import { BUYERCHECKOUT_URL } from "Lib/urls";
import BuyCardImage from "Assets/images/agreement/BuyCardImage.png";
import { BsCheckLg } from "react-icons/bs";
import { FormStepperContext } from "App/FormStepperProvider";

export const BuyerFirstPage: React.FC = () => {
  const navigate = useNavigate();
  const { buyerValue, handleBuyerValue } = useContext(FormStepperContext);
  const [showSignMark, setShowSignMark] = useState<boolean>(false);

  return (
    <Template>
      <form>
        <div className="xs:pt-30 pt-5 xs:pb-[150px] pb-[100px] px-5">
          <div className="lg:w-[1000px] mx-auto w-full">
            <div>
              <div className="stepLabelTitle">Congratulations!</div>
              <div className="mt-5 introText">
                The seller has confirmed they want to work in partnership with
                you, and the asset is yours pending contract signing and payment
                below.
                <br />
                <br /> As the buyer, please fill out your details and then
                select ‘Sign contract’ where you will be able to review and
                sign.
                <br />
                <br /> Once signed, select ‘Proceed to payment’ to finalise the
                deal.
              </div>
            </div>
            <div className="xs:w-[500px]">
              <div>
                <div className="mt-30 stepLabelTitle">Buyer</div>
                <div className="mt-30">
                  <BuyerCard image={BuyCardImage} cost="£3000" />
                </div>
                <div className="mt-30">
                  <div>
                    <div className="buttonText text-green-70">Organisation</div>
                    <div className="mt-5">
                      <Input
                        data={NameData}
                        name="name"
                        value={buyerValue.name}
                        setValue={handleBuyerValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-30">
                  <div>
                    <div className="buttonText text-green-70">
                      Address line 1
                    </div>
                    <div className="mt-5">
                      <div className="flex gap-2.5">
                        <div className="w-1/2">
                          <Input
                            data={PostcodeData}
                            name="post_code1"
                            value={buyerValue.post_code1}
                            setValue={handleBuyerValue}
                            required={true}
                            disabled={false}
                          />
                        </div>
                        <div className="w-1/2">
                          <Input
                            data={AddressData}
                            name="address1"
                            value={buyerValue.address1}
                            setValue={handleBuyerValue}
                            required={true}
                            disabled={false}
                          />
                        </div>
                      </div>
                      <div className="mt-2.5">
                        <Select
                          backgroundColor="bg-white"
                          name="country1"
                          value={buyerValue.country1}
                          setValue={handleBuyerValue}
                          label="Country (Region)"
                          SelectFormData={RegionData}
                          textSize="generalText"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-30">
                  <div>
                    <div className="buttonText text-green-70">
                      Address line 2
                    </div>
                    <div className="mt-5">
                      <div className="flex gap-2.5">
                        <div className="w-1/2">
                          <Input
                            data={PostcodeData}
                            name="post_code2"
                            value={buyerValue.post_code2}
                            setValue={handleBuyerValue}
                            required={true}
                            disabled={false}
                          />
                        </div>
                        <div className="w-1/2">
                          <Input
                            data={AddressData}
                            name="address2"
                            value={buyerValue.address2}
                            setValue={handleBuyerValue}
                            required={true}
                            disabled={false}
                          />
                        </div>
                      </div>
                      <div className="mt-2.5">
                        <Select
                          backgroundColor="bg-white"
                          name="country2"
                          value={buyerValue.country2}
                          setValue={handleBuyerValue}
                          label="Country (Region)"
                          SelectFormData={RegionData}
                          textSize="generalText"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-30">
                  <div>
                    <div className="buttonText text-green-70">
                      Legal contact information
                    </div>
                    <div className="mt-5 flex flex-col gap-2.5">
                      <Input
                        data={FirstNameData}
                        name="first_name"
                        value={buyerValue.first_name}
                        setValue={handleBuyerValue}
                        required={true}
                        disabled={false}
                      />
                      <Input
                        data={LastNameData}
                        name="last_name"
                        value={buyerValue.last_name}
                        setValue={handleBuyerValue}
                        required={true}
                        disabled={false}
                      />
                      <DropdownInput
                        data={ContactPhoneNumberData}
                        name="phone_number"
                        phoneCountry="pn_country"
                        country={ContactPhoneNumberData[0].country}
                        value={buyerValue.phone_number}
                        setValue={handleBuyerValue}
                        required={true}
                      />
                      <Input
                        data={AccountEmailData}
                        name="email"
                        value={buyerValue.email}
                        setValue={handleBuyerValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-30">
                  <div className="stepLabelTitle">Seller</div>
                  <div className="mt-5 p-15 rounded-20 bg-gray-20">
                    <div className="introText">Organisation name</div>
                    <div className="buttonText text-green-70">
                      Coxhoe Athletic FC
                    </div>
                    <div className="mt-15 introText">Address</div>
                    <div className="flex flex-col buttonText text-green-70">
                      <div>Beechfield Park</div>
                      <div>Commercial Road East</div>
                      <div>Durham</div>
                      <div>DH6 4LF</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end xs:mt-[60px] mt-30">
              {!showSignMark && (
                <div className="xs:w-[250px] w-full">
                  <Button
                    backgroundColor="bg-green-10"
                    height="h-[50px]"
                    text="Sign contract"
                    textColor="text-green-70"
                    textSize="buttonText"
                    width="w-full"
                    handleClick={() => setShowSignMark(true)}
                  />
                </div>
              )}
              {showSignMark && (
                <div className="flex xs:flex-row flex-col gap-2.5 w-full justify-end">
                  <div className="xs:w-[250px] w-full">
                    <Button
                      backgroundColor="bg-green-10 bg-opacity-50"
                      height="h-[50px]"
                      text="Signed"
                      textColor="text-green-70"
                      textSize="buttonText"
                      width="w-full"
                      icon={BsCheckLg}
                    />
                  </div>
                  <div className="xs:w-[250px] w-full">
                    <Button
                      backgroundColor="bg-green-10"
                      height="h-[50px]"
                      text="Proceed to payment"
                      textColor="text-green-70"
                      textSize="buttonText"
                      width="w-full"
                      handleClick={() => navigate(BUYERCHECKOUT_URL)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </Template>
  );
};
