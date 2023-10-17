import React, { useState } from "react";
import {
  AdvertisingSaleStep1,
  AdvertisingSaleStep2,
  AdvertisingSaleStep3,
} from "Pages";
import { GeneralStepper } from "UI";

export const AdvertisingSale: React.FC = () => {
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
      name: "AdvertisingSaleStep1",
      component: (
        <AdvertisingSaleStep1
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          introTitle="Pitchside advertising board 1220x610cm"
          pageTitle="Advertising enquiry"
        />
      ),
    },
    {
      name: "AdvertisingSaleStep2",
      component: (
        <AdvertisingSaleStep2
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          introTitle="Pitchside advertising board 1220x610cm"
          pageTitle="Advertising enquiry"
        />
      ),
    },
    {
      name: "AdvertisingSaleStep3",
      component: <AdvertisingSaleStep3 />,
    },
  ];
  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
