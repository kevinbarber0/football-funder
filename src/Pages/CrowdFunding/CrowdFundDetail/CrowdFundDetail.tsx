import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

import { MAKEAWITHDRAWAL_URL } from "Lib/urls";

import {
  Button,
  CarouselCard,
  CommentList,
  ConfirmModal,
  DownloadModal,
  DownloadTitle,
  LabelAccordion,
  SlideBar,
  TabButton,
  Template,
  UserList,
  UserCommentList,
  VerticalCardLabel,
  WithdrawFundItem,
} from "UI";

import {
  CardMenuTabButtonNameData,
  CrowdFundListData,
  CrowdDetailDateCardLabelData,
  CrowdDetailCommentCardLabelData,
  CrowdDetailClubCardLabelData,
  CrowdDetailLocationCardLabelData,
  UserFundListData,
  UserCommentListData,
  WithdrawFundsItemData,
} from "Config";

import { DetailMenuPagePropsType } from "types";

import { BiPound } from "react-icons/bi";
import ListImage from "Assets/images/detail/crowdfunddetail.png";
import ShareBtnImgOne from "Assets/images/detail/share-btn-one.png";
import ShareBtnImgTwo from "Assets/images/detail/share-btn-two.png";
import ShareBtnImgThree from "Assets/images/detail/share-btn-three.png";
import ShareBtnImgFour from "Assets/images/detail/share-btn-four.png";
import ShareBtnImgFive from "Assets/images/detail/share-btn-five.png";
import FavouriteIcon from "Assets/images/svg/button/favourite-button.svg";
import ShareIcon from "Assets/images/svg/button/share-button.svg";

