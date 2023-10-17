import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "App/reducers";
import { setShowMobileMenu } from "Data/LayoutState";
import {
  SIGNIN_URL,
  SIGNUP_URL,
  MYACCOUNT_URL,
  PROFILEPAGE_URL,
} from "Lib/urls";

export const HamburgerSignInButton: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToNewPage = (href: string) => {
    navigate(href);
    dispatch(setShowMobileMenu(false));
  };
  const isAuth = useSelector((state: AppState) => state.auth.loggedIn);
  return (
    <div>
      {!isAuth && (
        <div className="flex flex-col gap-2.5 w-full">
          <button
            className="
            w-full py-[10px] rounded-10
            bg-white text-base font-semibold"
            onClick={() => goToNewPage(SIGNUP_URL)}
          >
            Sign Up
          </button>
          <button
            className="
            w-full py-[10px] rounded-10
            bg-white text-base font-semibold"
            onClick={() => goToNewPage(SIGNIN_URL)}
          >
            Sign in
          </button>
        </div>
      )}
      {isAuth && (
        <div className="flex flex-row">
          <div className="w-[100px] h-[100px] mx-[4px] rounded-full bg-white"></div>
          <div className="ml-[15px] flex flex-col justify-between items-start">
            <div className="font-semibold text-lg text-white">
              Sheldon Cooper
            </div>
            <button
              className="font-medium text-base text-green-10"
              onClick={() => goToNewPage(MYACCOUNT_URL)}
            >
              My Account
            </button>
            <button
              className="font-medium text-base text-green-10"
              onClick={() => goToNewPage(PROFILEPAGE_URL)}
            >
              Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
