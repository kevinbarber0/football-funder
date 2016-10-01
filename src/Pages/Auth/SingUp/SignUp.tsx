import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import { GeneralStepper, Template } from "UI";
import { SignUpStepFirst, SignUpStepSecond, SignUpStepThird } from "Pages";
import { useAxios } from "Lib";
import { EMAILVERIFICATION_URL } from "Lib/urls";
import { registerFormDataType } from "./types";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";
import { setDefaultRegister } from "Data/DefaultSignUpState";
import { AppState } from "App/reducers";

export const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const axios = useAxios();
  const { registerValue, clearRegisterValue } = useContext(FormStepperContext);
  const isSignUp = useSelector((state: AppState) => state.register);
  const dispatch = useDispatch();
  const { showStatus } = useContext(StatusContext);

  const data: any = {
    category_id: registerValue.category_id,
    org_name: registerValue.org_name,
    org_address1: registerValue.org_address1,
    org_address2: registerValue.org_address2,
    org_phone_number: registerValue.org_phone_number,
    org_city: registerValue.org_city,
    org_country: registerValue.org_country,
    org_post_code: registerValue.org_post_code,
    address_line1: registerValue.address_line1,
    address_line2: registerValue.address_line2,
    city: registerValue.city,
    post_code: registerValue.post_code,
    country: registerValue.country,
    phone_number: registerValue.phone_number,
    first_name: registerValue.first_name,
    last_name: registerValue.last_name,
    email: registerValue.email,
    password: registerValue.password,
    profile_url: registerValue.profile_url,
  };
  const { defaultRegister } = useSelector((state: AppState) => state.register);
  console.log("defaultRegister", defaultRegister);
  const signUp = useMutation(
    (params: registerFormDataType) => axios.post("/user/register", params),
    {
      onSuccess: (data) => {
        clearRegisterValue();
        dispatch(setDefaultRegister(true));
        showStatus("Your account has been successfully registered!");
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
  function onClickRegisterBtn() {
    signUp.mutate(data);
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
  function handleDoubleNextPage() {
    if (currentStep < pages.length - 2) {
      setCurrentStep(currentStep + 2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  function handleDoublePrevPage() {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 2);
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
      name: "SignUpStepFirst",
      component: (
        <SignUpStepFirst
          handleNextPage={handleNextPage}
          handleOtherPage={handleDoubleNextPage}
        />
      ),
    },
    {
      name: "SignUpStepSecond",
      component: (
        <SignUpStepSecond
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
        />
      ),
    },
    {
      name: "SignUpStepThird",
      component: (
        <SignUpStepThird
          handlePrevPage={handlePrevPage}
          handleDoublePrevPage={handleDoublePrevPage}
          handleSubmit={onClickRegisterBtn}
        />
      ),
    },
  ];
  return (
    <Template isLoading={signUp.isLoading}>
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
