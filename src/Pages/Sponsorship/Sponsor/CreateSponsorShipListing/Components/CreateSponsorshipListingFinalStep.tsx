import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "UI";
import BackImage from "Assets/images/fundraiser/thankyou-back-img.png";
import { SPONSORSHIPLISTING_URL,MYACCOUNT_URL } from "Lib/urls";

export const CreateSponsorshipLisingFinalStep: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="ns:mt-[60px] mt-[40px] ns:mb-[500px] mb-[100px] flex justify-center px-5">
      <div className="relative rounded-20 overflow-hidden">
        <div>
          <img
            src={BackImage}
            alt="backimage"
            className="object-cover h-[350px] overflow-hidden"
          />
        </div>
        <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center px-[10px]">
          <div className="text-[50px] leading-[60px] font-semibold text-green-70">
            Thank you!
          </div>
          <div className="md:w-[564px] w-[390px] max-ns:w-full  mt-5 mx-auto text-center text-green-70">
            <div className="generalSmallText">
              Every fundraiser undergoes a quick{" "}
              <span className="font-semibold">VAR</span> review. 
            </div>
            <div className="mt-30 generalSmallText">
              We’ll have you up and running soon, and we’ll send you an email
              when your listing is live - but you can view how it will look
              below.
            </div>
          </div>
          <div className="w-full px-5 md:mt-[50px] mt-30 flex gap-[10px] justify-center">
            <Button
              backgroundColor="bg-white"
              height="h-[50px]"
              width="w-[150px] max-ns:w-1/2"
              text="View listing"
              textColor="text-green-70"
              textSize="text-[16px] leading-[22px] font-semibold"
              handleClick={() => navigate(SPONSORSHIPLISTING_URL)}
            />
            <Button
              backgroundColor="bg-green-70"
              height="h-[50px]"
              width="w-[150px] max-ns:w-1/2"
              text="My Account"
              textColor="text-white"
              textSize="text-[16px] leading-[22px] font-semibold"
              handleClick={() => navigate(MYACCOUNT_URL)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
