import React from "react";
import { UserList, Template } from "UI";
import { AllSupporterData } from "Config";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";

interface ViewPagePropsType {
  title: string;
}

export const View: React.FC<ViewPagePropsType> = ({ title }) => {
  return (
    <Template>
      <div className="relative md:pt-5 pt-[10px] md:pb-[100px] pb-[50px]">
        <div className="relative sm:pt-[45px] pt-[25px]">
          <div className="absolute w-full top-0">
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
          <div className="xm:w-[900px] w-full px-5 mx-auto">
            <div className="generalTitle">{title}</div>
            <div className="mt-5 ">{/* <StepperBackButton /> */}</div>
            <div className="mt-30 text-xs text-gray-10">
              Fundraiser
              <div className="mt-1 buttonText text-green-70">
                Running a crowdfunding campaign for my football club
                <div className="mt-30 flex flex-wrap gap-2.5">
                  {AllSupporterData.map((data, index) => {
                    return (
                      <div className="md:w-[calc(50%-10px)] w-full">
                        <UserList
                          key={index}
                          fund={data.fund}
                          name={data.name}
                          startDay={data.startDay}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="mt-30 flex justify-center darkIntroText underline underline-offset-2">
              Show 10 more
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
