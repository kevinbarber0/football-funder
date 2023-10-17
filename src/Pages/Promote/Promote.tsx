import React from "react";
import { Button, PromoteImageTitle, Template } from "UI";
import { PromoteTitleImageData } from "Config";
import Ring from "Assets/images/promote/ring.png";

export const Promote: React.FC = () => {
  return (
    <Template>
      <div className="xs:mt-[70px] xs:mb-32 mt-30 mb-11">
        <div className="w-[1000px] max-bl:w-full max-bl:px-5 mx-auto">
          <div>
            <div className="generalTitle">Promote</div>
            <div className="mt-5 introText">
              Promoting your fundraisers, advertising or sponsorship listings
              really helps to spread the word that your club or organisation is
              active in the marketplace. The Football Funder team will get to
              know your needs even more than on a standard listing and ensure
              your campaign is a success.
            </div>
          </div>
          <div className="mt-20">
            <div className="relative flex justify-center flex-row max-mm:flex-col gap-y-20 gap-14">
              <div className="relative flex justify-center items-center">
                <img src={Ring} alt="ring" className="absolute z-0" />
                <div
                  className="whitespace-nowrap generalTitle text-center 
                  rounded-20 bg-green-10 w-[350px] max-vs:w-full
                 max-vs:text-2xl py-7 max-vs:py-5 z-10"
                >
                  Only £49 per listing
                </div>
              </div>
              <div className="w-[390px] max-ns:w-full flex justify-center items-center max-mm:mx-auto">
                <div className="introText">
                  A key part of Football Funder’s ethos is to tell your story,
                  and we will do that with promoted fundraisers and listings in
                  the following ways:
                  <div className="mt-30">
                    <Button
                      backgroundColor="bg-green-10"
                      padding="py-15"
                      text="Promote"
                      width="w-full"
                      textColor="text-green-70"
                      textSize="buttonText"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mm:mt-40 mt-16 flex flex-col gap-y-10 gap-x-16">
            {PromoteTitleImageData.map((data, index) => {
              return (
                <PromoteImageTitle
                  alignStyle={data.alignStyle}
                  heading={data.heading}
                  image={data.image}
                  subheading={data.subheading}
                  topIntroText={data.topIntroText}
                  underIntroText={data.underIntroText}
                />
              );
            })}
          </div>
          <div className="mt-32 flex justify-center -le">
            <Button
              backgroundColor="bg-green-10"
              padding="py-15"
              text="Promote"
              width="w-[390px]"
              textColor="text-green-70"
              textSize="buttonText"
            />
          </div>
        </div>
      </div>
    </Template>
  );
};
