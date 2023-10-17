import React from "react";
import { Button } from "UI";
import BackImage from "Assets/images/fundraiser/thankyou-back-img.png";

export const CrowdfundingDonateStep5: React.FC = () => {
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
          <div className="flex justify-center flex-col max-ns:w-full  mt-5 mx-auto text-center text-green-70">
            <div className="generalSmallText">
              You have successfully donated to:
            </div>
            <div className="mt-30 generalSmallText">
              <span className="font-semibold">
                Running a crowdfunding campaign for my football club
              </span>{" "}
              by <span className="font-semibold">Coxhoe Athletic</span> <br />
              <br />
              This fundraiser is now a step closer to a reality, thanks to you!
            </div>
          </div>
          <div className="w-full px-5 md:mt-[50px] mt-30 flex gap-[10px] justify-center">
            <Button
              backgroundColor="bg-white"
              height="h-[50px]"
              width="w-[150px] max-ns:w-1/2"
              text="View"
              textColor="text-green-70"
              textSize="text-[16px] leading-[22px] font-semibold"
            />
            <Button
              backgroundColor="bg-green-70"
              height="h-[50px]"
              width="w-[150px] max-ns:w-1/2"
              text="My Account"
              textColor="text-white"
              textSize="text-[16px] leading-[22px] font-semibold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
