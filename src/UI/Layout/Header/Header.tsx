import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import classname from "classnames";
import {
  HOME_URL,
  SIGNIN_URL,
  SIGNUP_URL,
  EXPLORE_URL,
  FEES_URL,
  MYACCOUNT_URL,
  PROFILEPAGE_URL,
} from "Lib/urls";
import { Dropdown, HamburgerMenu, Button } from "UI";
import { MdClose, MdMenu } from "react-icons/md";
import { SearchIcon } from "Assets/images/svg/button/icon-search";
import HeaderLogoImage from "Assets/images/svg/logo/header-log.svg";
import {
  advertisingButtonData,
  sponsorshipButtonData,
  fundraisingButtonData,
  moreButtonData,
} from "Config";
import DivideLine from "Assets/images/svg/button/accout-menu-divide.svg";
import { MdArrowDropDown } from "react-icons/md";
import { AppState } from "App/reducers";
import { setShowMobileMenu } from "Data/LayoutState";

type HeaderProps = {
  isShowMobileMenu?: () => void;
};

export const Header: React.FC<HeaderProps> = ({ isShowMobileMenu }) => {
  const [isShowSearchForm, setIsShowSearchForm] = useState<boolean>(false);
  const isMobileMenu = useSelector(
    (state: AppState) => state.layoutState.isMobileMenu
  );
  const isAuth = useSelector((state: AppState) => state.auth.loggedIn);
  const { userInfo } = useSelector((state: any) => state.user);
  const isUpdated = userInfo.first_name;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const ShowSearchForm = () => {
    setIsShowSearchForm(!isShowSearchForm);
  };

  const [isShowAccountMenu, setIsShowAccountMenu] = useState<boolean>(false);

  const AccountMenuShow = () => {
    setIsShowAccountMenu(!isShowAccountMenu);
  };

  const handleAccountBtn = () => {
    setIsShowAccountMenu(!isShowAccountMenu);
    navigate(MYACCOUNT_URL);
  };
  const handleProfileBtn = () => {
    setIsShowAccountMenu(!isShowAccountMenu);
    navigate(PROFILEPAGE_URL);
  };

  const logOut = () => {
    dispatch({ type: "RESET" });
    navigate(HOME_URL);
  };

  const handleAvatarMenuClick = () => {
    logOut();
    AccountMenuShow();
  };

  return (
    <div className="sticky top-0 z-40">
      {!isMobileMenu && (
        <div className="relative z-20">
          <div className="bg-green-10">
            <div
              className="xs:px-20 
          px-10 py-4 flex flex-row"
            >
              <img
                src={HeaderLogoImage}
                alt="footer-logo"
                onClick={() => navigate(HOME_URL)}
              />
              <div
                className={classname(
                  "w-full flex  justify-between max-xl:justify-end ml-20"
                )}
              >
                <div className="flex items-center max-xl:hidden">
                  <div className="flex flex-row items-center text-[14px] font-semibold leading-5">
                    <div className="flex flex-row text">
                      <Button
                        text="Home"
                        textSize="text-sm fpont-semibold"
                        padding="p-2.5"
                        textColor="text-green-70"
                        otherStyle="hover:bg-green-70 hover:bg-opacity-5"
                        handleClick={() => navigate(HOME_URL)}
                      />
                      <Button
                        text="Explore"
                        textSize="text-sm fpont-semibold"
                        padding="p-2.5"
                        textColor="text-green-70"
                        otherStyle="hover:bg-green-70 hover:bg-opacity-5"
                        handleClick={() => navigate(EXPLORE_URL)}
                      />
                      <Dropdown
                        List={fundraisingButtonData(isAuth, isUpdated)}
                      />
                      <Dropdown
                        List={advertisingButtonData(isAuth, isUpdated)}
                      />
                      <Dropdown
                        List={sponsorshipButtonData(isAuth, isUpdated)}
                      />
                      <Button
                        text="Fees"
                        textSize="text-sm fpont-semibold"
                        padding="p-2.5"
                        textColor="text-green-70"
                        otherStyle="hover:bg-green-70 hover:bg-opacity-5"
                        handleClick={() => navigate(FEES_URL)}
                      />
                      <Dropdown List={moreButtonData} />
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {!isShowSearchForm && (
                    <button
                      className="max-xl:hidden mr-5 "
                      onClick={ShowSearchForm}
                    >
                      <SearchIcon />
                    </button>
                  )}
                  {isShowSearchForm && (
                    <form className="max-xl:hidden relative flex items-center flex-1">
                      <label htmlFor="simple-search" className="sr-only">
                        Search
                      </label>
                      <div className="">
                        <input
                          type="text"
                          id="simple-search"
                          className="block w-full rounded-lg bg-white py-2 pl-3 
                                pr-[30px] font-medium text-base focus:outline-0 
                                placeholder:text-[12px] placeholder:leading-[20px] placeholder:font-medium"
                          placeholder="Search..."
                          autoComplete="off"
                          required
                        />
                      </div>
                      <button
                        className="absolute right-0 ml-2 rounded-lg px-2 py-2 text-sm font-medium text-white"
                        onClick={ShowSearchForm}
                      >
                        <div className="text-[16px] text-black">
                          <MdClose />
                        </div>
                      </button>
                    </form>
                  )}
                  <div>
                    {!isAuth && (
                      <div className="flex gap-2.5 max-xl:hidden">
                        <button
                          className="
                           h-[40px] my-[1px] py-1 px-2.5
                          text-green-70 font-semibold leading-[22px] text-[16px]
                            flex justify-center items-center rounded-10"
                          onClick={() => navigate(SIGNIN_URL)}
                        >
                          Sign in
                        </button>
                        <button
                          className="
                             bg-green-70 my-[1px] py-1 px-2.5
                          text-white font-semibold leading-[22px] text-[16px]
                            flex justify-center items-center rounded-10"
                          onClick={() => navigate(SIGNUP_URL)}
                        >
                          Get started
                        </button>
                      </div>
                    )}
                    {isAuth && (
                      <div className="relative flex flex-row max-xl:hidden">
                        <button
                          className="
                              w-[40px] h-[40px] bg-white my-[1px]
                              font-semibold leading-[22px] text-lg
                              flex justify-center items-center rounded-20"
                          onClick={AccountMenuShow}
                        ></button>
                        {isShowAccountMenu && (
                          <div
                            id="dropdown"
                            className="absolute top-[45px] right-0 bg-green-70 rounded-10 w-[120px] overflow-hidden z-50"
                          >
                            <div
                              className="text-sm text-gray-700
                                        dark:text-gray-200 divide-y  divide-gray-700"
                            >
                              <button
                                className=" text-[14px] font-semibold leading-5 px-[10px] py-[10px] w-full text-left 
                                               hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={handleAccountBtn}
                              >
                                My Account
                              </button>
                              <button
                                className=" text-[14px] font-semibold leading-5 px-[10px] py-[10px] w-full text-left 
                                               hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={handleProfileBtn}
                              >
                                Profile
                              </button>
                              <button
                                className=" text-[14px] font-semibold leading-5 px-[10px] py-[10px] w-full text-left 
                                               hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={handleAvatarMenuClick}
                              >
                                Sign out
                              </button>
                            </div>
                          </div>
                        )}
                        <div className="flex items-center justify-center">
                          <div className="">
                            <MdArrowDropDown />
                          </div>
                        </div>
                        <img
                          src={DivideLine}
                          alt="footer-logo"
                          className="ml-5 max-vs:ml-3 xl:hidden"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <button
                      className="xl:hidden ml-5 max-vs:ml-1"
                      onClick={() => {
                        dispatch(setShowMobileMenu(true));
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="text-2xl">
                        <MdMenu />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobileMenu && (
        <HamburgerMenu
          isShowMobileMenu={() => {
            dispatch(setShowMobileMenu(false));
          }}
        />
      )}
    </div>
  );
};
