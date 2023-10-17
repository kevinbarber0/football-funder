import React, { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import classNames from "classnames";
import { useAxios } from "Lib";
import {
  Accordion,
  CarouselCard,
  DownloadTitle,
  GeneralCheckBoxList,
  LabelAccordion,
  ConfirmModal,
  DownloadModal,
  MyDropdown,
  MyTab,
  PageTitle,
  PageSectionTitle,
  Select,
  TabButton,
  Template,
  VerticalCardLabel,
} from "UI";

import {
  AccountDropdownData,
  AccountPageTabButtonNameData,
  AccountClubTypeCardLabelData,
  AccountLocationCardLabelData,
  CampaignCheckboxData,
  CardDropdownData,
  ClaimersListData,
  CrowdFundListData,
  RewardsSortbyData,
} from "Config";

import { MyTabsDataType, QueryKey } from "types";

import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import AccountImage from "Assets/images/account/account-image.png";
import { HiOutlinePencil } from "react-icons/hi";
import { MdAnnouncement } from "react-icons/md";
import { BiCheck } from "react-icons/bi";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import { listingDataFetch } from "Utils";

export const MyAccountPage: React.FC = () => {
  const axios = useAxios();
  const { userInfo } = useSelector((state: any) => state.user);
  const [active, setActive] = useState<string>("myProfile");

  const [showDownloadModal, setShowDownloadModal] = useState<boolean>(false);
  const [showRewardModal, setShowRewardModal] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  // const userInfo = useSelector((state: AppState) => state.userInfo);
  // console.log("userinfo", userInfo);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [updatedPassword, setUpdatedPassword] = useState<string>(
    sessionStorage.getItem("updatedPassword") || "false"
  );
  const [accountFundraserListData, setAccountFundraiserListData] = useState<
    any[]
  >([]);
  const [accountAdvertisingListData, setAccountAdvertisingListData] = useState<
    any[]
  >([]);
  const [accountSponsorshipListData, setAccountSponsorshipListData] = useState<
    any[]
  >([]);

  const [account, setAccount] = useState<{ [key: string]: any }>({
    sort: "",
    campaign: "",
  });
  const handleAccout = (key: string, value: any) => {
    setAccount({
      [key]: value,
    });
  };

  const getAccountFundraiserList = async (): Promise<any> => {
    const { data } = await axios.get(
      `/fundraiser/${userInfo.id}/getAllFundraiserByUserId`
    );
    return data;
  };
  const getAccountAdvertisingList = async (): Promise<any> => {
    const { data } = await axios.get(
      `/advertising/${userInfo.id}/getAllAdvertisingByUserId`
    );
    return data;
  };
  const getAccountSponsorshipList = async (): Promise<any> => {
    const { data } = await axios.get(
      `/sponsorship/${userInfo.id}/getAllSponsorshipByUserId`
    );
    return data;
  };
  useQuery([QueryKey.AccountFundraiserList], getAccountFundraiserList, {
    onSuccess: (data) => {
      const ListingData = listingDataFetch(data.data);
      setAccountFundraiserListData(ListingData);
    },
    onError: (data: any) => {
      console.log(data);
    },
  });
  useQuery([QueryKey.AccountAdvertisingList], getAccountAdvertisingList, {
    onSuccess: (data) => {
      const ListingData = listingDataFetch(data.data);
      setAccountAdvertisingListData(ListingData);
    },
    onError: (data: any) => {
      console.log(data);
    },
  });
  useQuery([QueryKey.AccountSponsorshipList], getAccountSponsorshipList, {
    onSuccess: (data) => {
      const ListingData = listingDataFetch(data.data);
      setAccountSponsorshipListData(ListingData);
    },
    onError: (data: any) => {
      console.log(data);
    },
  });

  function handleScroll(): void {
    const div = document.querySelector("#sticky-tab");
    if (div) {
      const rect = div.getBoundingClientRect();
      if (rect.top <= 74) {
        div.classList.add("bg-white", "shadow-lg", "shadow-slate-500");
      } else {
        div.classList.remove("bg-white", "shadow-lg", "shadow-slate-500");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);

  const alertDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (alertDiv.current) {
      setTimeout(() => {
        if (alertDiv.current) {
          alertDiv.current.classList.add("opacity-100");
        }
      }, 1000);
      setTimeout(() => {
        if (alertDiv.current) {
          alertDiv.current.classList.remove("opacity-100");
          alertDiv.current.classList.add("opacity-0");
        }
      }, 1000);
    }
  }, []);

  const FundraisingTab: MyTabsDataType[] = [
    {
      content: (
        <div>
          <CarouselCard
            cardData={CrowdFundListData[0]}
            account={true}
            dropdownData={CardDropdownData}
          />
        </div>
      ),
      number: 1,
      tabName: "Fundraise",
    },
    {
      content: <div>Contribute</div>,
      number: 0,
      tabName: "Contribute",
    },
  ];
  const AdvertisingTab: MyTabsDataType[] = [
    {
      content: (
        <div className="introText">
          You haven’t listed any advertising spaces to sell yet. If you are
          looking to buy advertising space instead,{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            {" "}
            you can explore live opportunities here.
          </span>
        </div>
      ),
      number: 0,
      tabName: "Sell",
    },
    {
      content: (
        <div className="introText">
          You haven’t bought any advertising spaces yet.{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            Explore live opportunities here
          </span>
          , or if you are looking to sell advertising space, you can list your
          opportunities{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            here
          </span>
          .
        </div>
      ),
      number: 0,
      tabName: "Buy",
    },
  ];
  const SponsorshipTab: MyTabsDataType[] = [
    {
      content: (
        <div className="introText">
          You haven’t listed any advertising spaces to sell yet. If you are
          looking to buy advertising space instead,{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            {" "}
            you can explore live opportunities here.
          </span>
        </div>
      ),
      number: 0,
      tabName: "Sell",
    },
    {
      content: (
        <div className="introText">
          You haven’t bought any advertising spaces yet.{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            Explore live opportunities here
          </span>
          , or if you are looking to sell advertising space, you can list your
          opportunities{" "}
          <span className="text-green-70 font-semibold underline underline-offset-2">
            here
          </span>
          .
        </div>
      ),
      number: 0,
      tabName: "Buy",
    },
  ];
  return (
    <Template>
      {showDownloadModal && (
        <DownloadModal
          isShowModal={() => setShowDownloadModal(false)}
          menuTitle="Download list"
          menuContent="Choose the file format you want to download the list of Reward Claimers."
          button1Name="Download"
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
      <div className="relative md:pt-5 pt-[10px] md:pb-[150px] pb-[70px]">
        {updatedPassword === "true" && (
          <div
            ref={alertDiv}
            className="absolute top-0 w-full bg-green-10 bg-opacity-50 px-5 py-2.5 
          flex justify-center  transition-opacity duration-1000 ease-in-out"
          >
            <div className="flex items-center  gap-2.5 darkIntroText">
              <BiCheck />
              Updated successfully
            </div>
          </div>
        )}
        <div className="relative sm:pt-[45px] pt-[25px]">
          <div className="absolute w-full top-0 z-10">
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
          <div className="relative w-[1000px] max-lg:w-full px-5 mx-auto z-20">
            <PageTitle title="My Account" />
            <div className="mt-30 flex vs:flex-row flex-col gap-15 ">
              <div className="flex">
                <img src={AccountImage} alt="accuntimage" />
              </div>
              <div className="flex ns:gap-30 gap-15">
                <div className="flex flex-col gap-2.5">
                  <div className="flex item-center gap-15">
                    <div className="text-[18px] leading-6 text-green-70 font-semibold">
                      Coxhoe Athletic FC
                    </div>
                    <button className="flex justify-center items-center">
                      <HiOutlinePencil />
                    </button>
                  </div>
                  <div className="flex gap-2.5">
                    <VerticalCardLabel
                      cardLabelData={AccountLocationCardLabelData}
                    />
                    <VerticalCardLabel
                      cardLabelData={AccountClubTypeCardLabelData}
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <MyDropdown
                    dropdownData={AccountDropdownData}
                    bgColor="bg-white"
                    clickStyle="bg-green-70 text-white"
                    iconSize="text-2xl"
                    size="w-[30px] h-[30px]"
                    titleColor="text-black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="relative mt-30 z-10">
            <div className="w-full">
              <div
                id="sticky-tab"
                className={classNames(
                  "sticky-tab w-full h-[60px] sticky top-[74px] :",
                  "overflow-scroll z-20 scrollbar-hidden"
                )}
              >
                <div className="h-full lg:w-[1000px] w-[800px] flex items-center gap-5 px-5 lg:mx-auto">
                  {AccountPageTabButtonNameData.map((item, key) => {
                    return (
                      <div key={key}>
                        <TabButton
                          textSize="generalText"
                          textColor="text-gray-10 hover:text-gray-800"
                          handleClick={() => setActive(item.value)}
                          name={item.name}
                          selectedBtnName={active}
                          value={item.value}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="w-[1000px] max-lg:w-full px-5 mx-auto">
                {active === "fundraising" && (
                  <div className="max-md:mt-10 mt-30">
                    <PageSectionTitle
                      intro="Coxhoe Athletic FC - Varius habitasse semper convallis mi. Mi adipiscing mauris pharetra congue lorem nisl felis risus."
                      title="About"
                    />
                    <div className="xs:w-[500px]">
                      <div className="sm:mt-14 mt-30">
                        <Accordion title="Fundraising">
                          <div className="mt-30">
                            <MyTab tabData={FundraisingTab} />
                          </div>
                        </Accordion>
                      </div>
                      <div className="mt-30">
                        <Accordion title="Advertising">
                          <div className="mt-5">
                            <MyTab tabData={AdvertisingTab} />
                          </div>
                        </Accordion>
                      </div>
                      <div className="mt-30">
                        <Accordion title="Sponsorship">
                          <div className="mt-5">
                            <MyTab tabData={SponsorshipTab} />
                          </div>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                )}
                {active === "myProfile" && (
                  <div className="max-md:mt-10 mt-30">
                    <PageSectionTitle
                      intro="Coxhoe Athletic FC - Varius habitasse semper convallis mi. Mi adipiscing mauris pharetra congue lorem nisl felis risus."
                      title="About"
                    />
                    <div className="xs:w-[390px]">
                      <div className="sm:mt-14 mt-30">
                        <Accordion title="Fundraising">
                          <div className="mt-5 introText">Live fundraisers</div>
                          <div className="flex flex-col gap-2.5">
                            {accountFundraserListData.length !== 0 ? (
                              <>
                                {accountFundraserListData.map((item, index) => {
                                  return (
                                    <CarouselCard
                                      key={index}
                                      cardData={item}
                                      account={true}
                                      dropdownData={CardDropdownData}
                                    />
                                  );
                                })}
                              </>
                            ) : (
                              <>
                                <div className="mt-15 bg-gray-20 rounded-10 flex items-center px-15 py-5 gap-2.5">
                                  <div className="text-gray-10">
                                    <MdAnnouncement />
                                  </div>
                                  <div className="introText">
                                    Coxhoe Athletic FC currently has no
                                    crowfunding opportunities listed.
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </Accordion>
                      </div>
                      <div className="mt-30">
                        <Accordion title="Advertising">
                          <div className="mt-5 introText">
                            Live advertising opportunities
                          </div>
                          <div className="flex flex-col gap-5 mt-5">
                            {accountAdvertisingListData ? (
                              <>
                                {accountAdvertisingListData.map(
                                  (item, index) => {
                                    return (
                                      <CarouselCard
                                        key={index}
                                        cardData={item}
                                        account={true}
                                        dropdownData={CardDropdownData}
                                      />
                                    );
                                  }
                                )}
                              </>
                            ) : (
                              <>
                                <div className="mt-15 bg-gray-20 rounded-10 flex items-center px-15 py-5 gap-2.5">
                                  <div className="text-gray-10">
                                    <MdAnnouncement />
                                  </div>
                                  <div className="introText">
                                    Coxhoe Athletic FC currently has no
                                    advertising opportunities listed.
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </Accordion>
                      </div>
                      <div className="mt-30">
                        <Accordion title="Sponsorship">
                          <div className="mt-5 introText">
                            Live sponsorship opportunities
                          </div>
                          <div className="flex flex-col gap-5 mt-5">
                            {accountSponsorshipListData ? (
                              <>
                                {accountSponsorshipListData.map(
                                  (item, index) => {
                                    return (
                                      <CarouselCard
                                        key={index}
                                        cardData={item}
                                        account={true}
                                        dropdownData={CardDropdownData}
                                      />
                                    );
                                  }
                                )}
                              </>
                            ) : (
                              <>
                                <div className="mt-15 bg-gray-20 rounded-10 flex items-center px-15 py-5 gap-2.5">
                                  <div className="text-gray-10">
                                    <MdAnnouncement />
                                  </div>
                                  <div className="introText">
                                    Coxhoe Athletic FC currently has no
                                    sponsorship opportunities listed.
                                  </div>
                                </div>
                              </>
                            )}
                          </div>
                        </Accordion>
                      </div>
                    </div>
                  </div>
                )}
                {active === "managerewards" && (
                  <div className=" px-5">
                    <div className="mt-30 xs:w-[500px]">
                      <>
                        <div className="flex justify-between items-center valueText">
                          <>My Rewards</>
                          <button
                            className={classNames(
                              "w-10 h-10 flex justify-center items-center rounded-10",
                              "border-2 border-gray-30",
                              clicked ? "bg-gray-30" : "bg-white"
                            )}
                            onClick={() => setClicked(!clicked)}
                          >
                            <TbAdjustmentsHorizontal />
                          </button>
                        </div>
                        {clicked && (
                          <>
                            <div className="mt-6 text-xs text-gray-10">
                              <div className="mt-2.5">
                                <Select
                                  backgroundColor="bg-white"
                                  name="sort"
                                  value={account.sort}
                                  setValue={handleAccout}
                                  label="Sort by"
                                  SelectFormData={RewardsSortbyData}
                                  textSize="generalText"
                                />
                              </div>
                            </div>
                            <div className="mt-15 text-xs">
                              Campaigns
                              <div className="text-green-70 text-[16px] leading-5 mt-2.5">
                                <GeneralCheckBoxList
                                  classes="flex md:gap-[60px] gap-30"
                                  textStyle="text-[16px] leading-5 text-green-70"
                                  options={CampaignCheckboxData}
                                  name="campaign"
                                  value={account.campaign}
                                  setValue={handleAccout}
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </>
                      <div className="mt-2.5">
                        <Accordion
                          title="Running a crowdfunding campaign for my football club"
                          className="valueText"
                        >
                          <div className="mt-30 bg-gray-20 rounded-10 p-2.5">
                            <div className="valueText">
                              Rangers 2020/21 Small Batch Single Malt
                            </div>
                            <div className="mt-15 generalSmallText text-green-70 flex gap-2.5">
                              <div>Donate £30 or more</div>
                              <div className="text-gray-10">|</div>
                              <div>10 available</div>
                            </div>
                            <div className="mt-15 text-[12px] leading-[16px] font-medium text-gray-10 ">
                              A small batch single malt, selected by Rangers
                              Football Club for the 2020/21 Season. Bottled by
                              Douglas Laing & Co. Ltd. Dispatch expected by 31st
                              May 2023
                            </div>
                          </div>
                        </Accordion>
                        <div className="mt-5">
                          <DownloadTitle
                            title="Claimers list"
                            handleClick={() => setShowDownloadModal(true)}
                          />
                        </div>
                        <div className="mt-5 text-[12px] leading-[16px] font-medium text-gray-10">
                          Use the arrows to reveal the details of where your
                          rewards need to be sent and select 'Send Reward' once
                          ready to action.
                        </div>
                        <div className="mt-15">
                          <div className="flex flex-col gap-2.5">
                            {ClaimersListData.map((item, index) => {
                              return (
                                <LabelAccordion
                                  key={index}
                                  date={item.date}
                                  name={item.name}
                                  sent={item.sent}
                                  handleBtnClick={setShowRewardModal}
                                  address={item.address}
                                  email={item.email}
                                />
                              );
                            })}
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
                        <div className="mt-30">
                          <Accordion
                            title="Sed auctor aliquet morbi pretium blandit sit ullamcorper vulputate. Viverra in morbi."
                            className="valueText"
                          >
                            <div className="mt-30 valueText">
                              Sed auctor aliquet morbi pretium blandit sit
                              ullamcorper vulputate. Viverra in morbi.
                            </div>
                          </Accordion>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
