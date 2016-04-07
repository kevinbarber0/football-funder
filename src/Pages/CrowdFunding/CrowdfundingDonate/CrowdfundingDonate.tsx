import React, { useState } from "react";
import {
  CrowdfundingDonateStep1,
  CrowdfundingDonateStep2,
  CrowdfundingDonateStep3,
  CrowdfundingDonateStep4,
  CrowdfundingDonateStep5,
} from "Pages";
import { GeneralStepper } from "UI";

export const CrowdfundingDonate: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(
    parseInt(sessionStorage.getItem("currentStep") || "0")
  );

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

  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "CrowdfundingDonateStep1",
      component: (
        <CrowdfundingDonateStep1
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CrowdfundingDonateStep2",
      component: (
        <CrowdfundingDonateStep2
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "DonateStep3",
      component: (
        <CrowdfundingDonateStep3
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CrowdfundingDonateStep4",
      component: (
        <CrowdfundingDonateStep4
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "CrowdfundingDonateStep5",
      component: <CrowdfundingDonateStep5 />,
    },
  ];
  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
