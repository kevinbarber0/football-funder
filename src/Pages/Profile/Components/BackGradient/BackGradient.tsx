import React, { useContext } from "react";

import classNames from "classnames";

import { ColorContext } from "App/ColorProvider";

export const BackGradient: React.FC = () => {
  const { backgroundColor } = useContext(ColorContext)!;

  const { gradientColor } = useContext(ColorContext)!;

  return (
    <div className="relative z-0 w-full overflow-hidden">
      <div className="relative 2xs:w-[calc(100%+200px)] w-[calc(100%+100px)]">
        {/* <div
          className={classNames(
            "relative min-w-[1440px] aspect-square rounded-50 -z-10",
            "opacity-10 bg-gradient-to-l from-green-10 via-transparent to-transparent"
          )}
        ></div> */}
        <div
          className={`relative w-full aspect-square max-xm:h-[400px] max-2xs:h-[300px] max-2xs:mt-[100px]  rounded-50 -z-10 opacity-10`}
          style={{
            background: `linear-gradient(to left, ${gradientColor}, transparent)`,
          }}
        ></div>
        <div
          className={classNames(
            "absolute w-full top-1/2 aspect-square max-xm:h-[400px] max-2xs:h-[300px] rounded-50 "
          )}
          style={{
            backgroundColor: backgroundColor,
          }}
        ></div>
      </div>
    </div>
  );
};
