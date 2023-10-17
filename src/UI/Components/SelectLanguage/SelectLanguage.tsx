import React, { useState } from "react";
import Arrow from "Assets/images/svg/button/white-arrow";
import EnglandFlag from "Assets/images/svg/footer/icon-united-kingdom.svg";
import { Languages } from "Config/footerConfig";
import { LanguagesType } from "types";

export const SelectLanguage: React.FC = () => {
  const [language, setLanguage] = useState<LanguagesType>(Languages[0]);
  const LANGUAGE_SELECTOR_ID = "language-selector";
  return (
    <div className="relative">
      <div id={LANGUAGE_SELECTOR_ID} className="text-[14px] text-white">
        <div
          className="flex flex-row gap-1"
          onClick={() => setLanguage(Languages[0])}
        >
          <img src={EnglandFlag} alt="" />
          {language.name}
        </div>
        <div className="absolute mx-1 top-1 left-14 items-center px-2">
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default SelectLanguage;
