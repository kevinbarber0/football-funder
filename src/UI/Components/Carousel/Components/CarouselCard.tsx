import React from "react";
import classNames from "classnames";
import ShareIcon from "Assets/images/svg/button/share-button.svg";
import FavouriteIcon from "Assets/images/svg/button/favourite-button.svg";
import { CardType, MyDropdownType } from "types";
import { MyDropdown, VerticalCardLabel } from "UI";

export interface CarouselCardPropsType {
  cardData: CardType;
  account?: boolean;
  dropdownData?: MyDropdownType;
}

export const CarouselCard: React.FC<CarouselCardPropsType> = ({
  account,
  cardData,
  dropdownData,
}) => {
  return (
    <div>
      <div className="max-w-[390px] h-full">
        <div className="relative rounded-t-20">
          <img
            src={cardData.image}
            alt="card a"
            className="h-[200px] w-full object-cover rounded-t-20"
          />
          <div className="absolute top-0 w-full px-5  py-5  flex justify-between">
            <div className="py-[5px] bg-green-10 rounded-10 px-2.5 generalSmallText">
              {cardData.broadcastingType}
            </div>
            <div className="flex gap-[10px]">
              <button className="rounded-10">
                <img src={FavouriteIcon} alt="favourite" />
              </button>
              <button className="rounded-10">
                <img src={ShareIcon} alt="share" />
              </button>
              {dropdownData && (
                <MyDropdown
                  dropdownData={dropdownData}
                  bgColor="bg-gray-10"
                  titleColor="text-white"
                  iconSize="text-2xl"
                  size="w-[30px] h-[30px]"
                  clickStyle="bg-green-70 text-white"
                />
              )}
            </div>
          </div>
        </div>
        <div className="relative bg-white rounded-b-20 boder-2 shadow-md px-5 pt-2.5 ns:pb-5 pb-2.5 flex flex-col gap-2.5">
          {cardData.vat && (
            <div className="absolute top-[-15px] ">
              <div className="valueText bg-green-10 rounded-10 py-[5px] px-2.5">
                ￡ {cardData.vat.toLocaleString("en-US")} inc. VAT
              </div>
            </div>
          )}
          <div className="w-full flex flex-wrap gap-[10px]">
            {cardData.club && (
              <>
                <VerticalCardLabel
                  cardLabelData={cardData.club}
                  // className="max-md:w-full"
                />
              </>
            )}
            {cardData.location && (
              <>
                <VerticalCardLabel
                  cardLabelData={cardData.location}
                  // className="max-md:hidden max-md:w-full"
                />
              </>
            )}
          </div>
          <div className="text-lg text-green-80 font-semibold ">
            {cardData.title}
          </div>
          <div className={classNames("introText")}>{cardData.description}</div>
          {cardData.progress && (
            <div>
              <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
                <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
              </div>
              <div className="flex mt-15 justify-between buttonText text-green-70">
                <div>{cardData.fund}</div>
                <div>{`￡${cardData.curFund?.toLocaleString(
                  "en-US"
                )} of ￡${cardData.oriFund?.toLocaleString("en-US")}`}</div>
              </div>
            </div>
          )}
          <div className="flex justify-between">
            {cardData.date && (
              <>
                <VerticalCardLabel cardLabelData={cardData.date} />
                {cardData.collection && (
                  <VerticalCardLabel cardLabelData={cardData.collection} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
