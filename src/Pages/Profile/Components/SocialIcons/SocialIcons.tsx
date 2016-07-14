import React from "react";

import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

export const SocialIcons: React.FC = () => {
  return (
    <div className="flex gap-30 text-[20px] text-green-10">
      <BsFacebook />
      <BsInstagram />
      <BsTwitter />
      <BsLinkedin />
      <BsYoutube />
    </div>
  );
};
