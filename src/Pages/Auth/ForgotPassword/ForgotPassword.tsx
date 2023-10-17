import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useAxios } from "Lib";
import { SIGNIN_URL } from "Lib/urls";
import { GeneralStepper, Template } from "UI";
import {
  ForgotPasswordStepFirst,
  ForgotPasswordStepSecond,
  ForgotPasswordStepFourth,
} from "Pages";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";

export const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const axios = useAxios();
  const { showStatus } = useContext(StatusContext);
  const { forgotPasswordValue, clearForgotPasswordValue } =
    useContext(FormStepperContext);
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
  const param = {
    email: forgotPasswordValue.email,
  };
  const sendForgotPasswordLink = useMutation(
    (params: any) => axios.post("/auth/send_password_reset", params),
    {
      onSuccess: () => {
        clearForgotPasswordValue();
        showStatus("Just sent a reset password link. Please check your email!");
      },
      onError: (err: any) => {
        const error = err.response?.data?.error ?? "";
        if (error === "invalid-user")
          showStatus("You are not registered user!", "error");
      },
    }
  );

  function handleSendResetPassword() {
    sendForgotPasswordLink.mutate(param);
  }

  const pages: { name: string; component: React.ReactNode }[] = [
    {
      name: "ForgotPasswordStepFirst",
      component: <ForgotPasswordStepFirst handleNextPage={handleNextPage} />,
    },
    {
      name: "ForgotPasswordStepSecond",
      component: (
        <ForgotPasswordStepSecond
          handlePrevPage={handlePrevPage}
          handleSendResetPassword={handleSendResetPassword}
        />
      ),
    },
    {
      name: "ForgotPasswordStepFourth",
      component: (
        <ForgotPasswordStepFourth
          handlePrevPage={handlePrevPage}
          handleNextPage={() => navigate(SIGNIN_URL)}
        />
      ),
    },
  ];

  return (
    <Template
      title="ForgotPassword"
      isLoading={sendForgotPasswordLink.isLoading}
    >
      <GeneralStepper pages={pages} stepNumber={currentStep} />
    </Template>
  );
};
