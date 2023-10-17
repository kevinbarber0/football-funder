import React, { useState } from "react";
import {
  Button,
  EditableCheckoutPanel,
  ConfirmModal,
  PageTitle,
  StepLabel,
  // StepperBackButton,
  PageSectionTitle,
} from "UI";
import { StepperActionPropsType } from "types";

export const PaymentDetailsPage: React.FC<StepperActionPropsType> = ({
  handleNextPage,
  handlePrevPage,
}) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      {/* <div
        className={classNames(
          "fixed top-0 w-full h-full px-5 overflow-y-auto inset-0 bg-black bg-opacity-30 flex justify-center items-start",
          showModal ? "block" : "hidden"
        )}
      >
        <div className="mt-[300px]">
          <ConfirmMenu isShowModal={() => setShowModal(false)} />
        </div>
      </div> */}
      {showModal && (
        <ConfirmModal
          isShowModal={() => setShowModal(false)}
          menuTitle="Are you sure?"
          menuContent="Once confirmed, we will email the claimer to let them know their reward is on the way. Once actioned, it cannot be undone."
          button1Name="Send Reward"
          button2Name="Cancel"
        />
      )}
      <div
        className="
        w-[1000px] max-lg:w-full px-5 mt-[60px] max-ns:mt-5
         mb-[60px] max-ns:mb-30 mx-auto"
      >
        <PageTitle title="Checkout" />
        <div className="mt-15">
          {/* <StepperBackButton handleBackPage={handlePrevPage} /> */}
        </div>
        <div className="mt-30">
          <StepLabel number="Step 1" title="Payment details" />

          <div className="mt-30 xs:w-[500px]">
            <PageSectionTitle title="Summary" />
            <div className="divide-y-2 divide-gray-300">
              <div className="py-5">
                <EditableCheckoutPanel
                  handleClick={() => setShowModal(true)}
                  value={showModal}
                />
              </div>
              <div className="py-5">
                <EditableCheckoutPanel
                  handleClick={() => setShowModal(true)}
                  value={showModal}
                />
              </div>
            </div>
            <div className="mt-30">
              <PageSectionTitle title="Total to pay" />
              <div className="mt-15">
                <div className="rounded-10 border-[1px] border-gray-200 bg-gray-100 p-15 flex justify-between">
                  <div className="introText">Amount</div>
                  <div className="valueText">£35.98</div>
                </div>
              </div>
            </div>
            <div className="mt-[60px] introText">
              To add more advertising and sponsorship listings, select an option
              below. Your current listing(s) will remain in your basket.
            </div>
            <div className="mt-15">
              <div className="flex gap-2.5 max-ns:flex-col max-ns:justify-center">
                <Button
                  backgroundColor="bg-green-70"
                  height="h-[50px]"
                  padding="px-5 py-15"
                  text="Add advertising listing"
                  textColor="text-white"
                  textSize="introText"
                />
                <Button
                  backgroundColor="bg-green-70"
                  height="h-[50px]"
                  padding="px-5 py-15"
                  text="Add sponsorship listing"
                  textColor="text-white"
                  textSize="introText"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-30">
          <div className="flex xs:justify-end max-xs:flex-col">
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
    </div>
  );
};
