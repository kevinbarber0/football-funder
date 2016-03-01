import {
    HOME_URL,
    EXPLORE_URL,
    FUNDRAISERSIGNUP_URL,
    FUNDRAISERACCOUNTUPDATE_URL,
    CROWDFUNDINGLIST_URL,
    CREATEFUNDRAISER_URL,
    ADVERTISINGSIGNUP_URL,
    ADVERTISINGACCOUNTUPDATE_URL,
    CREATEADVERTISING_URL,
    ADSLISTING_URL,
    CREATESPONSORSHIP_URL,
    SPONSORSHIPSIGNUP_URL,
    SPONSORSHIPACCOUNTUPDATE_URL,
    SPONSORSHIPLISTING_URL,
    FEES_URL,
    ABOUTUS_URL,
    SUPPORT_URL,
    MYACCOUNT_URL,
    PROFILEPAGE_URL,
    FAQ_URL,
} from "Lib/urls";
import {
    ButtonItemType,
    MenuItemType,
    AccountMenuDataType,
    HamburgerMenuItemType,
    SearchDataType
} from "types";
import { MdSearch } from "react-icons/md";


export const homeButtonData: ButtonItemType = {
        title: "Home",
        href: HOME_URL,
}
export const exploreButtonData: ButtonItemType = {
        title: "Explore",
        href: EXPLORE_URL,
}
export const aboutButtonData: ButtonItemType = {
    title: "About",
    href: ABOUTUS_URL,
}
export const faqButtonData: ButtonItemType = {
    title: "FAQ",
    href:FAQ_URL,
}
export const supprotButtonData: ButtonItemType = {
    title: "Support",
    href: SUPPORT_URL,
}
export const feeButtonData: ButtonItemType = {
    title: "Fees",
      href:FEES_URL,
}
export const fundraisingButtonData = (isAuth: boolean, isUpdated: string) => ({
  
    title: "Fundraising",
    href: "/",
    children: [
        {
            title: "Fundraise",
            href: isAuth ? (isUpdated? CREATEFUNDRAISER_URL : FUNDRAISERACCOUNTUPDATE_URL) : FUNDRAISERSIGNUP_URL,
        },
        {
            title: "Contribute",
            href: CROWDFUNDINGLIST_URL
        },
    ]
})
export const sponsorshipButtonData =(isAuth:boolean, isUpdated:string)  =>({
     title: "Sponsorship",
        href: "/",
        children: [
            {
                title: "Buy",
                href: isAuth ? (isUpdated? CREATESPONSORSHIP_URL : SPONSORSHIPACCOUNTUPDATE_URL) : SPONSORSHIPSIGNUP_URL,
            },
            {
                title: "Sell",
                href: SPONSORSHIPLISTING_URL
            },
        ]
})
export const advertisingButtonData= (isAuth:boolean, isUpdated:string) => ({
     title: "Advertising",
        href: "/",
        children: [
            {
                title: "Buy",
                  href: isAuth ? (isUpdated? CREATEADVERTISING_URL : ADVERTISINGACCOUNTUPDATE_URL) : ADVERTISINGSIGNUP_URL,
            },
            {
                title: "Sell",
                href:  ADSLISTING_URL
            },
        ]
})
export const moreButtonData: MenuItemType = {
   
        title: "More",
        href: "/",
        children: [
            {
                title: "FAQ",
                href: FAQ_URL
            },
            {
                title: "About",
                href: ABOUTUS_URL
            },
            {
                title: "Support",
                href: SUPPORT_URL
            },
        ]
}

  export const HamburgerListData: HamburgerMenuItemType[] = [
    
    {
      href: "/",
      title: "Home",
    },
    {
      href: EXPLORE_URL,
      title: "Explore",
    },
    {
      title: "Fundraising",
      children: [
            {
                title: "Fundraise",
                href: CREATEFUNDRAISER_URL
            },
            {
                title: "Contribute",
                href: CROWDFUNDINGLIST_URL
            },
        ]
    },
    {
      title: "Advertising",
       children: [
            {
                title: "Buy",
                href: ADSLISTING_URL
            },
            {
                title: "Sell",
                href:  CREATESPONSORSHIP_URL
               
            },
        ]
    },
    {
      title: "Sponsorship",
      children: [
            {
                title: "Buy",
                href: SPONSORSHIPLISTING_URL
            },
            {
                title: "Sell",
                href: CREATESPONSORSHIP_URL
            },
        ]
    },
    {
        title: "Fees",
        href: FEES_URL,
    },
    {
        title: "FAQ",
      href: FAQ_URL,
    },
    {
        title: "About",
      href: ABOUTUS_URL,
    },
    {
        title: "Support",
      href: SUPPORT_URL,
    },
  ];

export const AccounMenuData : AccountMenuDataType[] = [
    {
        id: 1,
        title: 'My Account',
        url: MYACCOUNT_URL
    },
    {
        id: 2,
        title: 'Profile',
        url:PROFILEPAGE_URL
    },
    {
        id: 3,
        title: 'Sign out'
    },
];

export const HamburgerSearchData: SearchDataType = {
    backgroundColor: "bg-green-30",
    placeholder: "Search",
    placeholderClass: "placeholder:text-[16px] placeholder:leading-[22px] placeholder:font-medium placeholder:text-gray-300",
    padding: "py-3 pl-8 pr-[35px]",
    inputColor:"text-white",
    inputTextSize: "font-medium text-[14px]",
    border:"border-none",
    icon: MdSearch,
    iconColor: "text-white",
    iconSize:"text-[16px]"
};