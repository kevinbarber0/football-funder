import React from "react";

import { Accordion, PageTitle, Template } from "UI";

import ExploreMask from "Assets/images/explore/explore-mask.svg";
import MobileExploreMask from "Assets/images/explore/m-explore-mask.svg";

export const FAQPage: React.FC = () => {
  return (
    <Template>
      <div className="relative xs:pt-5 pt-[10px]  xs:pb-[150px] pb-[50px]">
        <div className="relative sm:pt-[45px] pt-[25px]">
          <div className="absolute w-full top-0 z-0">
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
          <div className="relative lg:w-[1000px] w-full max-lg:px-5 mx-auto z-10">
            <PageTitle title="Frequently Asked Questions" />
            <div className="mt-30 stepLabelTitle">
              Fundraisers and asset owners
            </div>
            <div className="mt-8 divide-y-2 divide-gray-20">
              <Accordion
                title="How long can my fundraiser run for?"
                className="darkGreenButtonText"
              >
                <div className="mt-5 introText">
                  Your fundraiser can run for as long as you like, and accept
                  donations until you wish to stop. 
                  <br />
                  <br /> Do bear in mind that older fundraisers won’t yield as
                  many donations, as newer fundraisers will capture people’s
                  interest more.
                </div>
              </Accordion>
              <Accordion
                title="Do you receive funds regardless of whether a target has been reached or not?"
                className="darkGreenButtonText"
              >
                <div className="mt-5 introText">
                  Yes. A target is there to keep everyone involved in the
                  fundraiser motivated.
                  <br />
                  <br />  Your supporters will be made aware that funds will be
                  made available regardless of whether a target is reached or
                  not.
                </div>
              </Accordion>
              <Accordion
                title="How do you access funds that have been raised?"
                className="darkGreenButtonText"
              >
                <div className="mt-5 introText">
                  Funds raised are available to withdraw from the ‘Withdraw
                  Funds’ section of My Account.
                  <br />
                  <br /> You must be logged in to access My Account.
                </div>
              </Accordion>
              <Accordion
                title="When will the money arrive after being withdrawn?"
                className="darkGreenButtonText"
              >
                <div className="mt-5 introText">
                  Money will be transferred to your chosen account within 3
                  working days. If there is any delay, you will be notified as
                  soon as possible.
                  <br />
                  <br /> Questions around the transfer of funds can be sent to{" "}
                  <span className="text-green-70 font-semibold">
                    support@footballfunder.com.
                  </span>{" "}
                  We understand how important this area is to the success of
                  your campaigns.
                </div>
              </Accordion>
              <Accordion
                title="What do the transaction fees mean?"
                className="darkGreenButtonText"
              >
                <div className="mt-5 introText">
                  Unfortunately for each transaction that is placed through our
                  payment gateway,
                  <br />
                  <br /> we are charged a transaction fee to facilitate the
                  payment. Our fees are in line with industry standard and we
                  provide significant added value following the approval of your
                  listing - particularly if you decide to sign up to the Members
                  Club.
                </div>
              </Accordion>
              <Accordion
                title="Do rewards have to be added to each fundraiser?"
                className="darkGreenButtonText"
              >
                <div className="mt-5 introText">
                  Rewards do not need to be added to each fundraiser, however we
                  encourage you to give something back to your loyal supporters
                  for donating to your cause.
                </div>
              </Accordion>
              <Accordion
                title="Do perks have to be added to advertising or sponsorship listings?"
                className="darkGreenButtonText"
              >
                <div className="mt-5 introText">
                  Perks do not need to be added to advertising or sponsorship
                  listings, but we strongly encourage you to be creative. 
                  <br />
                  <br />
                  Provide potential partners of what they’re going to be getting
                  for parting with their marketing budgets, make them feel a
                  real part of your club or organisation.
                </div>
              </Accordion>
              <Accordion
                title="Can a fundraiser or listing be edited?"
                className="darkGreenButtonText"
              >
                <div className="mt-5 introText">
                  Yes, this can be edited in the relevant section of My Account,
                  where you can access your listing and edit it from there.
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
