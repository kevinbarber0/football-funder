import React from "react";
import { Join, SummaryCard, Template } from "UI";

import {
  ADSLISTING_URL,
  CROWDFUNDINGLIST_URL,
  CREATEFUNDRAISER_URL,
  SPONSORSHIPLISTING_URL,
  CREATEADVERTISING_URL,
  CREATESPONSORSHIP_URL,
} from "Lib/urls";
import DesktopBackImage from "Assets/images/howItWorks/howDesktopBackImage.png";
import DesktopMask from "Assets/images/howItWorks/desktopMask.svg";
import JoinBackImg from "Assets/images/home/joinnow-back.png";
import FundraiseCardImage from "Assets/images/home/fundraise.png";
import ContributeCardImage from "Assets/images/home/contribute.png";
import SponsorshipBuyImg from "Assets/images/home/sponsorship-buy-img.png";
import SponsorshipSellImg from "Assets/images/home/sponsorship-sell-img.png";
import AdvertisingBuyImg from "Assets/images/home/advert-buy-img.png";
import AdvertisingSellImg from "Assets/images/home/advert-sell-img.png";

export const HowItWorks: React.FC = () => {
  return (
    <Template title="HowItWorks">
      <div className="bg-green-70 relative pb-[120px] max-ns:pb-[60px]">
        <div className="relative">
          <div className="absolute top-[140px] max-xs:top-[90px] w-full ">
            <div
              className="w-[1000px] max-lg:w-full max-lg:text-center max-lg:px-5 mx-auto 
                            text-[60px] leading-[60px] font-semibold text-white"
            >
              What is Football Funder?
            </div>
          </div>
          <div className="">
            <img
              src={DesktopBackImage}
              alt="background"
              className="w-full  object-cover h-[378px]"
            />
          </div>
        </div>
        <div className="relative mt-[77px] max-ns:mt-[33px] w-full">
          <div className="absolute w-full">
            <img
              src={DesktopMask}
              alt="desktop mask"
              className="object-cover object-top h-[442px] w-full"
            />
          </div>
          <div className="w-full pt-[23px]">
            <div className="relative w-[1000px] max-lg:w-full  mx-auto">
              <div
                className="w-[610px] max-md:w-full max-lg:px-5 
                  max-md:mx-auto flex flex-col gap-5 text-white"
              >
                <div
                  className="text-[32px] max-ns:text-[21px] 
                    max-ns:leading-[28px] leading-[43px] font-semibold"
                >
                  How it works
                </div>
                <div className="text-[16px] leading-[22px] font-medium flex flex-col gap-5">
                  <div>
                    <span>
                      Football Funder is a platform for organisations of any
                      size to maximise <br className="max-md:hidden"></br>
                    </span>
                    <span>the financial revenue of their operations.</span>
                  </div>
                  <div>
                    We’re flying the fundraising flag for footballing
                    organisations at all levels of football across the United
                    Kingdom.
                  </div>
                  <div>
                    The platform offers users three key levers to pull, either
                    for certain needs, or assets that can generate revenue:
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="mt-[150px] bl:w-[1020px] w-[490px] max-xs:w-full mx-auto px-5 flex flex-col">
                <div className="font-semibold text-[32px] leading-9 text-white">
                  Fundraising
                </div>
                <div className="mt-15 text-green-300 text-base font-medium">
                  Campaign tooling and promotion for football specific
                  fundraising.
                </div>
                <div className="mt-5 flex bl:flex-row flex-col justify-center gap-5">
                  <SummaryCard
                    backgroundImage={FundraiseCardImage}
                    buttonName="Start Now"
                    description="Stand out from the crowd and raise funds on a dedicated football platform."
                    linkUrl={CREATEFUNDRAISER_URL}
                    title="Fundraise"
                  />
                  <SummaryCard
                    backgroundImage={ContributeCardImage}
                    buttonName="Explore"
                    description="Whether here for a cause you support, or just browsing, you can start donating below."
                    linkUrl={CROWDFUNDINGLIST_URL}
                    title="Contribute"
                  />
                </div>
              </div>
              <div className="mt-[100px] bl:w-[1020px] w-[490px] max-xs:w-full mx-auto px-5 flex flex-col">
                <div className="mt-30 font-semibold text-[32px] leading-9 text-white">
                  Advertising
                </div>
                <div className="mt-15 text-green-300 text-base font-medium">
                  Bring opportunities to life and build relationships with
                  sponsors
                </div>
                <div className="mt-5 flex bl:flex-row flex-col justify-center gap-5">
                  <SummaryCard
                    backgroundImage={AdvertisingBuyImg}
                    buttonName="Explore"
                    description="Interested in showcasing your brand using football? Browse opportunities in your area."
                    linkUrl={ADSLISTING_URL}
                    title="Buy"
                  />
                  <SummaryCard
                    backgroundImage={AdvertisingSellImg}
                    buttonName="Sell your ads"
                    description="List advertising opportunities to brands and put your assets to the best use possible."
                    linkUrl={CREATEADVERTISING_URL}
                    title="Sell"
                  />
                </div>
              </div>
              <div className="mt-[100px] bl:w-[1020px] w-[490px] max-xs:w-full mx-auto px-5 flex flex-col">
                <div className="font-semibold text-[32px] leading-9 text-white">
                  Sponsorship
                </div>
                <div className="mt-15 text-green-300 text-base font-medium">
                  Bring opportunities to life and build relationships with
                  sponsors
                </div>
                <div className="mt-5 flex bl:flex-row flex-col justify-center gap-5">
                  <SummaryCard
                    backgroundImage={SponsorshipBuyImg}
                    buttonName="Explore"
                    description="Amplify the presence of your business locally or nationally through football sponsorship."
                    linkUrl={SPONSORSHIPLISTING_URL}
                    title="Buy"
                  />
                  <SummaryCard
                    backgroundImage={SponsorshipSellImg}
                    buttonName="Sell your spots"
                    description="Attract sponsors to your club or organisation by listing your important sponsorship deals."
                    linkUrl={CREATESPONSORSHIP_URL}
                    title="Sell"
                  />
                </div>
              </div>
              <div className="mt-[100px]">
                <Join image={JoinBackImg} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-38px] bg-green-70 p-5 z-[-10] w-full"></div>
      </div>
    </Template>
  );
};
