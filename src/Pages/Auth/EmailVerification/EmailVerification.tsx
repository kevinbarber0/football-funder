import React, { useState } from "react";
import { GeneralStepper, Template } from "UI";
import { ConfirmPage, SuccessPage } from "./Components";

export const EmailVerification: React.FC = () => {
  function handleNextPage() {
    if (currentStep < pages.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function handlePrevPage() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );

  const pages: { name: string; component: React.ReactNode }[] = [
    {
      component: (
        <ConfirmPage
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      ),
      name: "Confirm Email",
    },
    {
      component: (
        <SuccessPage
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      ),
      name: "Confirm Success",
    },
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />;
    </Template>
  );
};
