import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useAxios } from "Lib";
import {
  FundraiserSignUpFirstStep,
  FundraiserSignUpSecondStep,
  IndivididualFundraiserSignUpSecondStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";
import { registerFormDataType } from "Pages/Auth/SingUp/types";
import { EMAILVERIFICATION_URL } from "Lib/urls";

export const FundraiserSignUp: React.FC = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { fundraierRegisterValue, clearFundraiserRegisterValue } =
    useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);

  const data: any = {
    category_id: fundraierRegisterValue.category_id,
    org_name: fundraierRegisterValue.org_name,
    org_address1: fundraierRegisterValue.org_address1,
    org_address2: fundraierRegisterValue.org_address2,
    org_phone_number: fundraierRegisterValue.org_phone_number,
    org_city: fundraierRegisterValue.org_city,
    org_country: fundraierRegisterValue.org_country,
    org_post_code: fundraierRegisterValue.org_post_code,
    address_line1: fundraierRegisterValue.address_line1,
    address_line2: fundraierRegisterValue.address_line2,
    city: fundraierRegisterValue.city,
    post_code: fundraierRegisterValue.post_code,
    country: fundraierRegisterValue.country,
    phone_number: fundraierRegisterValue.phone_number,
    first_name: fundraierRegisterValue.first_name,
    last_name: fundraierRegisterValue.last_name,
    email: fundraierRegisterValue.email,
    password: fundraierRegisterValue.password,
    profile_url: fundraierRegisterValue.profile_url,
  };

  const fundraiserSignUp = useMutation(
    (params: registerFormDataType) => axios.post("/user/register", params),
    {
      onSuccess: (data) => {
        clearFundraiserRegisterValue();
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
    fundraiserSignUp.mutate(data);
    // console.log("123123", data);
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
      name: "FundraiserSignUpFirstStep",
      component: <FundraiserSignUpFirstStep handleNextPage={handleNextPage} />,
    },
    ...[
      fundraierRegisterValue.category_id === 2
        ? {
            name: "IndivididualFundraiserSignUpSecondStep",
            component: (
              <IndivididualFundraiserSignUpSecondStep
                handleSubmit={onClickSubmitBtn}
                handlePrevPage={handlePrevPage}
              />
            ),
          }
        : {
            name: "FundraiserSignUpSecondStep",
            component: (
              <FundraiserSignUpSecondStep
                handleSubmit={onClickSubmitBtn}
                handlePrevPage={handlePrevPage}
              />
            ),
          },
    ],
  ];

  return (
    <Template isLoading={fundraiserSignUp.isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
