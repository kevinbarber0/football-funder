import React from "react";
import { Button, Template } from "UI";
import BackImage from "Assets/images/fundraiser/thankyou-back-img.png";

export const SellerFinalPage: React.FC = () => {
  return (
    <Template>
      <div className="ns:mt-[60px] mt-[40px] ns:mb-[250px] mb-[120px] flex justify-center px-5">
        <div className="relative rounded-20 overflow-hidden">
          <div className="relative">
            <img
              src={BackImage}
              alt="backimage"
              className="object-cover h-[350px] max-2xs:h-[370px] max-ns:h-[400px] max-vs:h-[420px] overflow-hidden"
            />
            <div className="absolute top-0 w-full h-full flex flex-col items-center justify-center py-30 px-5">
              <div className="text-[50px] leading-[60px] font-semibold text-green-70 max-vs:text-4xl">
                Thank you!
              </div>
              <div className="flex justify-center flex-col max-ns:w-full  mt-5 mx-auto text-center text-green-70">
                <div className="generalSmallText">
                  You will be notified when the buyer has countersigned and
                  processed payment. 
                  <br />
                  <br /> We will then coordinate with you and them on artwork
                  and anything else to bring the agreement to life.
                  <br />
                  <br />
                  Any questions? You can get in touch at{" "}
                  <span className="font-semibold">
                    support@footballfunder.com.
                  </span>
                </div>
              </div>
              <div className="w-full md:mt-[50px] mt-30 flex gap-[10px] justify-center">
                <Button
                  backgroundColor="bg-white"
                  height="h-[50px]"
                  width="w-[150px] max-ns:w-1/2"
                  text="My Profile"
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
      </div>
    </Template>
  );
};
