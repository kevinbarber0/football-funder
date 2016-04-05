import React, { useState } from "react";
import classNames from "classnames";
import { MyTabsDataType } from "types";

interface TabData {
  sticky?: boolean;
  tabData: MyTabsDataType[];
}

type TabsProps = {
  children: React.ReactNode;
};

export const MyTab: React.FC<TabData> = ({ sticky, tabData }) => {
  return (
    <div>
      <Tabs>
        {tabData.map((item, index) => {
          return (
            <Tab
              key={index}
              label={
                item.number != null
                  ? item.tabName + " (" + item.number + ")"
                  : item.tabName
              }
            >
              <div>{item.content}</div>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(
    (children as any)[0].props.label
  );

  const changeTab = (tab: string) => {
    setActiveTab(tab);
  };

  let content: React.ReactNode;
  let buttons: string[] = [];

  React.Children.forEach(children, (child) => {
    const tabLabel = (child as any).props.label;
    buttons.push(tabLabel);

    if (tabLabel === activeTab) {
      content = (child as any).props.children;
    }
  });

  return (
    <div>
      <TabButtons
        activeTab={activeTab}
        buttons={buttons}
        changeTab={changeTab}
      />
      <div className="mt-30">{content}</div>
    </div>
  );
};

type TabButtonProps = {
  buttons: string[];
  changeTab: (tab: string) => void;
  activeTab: string;
};

const TabButtons: React.FC<TabButtonProps> = ({
  buttons,
  changeTab,
  activeTab,
}) => {
  return (
    <div className="flex flex-row gap-5">
      {buttons.map((button) => (
        <button
          key={button}
          className={classNames(
            "generalText cursor-pointer transition-colors duration-200 py-[5px]",
            button === activeTab
              ? "text-black border-b-2 border-green-10 font-semibold"
              : "text-gray-10 hover:text-gray-800"
          )}
          onClick={() => changeTab(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

type TabProps = {
  label: string;
  children?: React.ReactNode;
};

const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};
