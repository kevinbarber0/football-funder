import React from "react";
import { FeeItem, Template } from "UI";
import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";

export const Fees: React.FC = () => {
  return (
    <Template>
      <div className="relative md:pt-5 pt-[10px] md:pb-[120px] pb-[60px]">
        <div className="relative sm:pt-[45px] pt-[25px]">
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
          <div className="xm:w-[870px] w-full px-5 mx-auto">
            <div className="generalTitle">Fees</div>
            <div className="mt-30 text-[21px] leading-7 font-semibold">
              Our fees
              <div className="mt-2.5 introText">
                We keep our fees simple, and they help keep the Football Funder
                concept in good shape - so we can commit time and resources
                <br className="max-xm:hidden" /> to ensuring you have successful
                campaigns time and again.
              </div>
            </div>
            <div className="sm:mt-[60px] mt-30 text-[21px] leading-7 font-semibold">
              Fundraiser fees
              <div className="mt-30 flex">
                <div className="sm:w-[650px] w-full flex gap-5">
                  <div className="w-1/2">
                    <FeeItem
                      condition1="+2.75% transaction fee 20p per donation"
                      label="0%"
                      title="Charity fundraisers"
                    />
                  </div>
                  <div className="w-1/2">
                    <FeeItem
                      condition1="+2.75% transaction fee 20p per donation"
                      label="5%"
                      title="Everything else"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-[60px] stepLabelTitle pb-5  border-b-2 border-gray-200">
              Advertising & Sponsorship listing fees
              <div className="mt-30 md:w-[650px] w-full flex gap-5">
                <div className="w-1/2">
                  <FeeItem
                    condition1="+10% on successful deals"
                    condition2="+£6.99 Platform Fee"
                    label="Free"
                    title="Advertising per listing"
                  />
                </div>
                <div className="w-1/2">
                  <FeeItem
                    condition1="+10% on successful deals"
                    condition2="+£6.99 Platform Fee"
                    label="Free"
                    title="Advertising per listing"
                  />
                </div>
              </div>
              <div className="introText">
                To ensure clubs and organisations of any size have access to
                bring in prospective advertisers and sponsors, listings are
                absolutely free to post. <br /> <br />
                If a buyer is found via your listing, we receive 10% of the
                amount plus a platform fee on successful deals, so we can manage
                your
                <br /> agreement through to activation.
              </div>
            </div>
            <div className="mt-[60px] stepLabelTitle text-green-70">
              Promote your listing
              <div className="mt-5 flex">
                <div className="px-2 py-1 bg-green-10 generalTitle rounded-10 ">
                  £49
                </div>
              </div>
              <div className="mt-5 introText">
                For a one-off payment of{" "}
                <span className="font-semibold">£49</span> (deducted from the
                final amount if a fundraiser), your fundraiser, advertising or
                sponsorship listing will be placed in the hands of our campaign
                team.
                <br /> <br />
                They will activate ‘Featured’ status on the home page, provide
                exposure to our social media following and be on hand to provide
                support in any way you wish to ensure your fundraiser or listing
                becomes a success. 
                <br /> <br />
                Select ‘Promote’ when creating a listing to get started for this
                bargain amount.
              </div>
              <div className="sm:mt-30 mt-[60px] smallIntroText">
                Charity activity can play such a crucial and powerful role in
                football. To qualify for the 0% fee, the charity you’re
                fundraising for must be registered in the UK with the Charity
                Commission, and requests must be sent to{" "}
                <span className="text-green-70 font-semibold underline">
                  support@footballfunder.com
                </span>{" "}
                within 72 hours of the campaign going live.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
