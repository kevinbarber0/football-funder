import React from "react";

import { BuyerCard, VerticalCardLabel, Template, VerticalCard } from "UI";

import {
  FactItem,
  // Gradient,
  NoticeBoard,
  ProfileImagePanel,
  ProfileNameSection,
  SocialIcons,
} from "./Components";

import {
  IndividualFactItemData,
  CrowdFundListData,
  ProfileLocationLabelData,
} from "Config";

import ClubImage from "Assets/images/profile/club-image.png";
import IndividualImage from "Assets/images/profile/individual.png";
import SmallCardImg1 from "Assets/images/explore/card-b.png";
import SmallCardImg2 from "Assets/images/explore/card-c.png";

export const IndividualProfilePage = () => {
  return (
    <Template>
      <div className="relative sm:pt-30 sm:pb-[150px] pb-[100px] bg-green-70">
        <div className="flex flex-col items-center">
          <ProfileImagePanel backImage={ClubImage} logo={IndividualImage} />
          <div className="flex flex-col items-center w-full px-5">
            <div className="mt-[80px]">
              <ProfileNameSection name="Sheldon Cooper" />
            </div>
            <div className="mt-30 text-sm text-white">
              Coxhoe Athletic FC - Varius habitasse semper convallis mi. <br />
              Mi adipiscing mauris pharetra congue lorem nisl felis risus.
            </div>
            <div className="mt-30">
              <VerticalCardLabel cardLabelData={ProfileLocationLabelData} />
            </div>
            <div className="mt-30">
              <SocialIcons />
            </div>
          </div>
          {/* <div className="mt-[60px] w-full">
            <Gradient />
          </div> */}
          <div className="mm:w-[800px] max-mm:px-5">
            <div className="mt-[100px]">
              <div className="profileSectionTitle">Fundraisers</div>
              <div className="mt-30">
                <NoticeBoard />
              </div>
              <div className="mt-30">
                <VerticalCard
                  cardData={CrowdFundListData[0]}
                  profileCard={true}
                />
              </div>
              <div className="mt-30 flex md:flex-row flex-col items-center gap-5">
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg1} />
                </div>
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg2} />
                </div>
              </div>
            </div>
            <div className="mt-[100px]">
              <div className="profileSectionTitle">Supported fundraisers</div>
              <div className="mt-30">
                {" "}
                <NoticeBoard />
              </div>
              <div className="mt-30 flex md:flex-row flex-col items-center gap-5">
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg1} />
                </div>
                <div className="md:w-1/2">
                  <BuyerCard cost="50 % funded" image={SmallCardImg2} />
                </div>
              </div>
            </div>
            <div className="mt-[60px]">
              <div className="profileSectionTitle">Facts</div>
              <div className="mt-30 flex md:flex-row md:justify-between flex-col gap-y-5">
                {IndividualFactItemData.map((item, index) => {
                  return (
                    <FactItem
                      key={index}
                      title={item.title}
                      value={item.value}
                      textColor="text-white"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 h-12 w-full bg-green-70 -z-10"></div>
      </div>
    </Template>
  );
};
