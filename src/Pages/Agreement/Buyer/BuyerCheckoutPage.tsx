import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  BuyerCard,
  Input,
  PageSectionTitle,
  PageTitle,
  RadioButtonList,
  StepperBackButton,
  StepLabel,
  Template,
} from "UI";
import {
  CardNumberData,
  ExpiryData,
  CvcData,
  PostcodeData,
  PaymentMethodData,
} from "Config";
import { BUYERFIRSTPAGE_URL, BUYERFINAL_URL } from "Lib/urls";
import { MdAnnouncement } from "react-icons/md";
import PayCardA from "Assets/images/checkout/paycard-a.png";
import PayCardB from "Assets/images/checkout/paycard-b.png";
import PayCardC from "Assets/images/checkout/paycard-c.png";
import PayCardD from "Assets/images/checkout/paycard-d.png";
import PayCardE from "Assets/images/checkout/paycard-e.png";
import BuyCardImage from "Assets/images/agreement/BuyCardImage.png";
import { FormStepperContext } from "App/FormStepperProvider";

export const BuyerCheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { buyerValue, handleBuyerValue } = useContext(FormStepperContext);
  return (
    <Template>
      <form>
        <div className="xs:pt-30 pt-5 xs:pb-[150px] pb-[100px] px-5">
          <div className="lg:w-[1000px] mx-auto w-full">
            <PageTitle title="Checkout" />
            <div className="mt-5">
              <StepperBackButton
                handleBackPage={() => navigate(BUYERFIRSTPAGE_URL)}
              />
            </div>
            <div className="mt-30">
              <StepLabel number="Step 1" title="Payment details" />
            </div>
            <div className="mt-30 xs:w-[500px]">
              <BuyerCard image={BuyCardImage} cost="£3000" />
              <div className="mt-30">
                <PageSectionTitle title="Total to pay" />
                <div className="mt-15">
                  <div className="rounded-10 border-[1px] border-gray-200 bg-gray-100 p-15 flex justify-between">
                    <div className="introText">Amount</div>
                    <div className="valueText">£3000</div>
                  </div>
                </div>
              </div>
              <div className="mt-30 flex gap-2.5">
                <button>
                  <img src={PayCardA} alt="paycarda" />
                </button>
                <button>
                  <img src={PayCardB} alt="paycardb" />
                </button>
                <button>
                  <img src={PayCardC} alt="paycardc" />
                </button>
                <button>
                  <img src={PayCardD} alt="paycardd" />
                </button>
                <button>
                  <img src={PayCardE} alt="paycarde" />
                </button>
              </div>
              <div className="mt-30">
                <PageSectionTitle title="Payment method" />
                <div className="mt-15">
                  <RadioButtonList
                    options={PaymentMethodData}
                    classes="flex gap-[15px]"
                    textStyle="text-base"
                    checkboxStyle={false}
                    name="payment_method"
                    value={buyerValue.payment_method}
                    setValue={handleBuyerValue}
                  />
                </div>
              </div>
              <div className="mt-30">
                <PageSectionTitle title="Card details" />
                <div className="mt-15 flex flex-col gap-2.5">
                  <Input
                    data={CardNumberData}
                    name="card_number"
                    value={buyerValue.card_number}
                    setValue={handleBuyerValue}
                    required={true}
                    disabled={false}
                  />
                  <div className="flex gap-[10px]">
                    <div className="w-1/2">
                      <Input
                        data={ExpiryData}
                        name="expiry"
                        value={buyerValue.expiry}
                        setValue={handleBuyerValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                    <div className="w-1/2">
                      <Input
                        data={CvcData}
                        name="cvc"
                        value={buyerValue.cvc}
                        setValue={handleBuyerValue}
                        required={true}
                        disabled={false}
                      />
                    </div>
                  </div>
                  <Input
                    data={PostcodeData}
                    name="post_code"
                    value={buyerValue.post_code}
                    setValue={handleBuyerValue}
                    required={true}
                    disabled={false}
                  />
                  <div className="mt-5">
                    <button className="w-full border-[1px] rounded-10 buttonText text-green-70 border-green-70 py-15">
                      Save as payment method
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-30 flex sm:flex-row max-sm:justify-center  flex-col justify-end gap-2.5">
              <div
                className="p-15 bg-gray-200 rounded-10 flex items-center gap-[10px] 
             "
              >
                <div className="w-[16px] h-[16px]">
                  <MdAnnouncement />
                </div>
                <div className=" generalSmallText text-green-80">
                  Your card will be charged immediately.
                </div>
              </div>
              <div className="sm:w-[250px]">
                <Button
                  backgroundColor="bg-green-10 -50"
                  height="h-[50px]"
                  text="Complete payment"
                  textColor="text-green-70"
                  textSize="buttonText"
                  width="w-full"
                  handleClick={() => navigate(BUYERFINAL_URL)}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </Template>
  );
};
