import React from "react";
import classNames from "classnames";
import {
  CarouselCard,
  VerticalCardLabel,
  Template,
  Button,
  SlideBar,
} from "UI";
import {
  AdDetailPeriodCardLabelData,
  AdDetailClubTypeCardLabelData,
  AdDetailCommencementDateLabelData,
  SponsorshipListData,
  SponsorshipDetailClubCardLabelData,
  SponsorshipDetailLocationCardLabelData,
} from "Config";
import { DetailPagePropsType } from "types";
import ListImage from "Assets/images/detail/sponsorshipdetail.png";
import ShareBtnImgOne from "Assets/images/detail/share-btn-one.png";
import ShareBtnImgTwo from "Assets/images/detail/share-btn-two.png";
import ShareBtnImgThree from "Assets/images/detail/share-btn-three.png";
import ShareBtnImgFour from "Assets/images/detail/share-btn-four.png";
import ShareBtnImgFive from "Assets/images/detail/share-btn-five.png";
import FavouriteIcon from "Assets/images/svg/button/favourite-button.svg";
import ShareIcon from "Assets/images/svg/button/share-button.svg";

export const SponsorshipDetail: React.FC<DetailPagePropsType> = ({
  pending,
}) => {
  return (
    <Template>
      <div className="pt-[60px] max-md:pt-0 md:pb-[150px] pb-[40px] bl:w-[1080px] w-full mx-auto">
        <div className="sticky top-[76px] flex justify-end max-bl:hidden">
          <div className="w-96 absolute py-6">
            <div className="flex gap-2.5">
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                width="w-[100px]"
                text="￡15,000"
                textColor="text-white"
                textSize="buttonText"
                disabled={pending}
              />
              <div className="flex-1">
                <Button
                  backgroundColor="bg-green-10"
                  height="h-[50px]"
                  width="w-full"
                  text="Enquire"
                  textColor="text-green-70"
                  textSize="buttonText"
                  disabled={pending}
                />
              </div>
            </div>
            <div className="mt-2.5">
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                width="w-full"
                text="Buy Now"
                textColor="text-white"
                textSize="buttonText"
                disabled={pending}
              />
            </div>
            <div className="mt-[5px] smallIntroText">
              ￡1,250 per month / 12 months
            </div>
            <div className="mt-2.5 flex gap-2.5">
              <VerticalCardLabel cardLabelData={AdDetailPeriodCardLabelData} />
              <VerticalCardLabel
                cardLabelData={AdDetailClubTypeCardLabelData}
              />
            </div>
            <div className="mt-2.5">
              <div className=" smallIntroText">
                Commencement date
                <div className="mt-[5px]">
                  <VerticalCardLabel
                    cardLabelData={AdDetailCommencementDateLabelData}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 valueText">
              Share
              <div className="mt-2.5 flex gap-2.5">
                <button>
                  <img src={ShareBtnImgOne} alt="firstbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgTwo} alt="secondbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgThree} alt="threebtn" />
                </button>
                <button>
                  <img src={ShareBtnImgFour} alt="fourbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgFive} alt="fivebtn" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-30 items-center max-bl:hidden">
          <div className="relative rounded-20 overflow-hidden">
            <img src={ListImage} alt="listimage" />
            <div className="absolute top-0 w-full xs:px-5 px-2.5 py-5  flex justify-between">
              <div
                className={classNames(
                  "py-[5px]  rounded-10 ns:text-[14px] text-[12px] leading-[20px]  ns:px-[10px] px-2 font-medium",
                  pending
                    ? "bg-green-70 text-white"
                    : "bg-green-10 text-green-70"
                )}
              >
                {pending ? "Pending" : "Live"}
              </div>
              <div className="flex gap-[10px]">
                <button className="rounded-10">
                  <img src={FavouriteIcon} alt="favourite" />
                </button>
                <button className="rounded-10">
                  <img src={ShareIcon} alt="share" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[650px] w-full max-bl:mx-auto">
          <div className="relative md:rounded-20 md:overflow-hidden ">
            <img src={ListImage} alt="listimage" className="w-full bl:hidden" />
            <div className="absolute top-0 w-full xs:px-5 px-2.5 py-5  flex justify-between">
              <div
                className={classNames(
                  "py-[5px]  rounded-10 ns:text-[14px] text-[12px] leading-[20px]  ns:px-[10px] px-2 font-medium",
                  pending
                    ? "bg-green-70 text-white"
                    : "bg-green-10 text-green-70"
                )}
              >
                {pending ? "Pending" : "Live"}
              </div>
              <div className="flex gap-[10px]">
                <button className="rounded-10">
                  <img src={FavouriteIcon} alt="favourite" />
                </button>
                <button className="rounded-10">
                  <img src={ShareIcon} alt="share" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[670px] w-full px-5 max-bl:mx-auto">
          <div className="mt-5 valueText">
            Organisation
            <div className="mt-2.5 flex max-vs:flex-col gap-2.5">
              <VerticalCardLabel
                cardLabelData={SponsorshipDetailClubCardLabelData}
              />
              <VerticalCardLabel
                cardLabelData={SponsorshipDetailLocationCardLabelData}
              />
            </div>
          </div>
          <div className="mt-30 stepLabelTitle">
            Front of shirt sponsorship - Season 2023/24
            <div className="mt-4 introText">
              The subheader for running a crowdfunding campaign for my football
              club goes here and there’s three lines of copy available to
              describe it. The subheader for running a crowdfunding campaign for
              my football club goes here and there’s three lines of copy
              available to describe it.
            </div>
          </div>
          <div className="mt-15 bl:hidden">
            <div className="flex gap-2.5">
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                width="w-[100px]"
                text="￡15,000"
                textColor="text-white"
                textSize="buttonText"
                disabled={pending}
              />
              <div className="flex-1">
                <Button
                  backgroundColor="bg-green-10"
                  height="h-[50px]"
                  width="w-full"
                  text="Enquire"
                  textColor="text-green-70"
                  textSize="buttonText"
                  disabled={pending}
                />
              </div>
            </div>
            <div className="mt-2.5">
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                width="w-full"
                text="Buy Now"
                textColor="text-white"
                textSize="buttonText"
                disabled={pending}
              />
            </div>
            <div className="mt-[5px] smallIntroText">
              ￡1,250 per month / 12 months
            </div>
            <div className="mt-5 flex gap-2.5">
              <VerticalCardLabel cardLabelData={AdDetailPeriodCardLabelData} />
              <VerticalCardLabel
                cardLabelData={AdDetailClubTypeCardLabelData}
              />
            </div>
            <div className="mt-5">
              <div className="smallIntroText">
                Commencement date
                <div className="mt-[5px]">
                  <VerticalCardLabel
                    cardLabelData={AdDetailCommencementDateLabelData}
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 valueText">
              Share
              <div className="mt-2.5 flex gap-2.5">
                <button>
                  <img src={ShareBtnImgOne} alt="firstbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgTwo} alt="secondbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgThree} alt="threebtn" />
                </button>
                <button>
                  <img src={ShareBtnImgFour} alt="fourbtn" />
                </button>
                <button>
                  <img src={ShareBtnImgFive} alt="fivebtn" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-30 valueText ">
            Advert description
            <div className="mt-2.5 introText">
              The subheader for running a crowdfunding campaign for my football
              club goes here and there’s three lines of copy available to
              describe it.
              <br />
              <br /> Sed aliquam, turpis ut varius accumsan, purus felis
              convallis nibh, eu imperdiet est quam at nisi. Pellentesque erat
              leo, varius ut tristique quis, viverra vel lacus. Nulla placerat a
              erat in pharetra. Nunc aliquet ornare viverra.
              <br />
              <br /> Nulla pellentesque commodo suscipit. Ut sem ante, viverra
              vitae diam at, malesuada suscipit ipsum. Morbi hendrerit, nunc at
              pharetra interdum, tellus diam feugiat elit, non sagittis mi nisl
              ac ex. Ut nec leo sit amet urna fermentum lacinia ac in lacus. Sed
              quam odio, pretium in tellus a, tincidunt volutpat ante.
              <br />
              <br /> Vivamus venenatis nulla volutpat, ornare velit id, semper
              purus. Integer porta iaculis cursus. Maecenas eu porta tortor.
            </div>
          </div>
          <div className="mt-30 valueText ">
            Perks
            <div className="mt-2.5 bg-gray-20 rounded-10 p-2.5">
              <div className="valueText">Half Time Draw</div>
              <div className="mt-15 text-[12px] leading-[16px] font-medium text-gray-500 ">
                Opportunity to run the half time Rising Stars lottery draw,
                present the cheque to the previous home game's winner(s) and
                have your brand announced over the PA system prior to and after
                the draw taking place.
              </div>
            </div>
            <div className="mt-2.5">
              <Button
                backgroundColor="bg-green-10"
                height="h-[50px]"
                text="Enquire"
                textColor="text-green-70"
                textSize="buttonText"
                width="w-full"
                disabled={pending}
              />
            </div>
            <div className="mt-2.5">
              <Button
                backgroundColor="bg-green-70"
                height="h-[50px]"
                width="w-full"
                text="Buy Now"
                textColor="text-white"
                textSize="buttonText"
                disabled={pending}
              />
            </div>
          </div>
          <div className="mt-30">
            <div className="flex justify-between items-center">
              <div className="generalTitle">Related</div>
              <div className="buttonText text-green-70">View all</div>
            </div>
            <div className="mt-5">
              <SlideBar>
                {SponsorshipListData.map((item, index) => {
                  return (
                    <div key={index} className="w-[320px] p-2">
                      <CarouselCard account={false} cardData={item} />
                    </div>
                  );
                })}
              </SlideBar>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
