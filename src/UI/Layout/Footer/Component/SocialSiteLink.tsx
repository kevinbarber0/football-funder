import React from "react";
import { socialLink } from "Config";

export const SocialSiteLink: React.FC = () => {
  return (
    <div className={`flex flex-row gap-6 text-green-10 text-2xl`}>
      {socialLink.map((Social, index) => (
        <div key={index} onClick={Social.handleClick}>
          <Social.Icon />
        </div>
      ))}
    </div>
  );
};
