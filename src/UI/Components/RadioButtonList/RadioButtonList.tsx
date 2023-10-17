import React from "react";
import classNames from "classnames";
import { RadioButton } from "UI";
import { RadioButtonDataType } from "types";

interface RadioButtonListProps {
  name: string;
  value: any;
  setValue: (key: string, value: any) => void;
  options: RadioButtonDataType[];
  classes: string | undefined;
  textStyle: string;
  checkboxStyle: boolean;
}

export const RadioButtonList: React.FC<RadioButtonListProps> = ({
  options,
  name,
  classes,
  textStyle,
  checkboxStyle,
  setValue,
  value,
}) => {
  return (
    <div className={classNames(classes)}>
      {options.map((option, index) => (
        <div key={index}>
          <RadioButton
            value={option.value}
            label={option.label}
            name={name}
            checked={value === option.value}
            onChange={setValue}
            classes={option.classes}
            textStyle={textStyle}
            checkboxStyle={checkboxStyle}
          />
        </div>
      ))}
    </div>
  );
};