export const CrowdFundDetail: React.FC<DetailMenuPagePropsType> = ({
  menu,
  pending,
}) => {
  const navigate = useNavigate();

  const [showDownloadModal, setShowDownloadModal] = useState<boolean>(false);

  const [showRewardModal, setShowRewardModal] = useState<boolean>(false);

  const [active, setActive] = useState<string>("view");

  const [crowdFundAmount, setCrowdFundAmount] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [Amount, setAmount] = useState<number>(0);

  const handleSelectValue = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setCrowdFundAmount(parseFloat(e.currentTarget.value));
  };

  const handleOnChange = () => {
    setAmount(crowdFundAmount);
  };

  return (
    <Template>
      {menu && (
        <div className="sticky overflow-scroll bg-white top-[74px] h-[60px] shadow-lg w-full z-20  scrollbar-hidden">
          <div className="h-full lg:w-[1000px] w-[650px] flex items-center gap-5 px-5 lg:mx-auto">
            {CardMenuTabButtonNameData.map((item, key) => {
              return (
                <div key={key}>
                  <TabButton
                    handleClick={() => setActive(item.value)}
                    icon={item.icon}
                    name={item.name}
                    selectedBtnName={active}
                    textColor="text-green-40"
                    textSize="text-sm font-semibold"
                    value={item.value}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
      {showDownloadModal && (
        <DownloadModal
          isShowModal={() => setShowDownloadModal(false)}
          menuTitle="Download list"
          menuContent="Choose the file format you want to download the list of Reward Claimers."
          button1Name="Download list"
          button2Name="Cancel"
        />
      )}
      {showRewardModal && (
        <ConfirmModal
          isShowModal={() => setShowRewardModal(false)}
          menuTitle="Are you sure?"
          menuContent="Once confirmed, we will email the claimer to let them know their reward is on the way. Once actioned, it cannot be undone."
          button1Name="Send Reward"
          button2Name="Cancel"
        />
      )}
      <div
        className={classNames(
          "relative md:pb-[150px] pb-[40px] bl:w-[1080px] w-full mx-auto",
          menu ? "pt-[60px] max-md:pt-[0px]" : "pt-[60px] max-md:pt-0"
        )}
      >
        {(active === "view" ||
          active === "edit" ||
          active === "endfundraiser") && (
          <>
            <div
              className={classNames(
                "sticky  flex justify-end max-bl:hidden",
                menu ? "top-[136px]" : "top-[76px]"
              )}
            >
              <div className="w-96 absolute py-6">
                <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
                  <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
                </div>
                <div className="mt-15 flex justify-between">
                  <div className="buttonText text-green-70">
                    50% of goal funded
                  </div>
                  <div className="buttonText text-green-70">
                    £50,000 of £100,000
                  </div>
                </div>
                <div className="mt-[5px] smallIntroText">120 Supporters</div>
                <div className="mt-30 flex gap-2.5">
                  <VerticalCardLabel
                    cardLabelData={CrowdDetailDateCardLabelData}
                  />
                  <VerticalCardLabel
                    cardLabelData={CrowdDetailCommentCardLabelData}
                  />
                </div>
                <div className="mt-5">
                  <Button
                    backgroundColor="bg-green-10"
                    height="h-[50px]"
                    text="Donate"
                    textColor="text-green-70"
                    textSize="buttonText"
                    width="w-full"
                    disabled={pending}
                  />
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
                <img
                  src={ListImage}
                  alt="listimage"
                  className="w-full bl:hidden"
                />
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
                Fundraiser
                <div className="mt-2.5 flex max-vs:flex-col gap-2.5">
                  <VerticalCardLabel
                    cardLabelData={CrowdDetailClubCardLabelData}
                  />
                  <VerticalCardLabel
                    cardLabelData={CrowdDetailLocationCardLabelData}
                  />
                </div>
              </div>
              <div className="mt-30 stepLabelTitle">
                Running a crowdfunding campaign for my football club
                <div className="mt-4 introText">
                  The subheader for running a crowdfunding campaign for my
                  football club goes here and there’s three lines of copy
                  available to describe it. The subheader for running a
                  crowdfunding campaign for my football club goes here and
                  there’s three lines of copy available to describe it.
                </div>
              </div>
              <div className="mt-15 bl:hidden">
                <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
                  <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
                </div>
                <div className="mt-15 flex justify-between">
                  <div className="buttonText text-green-70">
                    50% of goal funded
                  </div>
                  <div className="buttonText text-green-70">
                    £50,000 of £100,000
                  </div>
                </div>
                <div className="mt-[5px] smallIntroText">120 Supporters</div>
                <div className="mt-30 flex flex-row max-vs:flex-col gap-2.5">
                  <VerticalCardLabel
                    cardLabelData={CrowdDetailDateCardLabelData}
                  />
                  <VerticalCardLabel
                    cardLabelData={CrowdDetailCommentCardLabelData}
                  />
                </div>
                <div className="mt-5">
                  <Button
                    backgroundColor="bg-green-10"
                    height="h-[50px]"
                    text="Donate"
                    textColor="text-green-70"
                    textSize="buttonText"
                    width="w-full"
                    disabled={pending}
                  />
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
                Select amount
                <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                  <Button
                    backgroundColor="bg-green-70"
                    height="h-[50px]"
                    otherStyle="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-10"
                    text="£ 20"
                    textColor="text-white"
                    value={20}
                    handleClick={handleSelectValue}
                  />
                  <Button
                    backgroundColor="bg-green-70"
                    height="h-[50px]"
                    otherStyle="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-10"
                    text="£ 40"
                    textColor="text-white"
                    value={40}
                    handleClick={handleSelectValue}
                  />
                  <Button
                    backgroundColor="bg-green-70"
                    height="h-[50px]"
                    otherStyle="focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-green-10"
                    text="£ 60"
                    textColor="text-white"
                    value={60}
                    handleClick={handleSelectValue}
                  />
                </div>
                <div className="mt-15 grid grid-cols-3 gap-2.5">
                  <div className="col-span-2 relative">
                    <input
                      type="text"
                      value={crowdFundAmount}
                      onChange={handleOnChange}
                      className={classNames(
                        "pl-10 pr-15 py-15 bg-white border border-1 rounded-10 h-[50px]",
                        "appearance-none focus:outline-none w-full generalText text-green-70",
                        pending && "border-opacity-50 text-opacity-50"
                      )}
                      disabled={pending}
                    />
                    <div className="absolute top-0 h-full flex items-center left-4 generalText text-green-10">
                      <BiPound />
                    </div>
                  </div>
                  <div>
                    <Button
                      backgroundColor="bg-green-10"
                      height="h-[50px]"
                      width="w-full"
                      text="Donate"
                      textColor="text-green-70"
                      disabled={pending}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-30 valueText ">
                About the fundraiser
                <div className="mt-2.5 introText">
                  The subheader for running a crowdfunding campaign for my
                  football club goes here and there’s three lines of copy
                  available to describe it.
                  <br />
                  <br /> Sed aliquam, turpis ut varius accumsan, purus felis
                  convallis nibh, eu imperdiet est quam at nisi. Pellentesque
                  erat leo, varius ut tristique quis, viverra vel lacus. Nulla
                  placerat a erat in pharetra. Nunc aliquet ornare viverra.
                  <br />
                  <br /> Nulla pellentesque commodo suscipit. Ut sem ante,
                  viverra vitae diam at, malesuada suscipit ipsum. Morbi
                  hendrerit, nunc at pharetra interdum, tellus diam feugiat
                  elit, non sagittis mi nisl ac ex. Ut nec leo sit amet urna
                  fermentum lacinia ac in lacus. Sed quam odio, pretium in
                  tellus a, tincidunt volutpat ante.
                  <br />
                  <br /> Vivamus venenatis nulla volutpat, ornare velit id,
                  semper purus. Integer porta iaculis cursus. Maecenas eu porta
                  tortor.
                </div>
              </div>
              <div className="mt-30 valueText ">
                Rewards
                <div className="mt-2.5 bg-gray-20 rounded-10 p-2.5">
                  <div className="valueText">
                    Rangers 2020/21 Small Batch Single Malt
                  </div>
                  <div className="mt-15 generalSmallText text-green-70 flex gap-2.5">
                    <div>Donate £30 or more</div>
                    <div className="text-gray-500">|</div>
                    <div>10 available</div>
                  </div>
                  <div className="mt-15 text-[12px] leading-[16px] font-medium text-gray-500 ">
                    A small batch single malt, selected by Rangers Football Club
                    for the 2020/21 Season. Bottled by Douglas Laing & Co. Ltd.
                    Dispatch expected by 31st May 2023
                  </div>
                </div>
                <div className="mt-2.5">
                  <Button
                    backgroundColor="bg-green-10"
                    height="h-[50px]"
                    text="Select reward"
                    textColor="text-green-70"
                    textSize="buttonText"
                    width="w-full"
                    disabled={pending}
                  />
                </div>
              </div>
              <div className="md:mt-12 mt-30 valueText">
                Top 5 Supporters
                <div className="mt-2.5 flex flex-col gap-2.5">
                  {UserFundListData.map((data, index) => {
                    return (
                      <UserList
                        key={index}
                        fund={data.fund}
                        name={data.name}
                        startDay={data.startDay}
                      />
                    );
                  })}
                </div>
                <div className="mt-5 linkTextButton">View all supporters</div>
              </div>
              <div className="mt-30 valueText">
                Comments
                <div className="mt-2.5 flex flex-col gap-2.5">
                  {UserCommentListData.map((data, index) => {
                    return (
                      <UserCommentList
                        key={index}
                        Icon={data.Icon}
                        chat={data.chat}
                        commentNum={data.commentNum}
                        name={data.name}
                        startDay={data.startDay}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="mt-2.5 valueText">
                Leave a comment
                <div className="mt-4">
                  <CommentList />
                </div>
              </div>
              <div className="mt-30">
                <div className="flex justify-between items-center">
                  <div className="generalTitle">Related</div>
                  <div className="buttonText text-green-70">View all</div>
                </div>
                <div className="mt-5 w-full">
                  <SlideBar>
                    {CrowdFundListData.map((item, index) => {
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
          </>
        )}
        {active === "managerewards" && (
          <div className="max-md:mt-30 px-5">
            <div className="xs:w-[500px]">
              <div className="buttonText text-green-70">
                Fundraiser Rewards
                <div className="mt-5 bg-gray-20 rounded-10 p-2.5">
                  <div className="valueText">
                    Rangers 2020/21 Small Batch Single Malt
                  </div>
                  <div className="mt-15 generalSmallText text-green-70 flex gap-2.5">
                    <div>Donate £30 or more</div>
                    <div className="text-gray-10">|</div>
                    <div>10 available</div>
                  </div>
                  <div className="mt-15 text-[12px] leading-[16px] font-medium text-gray-10 ">
                    A small batch single malt, selected by Rangers Football Club
                    for the 2020/21 Season. Bottled by Douglas Laing & Co. Ltd.
                    Dispatch expected by 31st May 2023
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <DownloadTitle
                  title="Claimers list"
                  handleClick={() => setShowDownloadModal(true)}
                />
              </div>
              <div className="mt-5 text-[12px] leading-[16px] font-medium text-gray-10">
                Use the arrows to reveal the details of where your rewards need
                to be sent and select 'Send Reward' once ready to action.
              </div>
              <div className="mt-15">
                <div className="flex flex-col gap-2.5">
                  <LabelAccordion
                    name="Damien Scott"
                    date="1 weeks"
                    address="22 Burdon Place, Sedgefield, Stockton-on-Tees, TS21 3BF"
                    email="damien.scott89@gmail.com"
                    sent={false}
                    handleBtnClick={setShowRewardModal}
                  />
                  <LabelAccordion
                    name="Sheldon Coppper"
                    date="1 weeks"
                    address="22 Burdon Place, Sedgefield, Stockton-on-Tees, TS21 3BF"
                    email="sheldon.copper89@gmail.com"
                    sent={false}
                    handleBtnClick={setShowRewardModal}
                  />
                  <LabelAccordion
                    name="Donart Selimi"
                    date="1 weeks"
                    address="22 Burdon Place, Sedgefield, Stockton-on-Tees, TS21 3BF"
                    email="donart.selimi89@gmail.com"
                    sent={false}
                    handleBtnClick={setShowRewardModal}
                  />
                </div>
              </div>
              <div className="mt-5">
                <DownloadTitle
                  title="Sent rewards list"
                  handleClick={() => setShowDownloadModal(true)}
                />
                <div className="mt-15">
                  <LabelAccordion
                    name="Sheldon Coppper"
                    date="1 weeks"
                    sent={true}
                    handleBtnClick={setShowRewardModal}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {active === "withdrawfunds" && (
          <div className="mt-30 px-5">
            <div className="xs:w-[500px] ">
              <div className="stepLabelTitle">
                Fundraiser Rewards
                <div className="mt-30">
                  <div className="flex flex-col gap-5">
                    {WithdrawFundsItemData.map((item, index) => {
                      return (
                        <WithdrawFundItem
                          intro={item.intro}
                          value={item.value}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="mt-30">
                  <Button
                    backgroundColor="bg-green-10"
                    height="h-[50px]"
                    text="Make withdrawal"
                    textColor="text-green-70"
                    textSize="buttonText"
                    width="w-full"
                    handleClick={() => navigate(MAKEAWITHDRAWAL_URL)}
                  />
                </div>
                <div className="md:mt-12 mt-30 valueText">
                  Donation (120)
                  <div className="mt-2.5 flex flex-col gap-2.5">
                    {UserFundListData.map((data, index) => {
                      return (
                        <UserList
                          key={index}
                          fund={data.fund}
                          name={data.name}
                          startDay={data.startDay}
                        />
                      );
                    })}
                  </div>
                  <div className="mt-5 linkTextButton">View all donations</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Template>
  );
};
