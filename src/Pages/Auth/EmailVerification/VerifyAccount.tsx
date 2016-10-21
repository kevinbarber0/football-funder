import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { QueryKey } from "types";
import { useAxios } from "Lib";
import { SIGNIN_URL, EMAILVERIFICATION_URL } from "Lib/urls";
import { StatusContext } from "App/StatusProvider";
import { Template } from "UI";

export const VerifyAccount: React.FC = () => {
  const params = useParams<string>();
  const axios = useAxios();
  const { showStatus } = useContext(StatusContext);
  const navigate = useNavigate();

  const setErrorMessage = (error: string) => {
    const reasons = new Map<string, string>();
    reasons.set(
      "general",
      "We are sorry, but we cannot verify your account at this time."
    );
    reasons.set(
      "no-such-user",
      "There is no user account associated with this link"
    );
    reasons.set("already-verified", "This acount has already been verified");
    reasons.set("already-active", "This account is already active");

    if (reasons.has(error)) {
      return reasons.get(error);
    }

    return reasons.get("general");
  };

  const verifyUserAccount = async ({ queryKey }: any): Promise<boolean> => {
    const [, token] = queryKey;
    const { data } = await axios.post(`/user/verify_account`, { token: token });
    return data;
  };

  const verify = useQuery(
    [QueryKey.accountVerify, params.token],
    verifyUserAccount,
    {
      onSuccess: (data) => {
        showStatus(
          "Your account has been successfully verified. You may now log in."
        );
        navigate(SIGNIN_URL);
      },
      onError: (data: any) => {
        const error = data.response?.data?.error ?? "";
        const message = setErrorMessage(error);
        showStatus(message ?? "Error", "error");
        if (error === "already-verified") navigate(SIGNIN_URL);
        else navigate(EMAILVERIFICATION_URL);
      },
    }
  );

  return (
    <Template isLoading={verify.isLoading}>
      <div className="sm:mt-[60px] mt-[80px] 2xs:mb-[690px] mb-[300px]">
        <div className="w-[520px] max-xs:w-full mx-auto max-xs:px-5">
          <div className="mt-30 titleText text-center max-xs:text-start">
            Email Verfiying.....
          </div>
        </div>
      </div>
    </Template>
  );
};
