import React, { useState } from "react";
import classNames from "classnames";
import { InputType } from "types";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DatePickerProps {
  data: InputType;
  name: string;
  value: any;
  setValue: (key: string, value: any) => void;
  required: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  data,
  name,
  setValue,
  value,
  required,
}: DatePickerProps) => {
  const [floating, setFloating] = useState<boolean>(false);

  const handleInputDate = (date: Date): void => {
    setValue(name, date);
  };

  const handleInputClick = (): void => {
    setFloating(true);
  };

  const handleBlur = (): void => {
    setFloating(false);
  };
  return (
    <div className="relative customDatePickerWidth">
      <ReactDatePicker
        selected={value}
        onChange={handleInputDate}
        dateFormat="dd MMMM, yyyy"
        onInputClick={handleInputClick}
        onBlur={handleBlur}
        className={classNames(
          " w-full rounded-10 appearance-none focus:outline-none  border-2 border-gray-200",
          "ease-linear  transition duration-200 px-3 pt-3",
          data.height,
          data.textSize,
          data.border
        )}
        required={required}
      />
      <label
        htmlFor="date-picker"
        className={classNames(
          "pointer-events-none absolute  left-3  top-[calc(50%-10px)] text-gray-10 text-sm",
          "origin-[0_0]  duration-200 ease-linear",
          floating || value ? "scale-75 -translate-y-2.5" : "",
          data.content
        )}
      >
        {data.label}
      </label>
      {/* <style>
        {`
          .customDatePickerWidth, 
          .customDatePickerWidth > div.react-datepicker-wrapper, 
          .customDatePickerWidth > div > div.react-datepicker__input-container
          .customDatePickerWidth > div > div.react-datepicker__input-container input {
            width: 100%;
          },
          .customDatePickerWidth > div > div.react-datepicker-popper {
            z-index:100;
          }
          .react-datepicker-popper .react-datepicker__triangle {
            display: none;
          }
          .react-datepicker-popper{
            z-index:20;
          }
        `}
      </style> */}
    </div>
  );
};
