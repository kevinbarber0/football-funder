import React from "react";

import classNames from "classnames";

interface ToggleButtonPropsType {
  handleClick: (val: boolean) => void;
  defaultValue: boolean;
  toggleButtonStyle?: string;
  className: string;
  title: string;
  titleStyle: string;
  children: React.ReactNode;
}

export const ToggleButton: React.FC<ToggleButtonPropsType> = ({
  className,
  title,
  titleStyle,
  children,
  defaultValue,
  handleClick,
}) => {
  const onChangehandler = () => {
    handleClick(!defaultValue);
  };

  return (
    <div>
      <label
        className={classNames(
          "relative inline-flex items-center cursor-pointer",
          className
        )}
      >
        <input
          type="checkbox"
          checked={defaultValue}
          className="sr-only peer"
          onChange={onChangehandler}
        />
        <div
          className={classNames(
            "w-9 h-5 bg-gray-200 rounded-full",
            "peer peer-focus:outline-none peer-checked:after:translate-x-full peer-checked:bg-green-10",
            "after:content-[''] after:absolute after:top-[2px] after:left-[2px]",
            "after:bg-white after:rounded-full",
            "after:h-4 after:w-4 after:transition-all"
          )}
        ></div>
        <div className={classNames(titleStyle)}>{title}</div>
      </label>
      {children}
    </div>
  );
};
