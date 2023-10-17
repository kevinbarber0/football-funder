import React, { useState } from "react";
import { Range } from "react-range";

interface RangeSliderValuePropsType {
  minValue: number;
  maxValue: number;
}

export const RangeSlider: React.FC<RangeSliderValuePropsType> = ({
  maxValue,
  minValue,
}) => {
  const [values, setValues] = useState<number[]>([0]);

  return (
    <div className="pr-14 pl-12 relative">
      <Range
        step={1}
        min={minValue}
        max={maxValue}
        values={values}
        onChange={(values) => {
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          <div {...props} className="h-2.5 flex bg-gray-200 rounded-md">
            {children}
            <div className="flex items-center">
              <div className="absolute -left-12 buttonText text-green-70">
                {minValue}%
              </div>
              <div className="absolute -right-14 buttonText text-green-70">
                {maxValue}%
              </div>
            </div>
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            className="relative flex items-center justify-center w-5 h-5 bg-green-10 rounded-full ring-2 ring-offset-2 ring-white shadow-xl shadow-slate-500"
          >
            <div className="absolute -top-10 p-1 border-[1px] border-slate-300 rounded-10 buttonText text-green-70">
              {values[0]}%
            </div>
          </div>
        )}
      />
    </div>
  );
};
