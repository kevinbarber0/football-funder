import React, { useState } from "react";
import classNames from "classnames";

import { Button, TextButton } from "UI";

import { ChatHistoryType } from "types";

import { IoIosArrowDown } from "react-icons/io";

interface ChattingAccordionPropsType {
  content: string;
  date: string;
  name: string;
  chatHistory?: ChatHistoryType;
}

export const ChattingAccordion: React.FC<ChattingAccordionPropsType> = ({
  content,
  date,
  name,
  chatHistory,
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div
      className={classNames(
        "bg-gray-20 w-full rounded-10 p-2.5 flex justify-between",
        showMenu && "border-2 border-green-10"
      )}
    >
      <div className="flex gap-2.5 w-full">
        <div className="flex gap-2.5">
          <div className="w-[40px] h-[40px] rounded-20 bg-white"></div>
        </div>
        <div className="flex-1 flex flex-col gap-15">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-start gap-[5px]">
              <div className="valueText">{name}</div>
              <TextButton
                text="View profile"
                textColor="text-green-70"
                textSize="text-xs"
              />
            </div>
            <div className="flex gap-2.5 items-start">
              <div
                className={classNames(
                  "text-xs font-medium text-gray-10",
                  showMenu ? "" : "hidden"
                )}
              >
                {date} ago
              </div>
              <button
                className={classNames(showMenu ? "rotate-180" : "rotate-0")}
                onClick={() => setShowMenu(!showMenu)}
              >
                <IoIosArrowDown />
              </button>
            </div>
          </div>
          {showMenu && (
            <>
              <div className="darkIntroText">
                <div>{content}</div>
                <div className="mt-5 valueText">Messages</div>
              </div>
              <div className="bg-white rounded-10 p-2.5">
                <div className="pb-[30px] flex flex-col gap-2.5">
                  {chatHistory?.oppotunity.map((msg, index) => {
                    return (
                      <div key={index}>
                        <div className="flex flex-col items-start">
                          <div className="flex items-center gap-1">
                            <div className="text-xs font-semibold text-green-70">
                              {name}
                            </div>
                            <div className="smallIntroText">{msg.date}</div>
                          </div>
                          <div className="mt-[5px] ">
                            <div className="ns:w-[270px] flex bg-gray-20 rounded-t-20 rounded-br-20 py-2.5 px-15 darkIntroText">
                              {msg.content}
                            </div>
                          </div>
                        </div>
                        <div className="mt-2.5 flex flex-col items-end">
                          <div className="flex items-center gap-1">
                            <div className="text-xs font-semibold text-green-70">
                              Me
                            </div>
                            <div className="smallIntroText">
                              {chatHistory.me[index].date}
                            </div>
                          </div>
                          <div className="mt-[5px]">
                            <div className="flex bg-green-10 rounded-t-20 rounded-bl-20 py-2.5 px-15 darkIntroText">
                              {chatHistory.me[index].content}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="mt-5 flex justify-center">
                    <TextButton
                      text="Load previous messages"
                      textSize="darkIntroText"
                    />
                  </div>
                </div>
                <div className="valueText">Send message</div>
                <div className="mt-2.5">
                  {/* <Textarea
                    name="chatting"
                    showLeftCharacters={false}
                    placeholder="Type something..."
                    height="h-[50px]"
                    chattingField={true}
                    className="p-2.5 text-[12px] leading-4"
                    required={true}
                  /> */}
                </div>
                <div className="mt-2.5">
                  <TextButton text="Send message" textSize="darkIntroText" />
                </div>
              </div>
              <div className="mt-15 flex gap-2.5">
                <Button
                  backgroundColor="bg-green-10"
                  height="h-[40px]"
                  text="Accept"
                  textColor="text-green-70"
                  textSize="text-sm font-semibold"
                  width="vs:w-[120px] w-1/2"
                />
                <Button
                  backgroundColor="bg-green-70"
                  height="h-[40px]"
                  text="Reject"
                  textColor="text-white"
                  textSize="text-sm font-semibold"
                  width="vs:w-[120px] w-1/2"
                />
              </div>
            </>
          )}
          <div
            className={classNames(
              "text-xs font-medium text-gray-10",
              showMenu ? "hidden" : ""
            )}
          >
            {date} ago
          </div>
        </div>
      </div>
    </div>
  );
};
