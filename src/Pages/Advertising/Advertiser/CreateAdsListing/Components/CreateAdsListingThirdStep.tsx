import React, { useContext, useState } from "react";
import classNames from "classnames";
import {
  Button,
  PageSectionTitle,
  PageTitle,
  StepperBackButton,
  StepLabel,
  ConfirmBox,
} from "UI";
import { StepperActionPropsType } from "types";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";

export const CreateAdsListingThirdStep: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const [confirm, setConfirm] = useState<{
    [key: string]: boolean;
  }>({
    confirm: false,
    agree: false,
    acknowledge: false,
  });
  const handleConfirm = (key: string, value: boolean) => {
    setConfirm({
      ...confirm,
      [key]: !value,
    });
  };
  const { handleCreateAdvertisingPromote, createAdvertisingValue } =
    useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);

  const handleSubmit = () => {
    if (confirm.confirm && confirm.agree && confirm.acknowledge) {
      handleNextPage();
    } else {
      showStatus("Please confirm all requirements to proceed", "error");
    }
  };

  return (
    <div
      className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[100px] max-ns:mb-[60px] mx-auto"
    >
      <div className="">
        <PageTitle title="Create your listings" />
        <div className="mt-15">
          <StepperBackButton handleBackPage={handlePrevPage} />
        </div>
        <div className="mt-30">
          <StepLabel number="Step 6" title="Final touches" />
        </div>
        <div
          className={classNames(
            "mt-30 w-full bg-gray-200 rounded-10 p-15",
            "xs:w-[500px]"
          )}
        >
          <div className="mt-30 text-[16px] leading-[20px]">
            Promote Your Fundraiser
          </div>
          <div className="mt-[10px]">
            <div className="generalSmallText text-gray-600">
              Be featured on the homepage, within your category and on Football
              Funder social channels for the duration of the fundraiser.
            </div>
            <div className="mt-5">
              <span className="text-[16px] font-semibold text-green-70">
                £49
              </span>{" "}
              <span className="generalSmallText text-gray-600">
                one time fee, deducted from the final amount raised.
              </span>
            </div>
          </div>
          <div className="mt-15">
            <Button
              backgroundColor={
                createAdvertisingValue.promote ? "bg-green-70" : "bg-green-10"
              }
              height="h-[50px]"
              width="w-full"
              text="Promote"
              textColor={
                createAdvertisingValue.promote ? "text-white" : "text-green-70"
              }
              textSize="text-[16px] leading-[20px] font-semibold"
              handleClick={handleCreateAdvertisingPromote}
            />
          </div>
        </div>
        <div className="mt-30 xs:w-[500px] w-full">
          <PageSectionTitle title="Confirm" />
          <div className="mt-2.5 flex flex-col gap-2.5">
            <ConfirmBox
              name="confirm"
              label="I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy"
              checkboxStyle={true}
              value={confirm.confirm}
              setValue={handleConfirm}
            />
            <ConfirmBox
              name="agree"
              label="I agree for the commercial contact to be contacted by phone or email from interested parties, and that the use of the enquiry form will share details with interested parties."
              checkboxStyle={true}
              value={confirm.agree}
              setValue={handleConfirm}
            />
            <ConfirmBox
              name="acknowledge"
              label="I acknowledge that for the listing to be marked as sold, Football Funder will ask whether the placement was sold successfully or not, and who to."
              checkboxStyle={true}
              value={confirm.acknowledge}
              setValue={handleConfirm}
            />
          </div>
        </div>
      </div>
      <div className="xs:mt-[100px] mt-[60px]">
        <div className="flex xs:justify-end">
          <div className="xs:w-[250px] w-full">
            <Button
              backgroundColor="bg-green-10"
              height="h-[50px]"
              width="w-full"
              text="Post listing"
              textColor="text-green-70"
              textSize="buttonText"
              handleClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
