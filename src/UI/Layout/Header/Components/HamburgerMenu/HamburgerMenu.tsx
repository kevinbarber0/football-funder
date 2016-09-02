import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  HamburgerSignInButton,
  Search,
  SocialSiteLink,
  HamburgerItem,
  HamburgerSubMenuItem,
} from "UI";
import {
  homeButtonData,
  exploreButtonData,
  advertisingButtonData,
  sponsorshipButtonData,
  fundraisingButtonData,
  feeButtonData,
  faqButtonData,
  aboutButtonData,
  supprotButtonData,
  HamburgerSearchData,
} from "Config";
import { HOME_URL } from "Lib/urls";
import { AppState } from "App/reducers";
import { setShowMobileMenu } from "Data/LayoutState";
import HeaderMenuLogo from "Assets/images/svg/logo/hamburger-menu-logo.svg";
import { MdClose } from "react-icons/md";

type hamburgerMenuProps = {
  isShowMobileMenu: () => void;
};

export const HamburgerMenu: React.FC<hamburgerMenuProps> = ({
  isShowMobileMenu,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state: AppState) => state.auth.loggedIn);
  const { userInfo } = useSelector((state: any) => state.user);
  const isFundraiserAccountUpdated = userInfo.fundraiser_first_name;
  const isAdvertiserAccountUpdated = userInfo.advertiser_first_name;
  const isSponsorshipAccountUpdated = userInfo.sponsorship_first_name;
  const logOut = () => {
    dispatch({ type: "RESET" });
    dispatch(setShowMobileMenu(false));
    navigate(HOME_URL);
  };
  return (
    <div className="z-50">
      <div className="w-full bg-green-70">
        <div className="ns:w-[430px] mx-auto p-5">
          <div className="flex flex-row justify-between">
            <img src={HeaderMenuLogo} alt="Hamburger-logo" />
            <button onClick={isShowMobileMenu}>
              <div className="text-[24px] text-white">
                <MdClose />
              </div>
            </button>
          </div>
          <div className="mt-30">
            <Search data={HamburgerSearchData} />
          </div>
          {/* Part - Sign in / Sign Up Button */}
          <div className="mt-[15px]">
            <HamburgerSignInButton />
          </div>
          {/* Part -  Hamburger List */}
          <div className="mt-30">
            <div className="flex flex-col divide-y divide-solid divide-green-30">
              <HamburgerItem Item={homeButtonData} />
              <HamburgerItem Item={exploreButtonData} />
              <HamburgerSubMenuItem
                List={fundraisingButtonData(isAuth, isFundraiserAccountUpdated)}
              />
              <HamburgerSubMenuItem
                List={advertisingButtonData(isAuth, isAdvertiserAccountUpdated)}
              />
              <HamburgerSubMenuItem
                List={sponsorshipButtonData(
                  isAuth,
                  isSponsorshipAccountUpdated
                )}
              />
              <HamburgerItem Item={feeButtonData} />
              <HamburgerItem Item={faqButtonData} />
              <HamburgerItem Item={aboutButtonData} />
              <HamburgerItem Item={supprotButtonData} />
              {isAuth && (
                <button
                  className="text-green-10 font-medium text-[16px] leading-[22px] text-left px-[10px] py-[20px]"
                  onClick={logOut}
                >
                  Sign out
                </button>
              )}
              <div className="px-[10px] py-30">
                <SocialSiteLink />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
