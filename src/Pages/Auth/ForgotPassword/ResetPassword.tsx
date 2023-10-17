import React, { useState, useContext } from "react";
import { useMutation } from "react-query";
import { useParams, useNavigate } from "react-router-dom";
import { AccountConfirmPasswordData, AccountPasswordData } from "Config";
import { Button, Input, Template } from "UI";
import { useAxios } from "Lib";
import { SIGNIN_URL, FORGOTPASSWORD_URL } from "Lib/urls";
import { StatusContext } from "App/StatusProvider";

interface ResetPasswordType {
  token: string | undefined;
  password: string | null;
  password_confirmation: string | null;
}
export const ResetPassword: React.FC = () => {
  const [resetPasswordValue, setResetPasswordValue] = useState<{
    [key: string]: any;
  }>({});
  const handleResetPasswordValue = (name: string, value: any) => {
    setResetPasswordValue({
      ...resetPasswordValue,
      [name]: value,
    });
  };
  const params = useParams<string>();
  const navigate = useNavigate();
  const { showStatus } = useContext(StatusContext);
  const axios = useAxios();

  const resetPassword = useMutation(
    (parms: ResetPasswordType) => axios.post("/auth/reset_password", parms),
    {
      onSuccess: () => {
        showStatus("Your password has been successfully created!");
        navigate(SIGNIN_URL);
      },
      onError: (err: any) => {
        if (err.errors) {
          const responseError = err.errors;
          if (
            responseError[0].message ===
            "A password must be at least 8 characters"
          )
            showStatus(responseError[0].message, "error");
          else showStatus("You must match the password! ", "error");
        } else {
          const error = err.response?.data?.error ?? "";
          if (error === "no-password-reset") {
            showStatus(
              "The password has not been updated. Please try again!",
              "error"
            );
            navigate(FORGOTPASSWORD_URL);
          } else {
            showStatus("The reset password token is invalid!", "error");
            navigate(FORGOTPASSWORD_URL);
          }
        }
      },
    }
  );

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      token: params?.token,
      password: resetPasswordValue.password,
      password_confirmation: resetPasswordValue.password_confirmation,
    };
    // console.log("formdata", formData);
    resetPassword.mutate(formData);
  }

  return (
    <Template title="Resct Password" isLoading={resetPassword.isLoading}>
      <form onSubmit={handleSubmit}>
        <div
          className="
        md:w-[720px] w-full px-5 ns:mt-[90px] mt-[60px] ns:mb-[500px] mb-[300px]  mx-auto"
        >
          <div className="mt-30  xs:text-center generalTitle">
            Add new password
          </div>
          <div className="mt-15  xs:text-center introText">
            Enter your new password.
          </div>
          <div className="mt-30 xs:w-[500px] mx-auto w-full flex justify-center flex-col gap-2.5">
            <Input
              data={AccountPasswordData}
              name="password"
              value={resetPasswordValue.password}
              setValue={handleResetPasswordValue}
              required={true}
              disabled={false}
            />
            <Input
              data={AccountConfirmPasswordData}
              name="password_confirmation"
              value={resetPasswordValue.password_confirmation}
              setValue={handleResetPasswordValue}
              required={true}
              disabled={false}
            />
          </div>
          <div className="mt-30 w-full flex justify-center">
            <div className="xs:w-[500px] w-full">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Create new password"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
        </div>
      </form>
    </Template>
  );
};
