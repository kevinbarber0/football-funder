import React, { useState } from "react";
import { UpdatePasswordStep1, UpdatePasswordStep2 } from "Pages";
import { GeneralStepper } from "UI";

export const UpdatePassword: React.FC = () => {
  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "UpdatePasswordStep1",
      component: (
        <UpdatePasswordStep1
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "UpdatePasswordStep2",
      component: (
        <UpdatePasswordStep2
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
  ];

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

  return (
    <div>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </div>
  );
};
