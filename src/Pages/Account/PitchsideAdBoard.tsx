import React from "react";

import { ChattingAccordion, StepperBackButton, Template } from "UI";

import { ChatListData } from "Config";

export const PitchSideAdBoard: React.FC = () => {
  return (
    <Template>
      <div className="pt-[30px] sm:pb-[300px] pb-[50px]">
        <div className="relative w-[1000px] max-lg:w-full px-5 mx-auto">
          <div className="stepLabelTitle">Pitchside advertising board (5)</div>
          <div className="mt-15">
            <StepperBackButton handleBackPage={() => {}} />
          </div>
          <div className="mt-30 smallIntroText">
            Use the arrows to reveal the details of an enquiry, chat to the
            potential buyer, and select ‘Accept' if you are ready to finalise a
            deal.
          </div>
          <div className="mt-30 xs:w-[500px]">
            <div className="flex flex-col gap-2.5">
              {ChatListData.map((item, index) => {
                return (
                  <ChattingAccordion
                    key={index}
                    date={item.date}
                    name={item.name}
                    content={item.content}
                    chatHistory={item.chatHistory}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};
