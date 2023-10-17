import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import {
  FORGOTPASSWORD_URL,
  SIGNUP_URL,
  CREATEFUNDRAISER_URL,
  FUNDRAISERACCOUNTUPDATE_URL,
} from "Lib/urls";
import { useAxios } from "Lib";
import { setLogin } from "Data/Auth";
import { setUserInfo } from "Data/User";
import { Button, Input, TextButton, Template } from "UI";
import { AccountEmailData, AccountPasswordData } from "Config";
import { loginFormDataType } from "./types";
import { StatusContext } from "App/StatusProvider";
import { FormStepperContext } from "App/FormStepperProvider";
import { AppState } from "App/reducers";

export const Signin: React.FC = () => {
  const navigate = useNavigate();
  useContext(FormStepperContext);
  const { showStatus } = useContext(StatusContext);
  const { userInfo } = useSelector((state: AppState) => state.user);
  const { defaultRegister } = useSelector((state: AppState) => state.register);

  // const { setSafely } = useIsMounted();

  const [loginValue, setLoginValue] = useState<{ [key: string]: any }>({
    email: "",
    password: "",
  });
  const handleLoginValue = (key: string, value: any) => {
    setLoginValue({
      ...loginValue,
      [key]: value,
    });
  };
  const data: loginFormDataType = {
    action: "validate-login",
    email: loginValue.email,
    password: loginValue.password,
  };
  const axios = useAxios();
  const dispatch = useDispatch();

  const storeLoginData = (loginData: any) => {
    dispatch(setLogin(loginData.token));
  };
  const storeUserInfo = (userInfo: any) => {
    dispatch(setUserInfo(userInfo));
  };
  const signIn = useMutation(
    (params: loginFormDataType) => axios.post("/auth/login", params),
    {
      onSuccess: (res) => {
        showStatus("Your account has been succesfully login!");
        // const resData = res;
        const data = res.data;
        const userInfo = data.data;
        console.log(userInfo);
        const isUpdated = userInfo.first_name;
        storeLoginData(data);
        storeUserInfo(userInfo);

        defaultRegister || isUpdated
          ? navigate(CREATEFUNDRAISER_URL)
          : navigate(FUNDRAISERACCOUNTUPDATE_URL);
      },
      onError: (err: any) => {
        const errorMessage = err.response?.data.error;
        if (errorMessage === "no-such-account")
          showStatus("Your account doesn't exist!", "error");
        else if (errorMessage === "unverified-user")
          showStatus("Your account has not been verified!", "error");
        else showStatus("Your password is invalid!", "error");
      },
    }
  );
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    signIn.mutate(data);
  }
  const goToSignUp = () => {
    navigate(SIGNUP_URL);
  };
  const goToForgotPasswordPage = () => {
    navigate(FORGOTPASSWORD_URL);
  };
  return (
    <Template isLoading={signIn.isLoading}>
      <form onSubmit={handleSubmit}>
        <div className=" w-[1000px] max-lg:w-full px-5 mb-[300px] max-md:mb-[150px] mx-auto sm:mt-[60px] mt-5">
          <div className=" xs:w-[500px]">
            <div className="generalTitle">Welcome back</div>
            <div className="mt-15 flex gap-1">
              <div className="introText">New to Football Funder?</div>
              <TextButton text="Sign Up" handleClick={goToSignUp} />
            </div>
            <div className="mt-30">
              <Input
                data={AccountEmailData}
                name="email"
                value={loginValue.email}
                setValue={handleLoginValue}
                required={true}
                disabled={false}
              />
              <div className="mt-2.5">
                <Input
                  data={AccountPasswordData}
                  name="password"
                  value={loginValue.password}
                  setValue={handleLoginValue}
                  required={true}
                  disabled={false}
                />
              </div>
            </div>
            <div className="mt-30">
              <Button
                type="submit"
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Sign in"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
            <div className="mt-30">
              <TextButton
                text="I forgot my password"
                handleClick={goToForgotPasswordPage}
              />
            </div>
          </div>
        </div>
      </form>
    </Template>
  );
};
