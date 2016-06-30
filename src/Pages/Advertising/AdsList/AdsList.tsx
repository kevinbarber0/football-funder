import React, { useState } from "react";
import classNames from "classnames";
import {
  ListingPageDropdown,
  HorizontalCard,
  VerticalCard,
  Template,
  Accordion,
  Button,
  CheckBoxList,
  Input,
  RadioButtonList,
  Search,
} from "UI";
import {
  FilterSearchData,
  ListingPageDropdownData,
  ListingPageSearchData,
  MileDistanceInputFormData,
  OrganisationFilterData,
  PostcodeDistanceInputFormData,
  SortByData,
  StatusFilterData,
} from "Config";

import { IoMdClose } from "react-icons/io";

import Line from "Assets/images/explore/explore-divide.svg";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";
import { TbLayoutList, TbLayoutGrid } from "react-icons/tb";
import FilterIcon from "Assets/images/explore/filter-icon.svg";
import { QueryKey } from "types";
import { useAxios } from "Lib";
import { useQuery } from "react-query";
import { listingDataFetch } from "Utils";

export const AdsList: React.FC = () => {
  const axios = useAxios();
  const [adsListValue, setAdsListValue] = useState<{ [key: string]: any }>({
    sort: "",
    mileDistance: "",
    postcodeDistance: "",
    org_filter: "",
    status_filter: "",
  });
  const handleAdsListValue = (key: string, value: any) => {
    setAdsListValue({
      [key]: value,
    });
  };
  const [openFilterForm, setOpenFilterForm] = useState<boolean>(false);
  const [region, setRegion] = useState<string>(ListingPageDropdownData[0].name);
  const [horizontalLayout, setHorizonalLayout] = useState<boolean>(false);
  const [advertising, setAdvertising] = useState<any[]>([]);
  const getAdvertisingList = async (): Promise<any> => {
    const { data } = await axios.get(`/advertising/getAlladvertising`);
    return data;
  };

  useQuery([QueryKey.AdsList], getAdvertisingList, {
    onSuccess: (data) => {
      const ListingData = listingDataFetch(data.data);
      setAdvertising(ListingData);
    },
    onError: (data: any) => {
      console.log(data);
    },
  });
  return (
    <Template>
      <div className="relative md:pt-5 pt-[10px] md:pb-[150px] pb-[50px]">
        <div
          className={classNames(
            "fixed top-0 z-50 w-full h-full bg-black bg-opacity-30 flex justify-center items-start",
            openFilterForm ? "block" : "hidden"
          )}
        >
          <div className="mt-[60px]">
            <div className="md:w-[645px] ns:w-[420px] max-ns:w-[300px] p-5 bg-white rounded-10 z-50">
              <div className="flex justify-between items-center">
                <div className="text-[21px] leading-[28px] font-semibold text-green-80">
                  Filters
                </div>
                <div className="text-[24px]">
                  <button onClick={() => setOpenFilterForm(false)}>
                    <IoMdClose />
                  </button>
                </div>
              </div>
              <div className="max-h-[500px] overfl overflow-y-scroll">
                <div className="mt-30">
                  <Search data={FilterSearchData} />
                </div>
                <div className="">
                  <div className="mt-[10px] px-[10px] flex flex-col divide-y divide-solid divide-gray-300">
                    <Accordion title="Sort By">
                      <div className="mt-4">
                        <RadioButtonList
                          name="sort"
                          value={adsListValue.sort}
                          setValue={handleAdsListValue}
                          options={SortByData}
                          classes="flex flex-col gap-5"
                          textStyle="text-base"
                          checkboxStyle={false}
                        />
                      </div>
                    </Accordion>
                    <Accordion title="Organisation">
                      <CheckBoxList
                        name="org_filter"
                        value={adsListValue.org_filter}
                        setValue={handleAdsListValue}
                        options={OrganisationFilterData}
                      />
                    </Accordion>
                    <Accordion title="Status">
                      <CheckBoxList
                        name="status_filter"
                        value={adsListValue.status_filter}
                        setValue={handleAdsListValue}
                        options={StatusFilterData}
                      />
                    </Accordion>
                    <Accordion title="Distance">
                      <div className="mt-5 flex gap-[10px]">
                        <div className="w-[180px]">
                          <Input
                            data={MileDistanceInputFormData}
                            name="mileDistance"
                            value={adsListValue.mileDistance}
                            setValue={handleAdsListValue}
                            required={true}
                            disabled={false}
                          />
                        </div>
                        <div className="w-[180px]">
                          <Input
                            data={PostcodeDistanceInputFormData}
                            name="postcodeDistance"
                            value={adsListValue.postcodeDistance}
                            setValue={handleAdsListValue}
                            required={true}
                            disabled={false}
                          />
                        </div>
                      </div>
                    </Accordion>
                  </div>
                </div>
                <div className="px-[10px] flex justify-between max-md:flex-col-reverse gap-y-30">
                  <button className="text-[14px] leading-[20px] font-medium underline max-md:text-start">
                    Clear All Filters
                  </button>
                  <Button
                    backgroundColor="bg-green-10"
                    height="h-[50px]"
                    width="w-[390px] max-md:w-full"
                    textColor="text-black"
                    textSize="generalText"
                    text=" Apply filters"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative pt-[45px]">
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
          <div className="bl:w-[1000px] w-full max-bl:px-5 mx-auto">
            <div className="relative">
              <div className="z-30 fixed bl:hidden top-[320px] w-full "></div>
              <div className="flex justify-between max-xm:flex-col max-xm:gap-y-5">
                <div className="flex max-xs:flex-col max-xs:items-start gap-x-15 items-center">
                  <div className="text-[32px] leading-[40px] font-semibold">
                    Advertising
                  </div>
                  <div className="max-xs:hidden">
                    <img src={Line} alt="divide" />
                  </div>
                  <div>
                    <ListingPageDropdown
                      setButtonName={setRegion}
                      buttonName={region}
                    />
                  </div>
                </div>
                <div className="relative flex max-xs:flex-col gap-x-2.5 max-xm:gap-[70px]">
                  <div className="flex max-xm:flex-row-reverse max-xs:justify-end gap-2.5">
                    <button
                      className="z-30  w-[50px] border-[1px] border-gray-200 rounded-10 flex justify-center items-center"
                      onClick={() => setHorizonalLayout(!horizontalLayout)}
                    >
                      {horizontalLayout ? <TbLayoutList /> : <TbLayoutGrid />}
                    </button>
                    <div className="w-[150px]">
                      <div className="w-[150px]">
                        <div className="relative">
                          <button
                            className="w-[150px] h-[50px] bg-white rounded-10 py-[10px] px-15 flex justify-between items-center border-[1px] border-gray-200"
                            onClick={() => setOpenFilterForm(true)}
                          >
                            Filter & Sort
                            <img src={FilterIcon} alt="filter icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex flex-col xs:w-[250px] w-[390px] max-ns:w-full">
                    <Search data={ListingPageSearchData} />
                    <div className="absolute top-[-30px] w-full ns:hidden text-center">
                      120 results
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xs:mt-[65px] mt-30 max-md:w-full mx-auto">
              {horizontalLayout ? (
                <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-2 max-xs:grid-cols-2 gap-x-5 max-2xs:gap-x-2.5 gap-y-30 ">
                  {advertising.map((item, index) => {
                    return <HorizontalCard key={index} cardData={item} />;
                  })}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-y-5">
                  {advertising.map((item, index) => {
                    return (
                      <VerticalCard
                        key={index}
                        cardData={item}
                        profileCard={false}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
