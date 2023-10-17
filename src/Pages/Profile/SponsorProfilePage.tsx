import React from "react";

import { VerticalCardLabel, Template, Button } from "UI";

import {
  ClubLogoItem,
  Gallery,
  // Gradient,
  ProfileImagePanel,
  ProfileNameSection,
  SocialIcons,
} from "./Components";

import { ProfileLocationLabelData } from "Config";

import ClubImage from "Assets/images/profile/sponsor-club.png";
import ClubLogo from "Assets/images/profile/sponsor-logo.png";
import Logo1 from "Assets/images/profile/club-logo.png";
import Logo2 from "Assets/images/profile/clublogo-2.png";

export const SponsorProfilePage = () => {
  return (
    <Template>
      <div className="relative sm:pt-30 sm:pb-[150px] pb-[100px] bg-green-70">
        <div className="flex flex-col items-center">
          <ProfileImagePanel backImage={ClubImage} logo={ClubLogo} />
          <div className="flex flex-col items-center w-full px-5">
            <div className="mt-[80px]">
              <ProfileNameSection name="Coxhoe Athletic FC" />
            </div>
            <div className="mt-30 text-sm text-center text-white">
              Varius habitasse semper convallis mi. Mi adipiscing mauris
              <br />
              pharetra congue lorem nisl felis risus.
            </div>
            <div className="mt-30">
              <VerticalCardLabel cardLabelData={ProfileLocationLabelData} />
            </div>
            <div className="mt-30">
              <SocialIcons />
            </div>
            <div className="mt-[100px]">
              <div className="profileSectionTitle">Supported clubs</div>
              <div className="mt-[60px] flex gap-[50px]">
                <ClubLogoItem clubName="Coxhoe Athletic FC" image={Logo1} />
                <ClubLogoItem clubName="Wolviston FC" image={Logo2} />
              </div>
            </div>
          </div>
          {/* <div className="mt-[60px] w-full">
            <Gradient />
          </div> */}
          <div className="px-5">
            <div className="mt-[60px]">
              <div className="profileSectionTitle">Gallery</div>
              <div className="mt-30">
                <Gallery />
              </div>
            </div>
            <div className="mt-[60px]">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                width="w-full"
                text="Visit club site"
                textColor="text-green-70"
                textSize="buttonText"
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-10 h-12 w-full bg-green-70 -z-10"></div>
      </div>
    </Template>
  );
};
