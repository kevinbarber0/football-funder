import React from "react";
import { useNavigate } from "react-router";
import { EXPLORE_URL, HOWITWORKS_URL } from "Lib/urls";
import { CarouselCard, SlideBar, Join, SummaryCard, Template } from "UI";
import { CarouselCardData } from "Config";
import HomeBack from "Assets/images/home/home-back.png";
import VideoBackMask from "Assets/images/home/video-back-mask.png";
import VideoPlayImg from "Assets/images/home/video-play.svg";
import PlayerIcon from "Assets/images/home/icon-player.svg";
import JoinBackImg from "Assets/images/home/joinnow-back.png";
import {
  CROWDFUNDINGLIST_URL,
  FUNDRAISERSIGNUP_URL,
  CREATEFUNDRAISER_URL,
  ADSLISTING_URL,
  ADVERTISINGSIGNUP_URL,
  CREATEADVERTISING_URL,
  SPONSORSHIPLISTING_URL,
  SPONSORSHIPSIGNUP_URL,
  CREATESPONSORSHIP_URL,
} from "Lib/urls";
import FundraiseCardImage from "Assets/images/home/fundraise.png";
import ContributeCardImage from "Assets/images/home/contribute.png";
import SponsorshipBuyImg from "Assets/images/home/sponsorship-buy-img.png";
import SponsorshipSellImg from "Assets/images/home/sponsorship-sell-img.png";
import AdvertisingBuyImg from "Assets/images/home/advert-buy-img.png";
import AdvertisingSellImg from "Assets/images/home/advert-sell-img.png";
import { useSelector } from "react-redux";
import { AppState } from "App/reducers";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const isAuth = useSelector((state: AppState) => state.auth.loggedIn);
  return (
    <Template title="Home">
      <div className="relative bg-green-70">
        <div className="pb-[150px] max-ns:pb-[55px]">
          <div className="relative">
            <div
              className="absolute bg-cover bg-no-repeat bg-top w-full 
              h-[1935px] max-lg:h-[2423px] max-2xs:h-[2387px] rounded-b-3xl  overflow-hidden"
              style={{
                backgroundImage: `url(${HomeBack})`,
              }}
            ></div>
            <div className="relative">
              <div className="px-5">
                <div className="py-[100px]"></div>
                <div className="bl:w-[1000px] mx-auto w-full">
                  <div className="w-[570px] max-sm:w-full max-bl:mx-auto">
                    <div
                      className="max-sm:text-center font-semibold text-[38px] max-2xs:text-[30px] 
                    leading-[52px] max-2xs:leading-[40px] text-white max-sm:px-5"
                    >
                      Raise funds with our fundraising, advertising and
                      sponsorship engine.
                    </div>
                    <div
                      className="
                      w-full mt-30
                      flex max-sm:justify-center gap-[10px]
                      font-semibold text-base max-vs:text-sm
                      "
                    >
                      <button
                        className="
                      w-[150px] max-ns:w-[calc(50%-45px)] h-[50px]
                      bg-white rounded-10
                      "
                        onClick={() => {
                          navigate(EXPLORE_URL);
                        }}
                      >
                        Explore
                      </button>
                      <button
                        className="
                      w-[150px] max-ns:w-[calc(50%-45px)] h-[50px]
                      bg-green-10 rounded-10
                      "
                        onClick={() => {
                          navigate(HOWITWORKS_URL);
                        }}
                      >
                        How it works
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bl:w-[1020px] w-[490px] max-xs:w-full mx-auto px-5 mt-[100px] flex flex-col gap-5">
                <div className="font-semibold text-[32px] leading-9 text-white">
                  Fundraising
                </div>
                <div className="flex bl:flex-row flex-col justify-center gap-5">
                  <SummaryCard
                    backgroundImage={FundraiseCardImage}
                    buttonName="Start Now"
                    description="Stand out from the crowd and raise funds on a dedicated football platform."
                    linkUrl={
                      isAuth ? CREATEFUNDRAISER_URL : FUNDRAISERSIGNUP_URL
                    }
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
              <div className="mt-[120px]">
                <div className="bl:w-[1120px] w-full mx-auto max-bl:px-5">
                  <div className="lg:w-[980px] w-full mx-auto flex justify-between items-center">
                    <div className="font-semibold text-[32px] leading-[43px] ">
                      Featured
                    </div>
                    <div className="font-semibold text-[14px] leading-[19px] ">
                      View all
                    </div>
                  </div>
                  <div className="mt-5 mx-auto">
                    <SlideBar>
                      {CarouselCardData.map((item, index) => {
                        return (
                          <div key={index} className="w-[330px] px-2">
                            <CarouselCard account={false} cardData={item} />
                          </div>
                        );
                      })}
                    </SlideBar>
                  </div>
                </div>
              </div>
              <div className="bl:w-[1020px] w-[490px] max-xs:w-full mx-auto px-5 mt-10 flex flex-col gap-5">
                <div className="mt-5 font-semibold text-[32px] leading-9 text-green-70">
                  Advertising
                </div>
                <div className="flex bl:flex-row flex-col justify-center gap-5">
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
                    linkUrl={
                      isAuth ? CREATEADVERTISING_URL : ADVERTISINGSIGNUP_URL
                    }
                    title="Sell"
                  />
                </div>
              </div>
              <div className="mt-[150px] bl:w-[1020px] w-[490px] max-xs:w-full mx-auto flex flex-col gap-5 px-5">
                <div className="font-semibold text-[32px] leading-9 text-white">
                  Sponsorship
                </div>
                <div className="flex bl:flex-row flex-col justify-center gap-5">
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
                    linkUrl={
                      isAuth ? CREATESPONSORSHIP_URL : SPONSORSHIPSIGNUP_URL
                    }
                    title="Sell"
                  />
                </div>
              </div>
              <div className="mt-20">
                <div
                  className="bg-cover bg-no-repeat bg-top h-[442px] max-md:h-[230px]"
                  style={{
                    backgroundImage: `url(${VideoBackMask})`,
                  }}
                >
                  <div className="bl:w-[1020px]  w-full px-5 mx-auto">
                    <div className="text-white font-semibold text-[32px] leading-[43px] ">
                      Explore Football Funder
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative mt-5 mx-auto rounded-20 overflow-hidden">
                        <img
                          src={VideoPlayImg}
                          alt="video-player"
                          className="max-sm:h-[250px] w-full object-cover"
                        />
                        <div className="absolute top-0 w-full h-full flex justify-center items-center">
                          <img src={PlayerIcon} alt="player-icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[150px] px-5 ">
                <Join image={JoinBackImg} />
              </div>
            </div>
            <div className="absolute bottom-[-180px] bg-green-70 py-[20px] w-full z-[-10]"></div>
          </div>
        </div>
      </div>
    </Template>
  );
};
