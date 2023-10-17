import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Template } from "UI";
import { FAQ_URL } from "Lib/urls";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";

export const Support: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Template>
      <div className="relative md:pt-5 pt-[10px] md:pb-[320px] pb-[250px]">
        <div className="relative sm:pt-[45px] pt-[25px]">
          <div className="absolute w-full top-0 z-0">
            <img
              src={ExploreMask}
              alt="explore back mask"
              className="object-cover w-full max-ns:hidden"
            />
            <img
              src={MobileExploreMask}
              alt="explore back mask"
              className="object-cover w-full ns:hidden"
            />
          </div>
          <div className="relative xm:w-[870px] w-full px-5 mx-auto z-10">
            <div className="generalTitle">Support</div>
            <div className="mt-30 buttonText text-green-70">
              Have a question? We're here to support you.
            </div>
            <div className="mt-2.5 introText">
              You can email us directly at{" "}
              <span className="text-green-70 font-semibold underline">
                support@footballfunder.com
              </span>{" "}
              and we will be back in touch within 24 hours.
            </div>
            <div className="mt-30 ns:w-[390px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Email us"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
            <div className="mt-30 buttonText text-green-70">
              We've also put together some Frequently Asked Questions which you
              may find useful.
            </div>
            <div className="mt-30 ns:w-[390px] w-full">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="FAQ"
                textColor="text-green-70"
                textSize="buttonText"
                handleClick={() => {
                  navigate(FAQ_URL);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
