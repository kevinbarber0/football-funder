import React, { useState } from "react";
import {
  SponsorshipSaleStep1,
  SponsorshipSaleStep2,
  SponsorshipSaleStep3,
} from "./Components";
import { GeneralStepper } from "UI";

export const SponsorshipSale: React.FC = () => {
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
      name: "SponsorshipSaleStep1",
      component: (
        <SponsorshipSaleStep1
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          introTitle="Front of shirt sponsorship - Season 2023/24"
          pageTitle="Sponsorship enquiry"
        />
      ),
    },
    {
      name: "SponsorshipSaleStep2",
      component: (
        <SponsorshipSaleStep2
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          introTitle="Front of shirt sponsorship - Season 2023/24"
          pageTitle="Sponsorship enquiry"
        />
      ),
    },
    {
      name: "SponsorshipSaleStep3",
      component: <SponsorshipSaleStep3 />,
    },
  ];
  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
