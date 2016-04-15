import React from "react";
import { HorizontalCardLabel } from "UI";
import FavouriteIcon from "Assets/images/svg/button/favourite-button.svg";
import ShareIcon from "Assets/images/svg/button/share-button.svg";
import { CardType } from "types";
import classNames from "classnames";

interface CardProps {
  cardData: CardType;
}

export const HorizontalCard: React.FC<CardProps> = ({ cardData }) => {
  return (
    <div className="">
      <div className="max-w-[390px] h-full mx-auto">
        <div className="relative rounded-t-20 overflow-hidden">
          <img
            src={cardData.image}
            alt="card a"
            className="h-[200px] w-full object-cover"
          />
          <div className="absolute top-0 w-full xs:px-5 px-2.5 py-5  flex justify-between">
            <div className="py-[5px] bg-green-10 rounded-10 ns:text-[14px] text-[12px] leading-[20px]  ns:px-[10px] px-2 font-medium">
              {cardData.broadcastingType}
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
        <div className="relative rounded-b-10 boder-2 shadow-md px-5 max-md:px-2.5 xs:pt-[30px] pt-15 ns:pb-5 pb-2.5 flex flex-col ns:gap-15 gap-2.5">
          {cardData.vat && (
            <div className="absolute top-[-15px] ">
              <div className="xs:text-[14px] text-[12px]  xs:leading-[20px] leading-[12px] font-semibold bg-green-10 rounded-10 py-[5px] xs:px-[10px] px-2">
                ￡ {cardData.vat.toLocaleString("en-US")} inc. VAT
              </div>
            </div>
          )}
          <div className="flex flex-col gap-[10px] max-sm:flex-row">
            {cardData.club && (
              <>
                <HorizontalCardLabel
                  cardLabelData={cardData.club}
                  className="max-md:w-full"
                />
              </>
            )}
            {cardData.location && (
              <>
                <HorizontalCardLabel
                  cardLabelData={cardData.location}
                  className="max-md:hidden max-md:w-full"
                />
              </>
            )}
          </div>
          <div className="xs:text-[18px] text-[14px] max-vs:text-[12px] max-vs:leading-[14px] xs:leading-[24px] leading-4 text-green-80 font-semibold max-sm:line-clamp-2">
            {cardData.title}
          </div>
          <div
            className={classNames(
              "xs:text-[14px] text-[12px] xs:leading-[24px] leading-4 font-medium text-gray-600 max-md:line-clamp-2",
              cardData.progress ? "max-xs:hidden" : "block"
            )}
          >
            {cardData.description}
          </div>
          {cardData.progress && (
            <div>
              <div className="relative h-[10px] w-full rounded-10 bg-gray-200">
                <div className="absolute top-0 h-[10px] w-[calc(50%)] bg-green-50 rounded-10"></div>
              </div>
              <div className="flex mt-15 justify-between xs:text-[16px] text-[14px] max-vs:text-[10px] max-vs:leading-3 xs:leading-[20px] leading-4 font-semibold text-green-70 max-md:hidden">
                <div>{cardData.fund}</div>
                <div>{`￡${cardData.curFund?.toLocaleString(
                  "en-US"
                )} of ￡${cardData.oriFund?.toLocaleString("en-US")}`}</div>
              </div>
              <div className="flex mt-15 justify-between xs:text-[16px] text-[14px] max-vs:text-[10px] max-vs:leading-3 xs:leading-[20px] leading-4 font-semibold text-green-70  md:hidden">
                <div>{`￡${cardData.curFund?.toLocaleString("en-US")}`}</div>
                <div>{cardData.fund}</div>
              </div>
            </div>
          )}
          <div className="flex justify-between max-sm:hidden">
            {cardData.date && (
              <>
                <HorizontalCardLabel cardLabelData={cardData.date} />
                {cardData.collection && (
                  <HorizontalCardLabel cardLabelData={cardData.collection} />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
