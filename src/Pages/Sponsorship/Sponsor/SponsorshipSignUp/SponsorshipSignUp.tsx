import React, { useState, useContext } from "react";
import {
  SponsorSignUpFirstStep,
  SponsorSignUpSecondStep,
  IndivididualSponsorSignUpSecondStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { registerFormDataType } from "Pages/Auth/SingUp/types";
import { useAxios } from "Lib";
import { useNavigate } from "react-router-dom";
import { FormStepperContext } from "App/FormStepperProvider";
import { StatusContext } from "App/StatusProvider";
import { useMutation } from "react-query";
import { EMAILVERIFICATION_URL } from "Lib/urls";

export const SponsorshipSignUp: React.FC = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { sponsorshipRegisterValue, clearSponsorRegisterValue } =
    useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);

  const data: any = {
    category_id: sponsorshipRegisterValue.category_id,
    org_name: sponsorshipRegisterValue.org_name,
    org_address1: sponsorshipRegisterValue.org_address1,
    org_address2: sponsorshipRegisterValue.org_address2,
    org_phone_number: sponsorshipRegisterValue.org_phone_number,
    org_city: sponsorshipRegisterValue.org_city,
    org_country: sponsorshipRegisterValue.org_country,
    org_post_code: sponsorshipRegisterValue.org_post_code,
    address_line1: sponsorshipRegisterValue.address_line1,
    address_line2: sponsorshipRegisterValue.address_line2,
    city: sponsorshipRegisterValue.city,
    post_code: sponsorshipRegisterValue.post_code,
    country: sponsorshipRegisterValue.country,
    phone_number: sponsorshipRegisterValue.phone_number,
    first_name: sponsorshipRegisterValue.first_name,
    last_name: sponsorshipRegisterValue.last_name,
    email: sponsorshipRegisterValue.email,
    password: sponsorshipRegisterValue.password,
    profile_url: sponsorshipRegisterValue.profile_url,
  };

  const sponsorshipSignUp = useMutation(
    (params: registerFormDataType) => axios.post("/user/register", params),
    {
      onSuccess: (data) => {
        clearSponsorRegisterValue();
        showStatus("Your account has been succesfully registered!");
        navigate(EMAILVERIFICATION_URL);
      },
      onError: (err: any) => {
        if (err.errors) {
          window.scrollTo(0, 0);
          const responseError = err.errors;
          if (
            responseError[0].rule === "unique" &&
            responseError[0].field === "email"
          ) {
            showStatus("Username already exists", "error");
          } else showStatus(responseError[0].message, "error");
        } else {
          showStatus(err.message, "error");
        }
      },
    }
  );

  function onClickSubmitBtn() {
    sponsorshipSignUp.mutate(data);
  }
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
      name: "SponsorSignUpFirstStep",
      component: (
        <SponsorSignUpFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    ...[
      sponsorshipRegisterValue.category_id === 2
        ? {
            name: "IndivididualSponsorSignUpSecondStep",
            component: (
              <IndivididualSponsorSignUpSecondStep
                handlePrevPage={handlePrevPage}
                handleSubmit={onClickSubmitBtn}
              />
            ),
          }
        : {
            name: "SponsorSignUpSecondStep",
            component: (
              <SponsorSignUpSecondStep
                handlePrevPage={handlePrevPage}
                handleSubmit={onClickSubmitBtn}
              />
            ),
          },
    ],
  ];

  return (
    <Template>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
