import React, { useState, useContext } from "react";
import {
  AdvertisingSignUpFirstStep,
  AdvertisingSignUpSecondStep,
  IndivididualAdvertiserSignUpSecondStep,
} from "./Components";
import { GeneralStepper, Template } from "UI";
import { useAxios } from "Lib";
import { useNavigate } from "react-router-dom";
import { FormStepperContext } from "App/FormStepperProvider";
import { StatusContext } from "App/StatusProvider";
import { registerFormDataType } from "Pages/Auth/SingUp/types";
import { useMutation } from "react-query";
import { EMAILVERIFICATION_URL } from "Lib/urls";

export const AdvertisingSignUp: React.FC = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { advertisingRegisterValue, clearAdsRegisterValue } =
    useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);

  const data: any = {
    category_id: advertisingRegisterValue.category_id,
    org_name: advertisingRegisterValue.org_name,
    org_address1: advertisingRegisterValue.org_address1,
    org_address2: advertisingRegisterValue.org_address2,
    org_phone_number: advertisingRegisterValue.org_phone_number,
    org_city: advertisingRegisterValue.org_city,
    org_country: advertisingRegisterValue.org_country,
    org_post_code: advertisingRegisterValue.org_post_code,
    address_line1: advertisingRegisterValue.address_line1,
    address_line2: advertisingRegisterValue.address_line2,
    city: advertisingRegisterValue.city,
    post_code: advertisingRegisterValue.post_code,
    country: advertisingRegisterValue.country,
    phone_number: advertisingRegisterValue.phone_number,
    first_name: advertisingRegisterValue.first_name,
    last_name: advertisingRegisterValue.last_name,
    email: advertisingRegisterValue.email,
    password: advertisingRegisterValue.password,
    profile_url: advertisingRegisterValue.profile_url,
  };

  const advertiserSignUp = useMutation(
    (params: registerFormDataType) => axios.post("/user/register", params),
    {
      onSuccess: (data) => {
        clearAdsRegisterValue();
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
    advertiserSignUp.mutate(data);
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
      name: "AdvertisingSignUpFirstStep",
      component: (
        <AdvertisingSignUpFirstStep
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    ...[
      advertisingRegisterValue.category_id === 2
        ? {
            name: "IndivididualAdvertiserSignUpSecondStep",
            component: (
              <IndivididualAdvertiserSignUpSecondStep
                handlePrevPage={handlePrevPage}
                handleSubmit={onClickSubmitBtn}
              />
            ),
          }
        : {
            name: "AdvertisingSignUpSecondStep",
            component: (
              <AdvertisingSignUpSecondStep
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
