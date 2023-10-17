import React from "react";

import { LandingSignUpForm, IPadBackImg } from "Pages";
import { SocialSiteLink, Footer } from "UI";
import { IPadData } from "Config";

import TopImg from "Assets/images/landing/desktop-logo-back-image.png";
import LandingLogoImage from "Assets/images/svg/logo/landing-logo.svg";
import SurveyMask from "Assets/images/landing/survery-mask.png";

export function Landing() {
  return (
    <div className="bg-green-70">
      {/* part-landing page background */}
      <div
        className="bg-cover bg-no-repeat bg-bottom"
        style={{
          backgroundImage: `url(${TopImg})`,
        }}
      >
        {/* part-Landing Page Logo */}
        <div className="pt-[330px] z-30 w-full">
          <img
            src={LandingLogoImage}
            alt="Football Funder"
            className="mx-auto"
          />
          <div
            className="block mt-30 pb-[64px] mx-auto
              w-[368px] sm:w-[498px] max-ns:w-[280px]"
          >
            <p className="text-base font-medium text-center leading-[22px] text-white">
              Empowering football clubs and organisations through fundraising,
              advertising and sponsorship support.
            </p>
          </div>
        </div>
      </div>
      {/* Part-Sign In */}
      <LandingSignUpForm />
      <div className="px-5">
        <div className="mt-[110px]">
          {IPadData.map((data, index) => {
            return (
              <div key={index} className="mb-[100px]">
                <IPadBackImg value={data} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-[100px] h-[310px]">
        <div
          className="relative bg-auto bg-no-repeat bg-center h-[310px] mx-auto "
          style={{
            backgroundImage: `url(${SurveyMask})`,
          }}
        >
          <div className="absolute top-[85px] w-full">
            <div className="mx-auto w-[330px] max-ns:w-[300px]">
              <p className="text-[21px] font-semibold leading-[28px] text-white mx-auto">
                Take our Grassroots Survey and win{" "}
                <span className="text-green-10">£100</span> in vouchers
              </p>
              <button className="w-full mt-[10px] bg-green-10 rounded-10 px-[10px] py-[15px] text-center font-semibold text-[16px] leading-[20px]">
                Survey
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* part - socialSite link */}
      <div className="mt-[50px] px-[31px]">
        <p className="text-[16px] font-medium leading-[22px] text-white text-center">
          Follow our social media for updates
        </p>
        <div className="mt-5 flex justify-center">
          <SocialSiteLink />
        </div>
      </div>
      {/* part - footer */}
      <div className="mt-[150px]">
        <Footer />
      </div>
    </div>
  );
}
