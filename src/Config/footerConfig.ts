import { SocialLinkType, GuideListType } from "types";
import { LanguagesType } from "types";
import FacebookIcon from "Assets/images/svg/footer/icon-facebook";
import InstagramIcon from "Assets/images/svg/footer/icon-instagram";
import LinkdedinIcon from "Assets/images/svg/footer/icon-linkedin";
import TwitterIcon from "Assets/images/svg/footer/icon-twitter";
import YoutubeIcon from "Assets/images/svg/footer/icons-youtube";


export const socialLink: SocialLinkType[] = [
  {
    handleClick: () => console.log("Clicked Facebook"),
    Icon: FacebookIcon,
  },
  {
    handleClick: () => console.log("Clicked Instargram"),
    Icon: InstagramIcon,
  },
  {
    handleClick: () => console.log("Clicked Twitter"),
    Icon: TwitterIcon,
  },
  {
    handleClick: () => console.log("Clicked Linkedin"),
    Icon: LinkdedinIcon,
  },
  {
    handleClick: () => console.log("Clicked YouTube"),
    Icon: YoutubeIcon,
  },
];

export const guideList: GuideListType[] = [
  {
    title: "About",
    handleClick: () => console.log("Clicked About"),
  },
  {
    title: "Terms & Conditions",
    handleClick: () => console.log("Clicked Terms & Conditions"),
  },
  {
    title: "Privacy Policy",
    handleClick: () => console.log("Clicked Privacy Policy"),
  },
  {
    title: "Fraud Policy",
    handleClick: () => console.log("Clicked Fraud Policy"),
  },
  {
    title: "Cookies",
    handleClick: () => console.log("Clicked Cookies"),
  },
];

export const Languages: LanguagesType[] = [
  { code: "gb", name: "English" },
  { code: "fr", name: "French" },
  { code: "it", name: "Italian" },
  { code: "es", name: "Spanish" },
];

