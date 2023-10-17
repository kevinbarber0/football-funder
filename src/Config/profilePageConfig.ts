import { CardLabelType,InputType,SelectCardDataType, SocialMediaLinkDataType,FactItemType } from "types"

import { BiMap } from 'react-icons/bi'
import { TbUsersGroup } from 'react-icons/tb'
import { BsInstagram, BsFacebook, BsLinkedin} from 'react-icons/bs'
import { FiTwitter, FiYoutube } from 'react-icons/fi'
import FundraiserCardImg1 from 'Assets/images/explore/card-a.png'
import FundraiserCardImg2 from 'Assets/images/explore/card-b.png'
import FundraiserCardImg3 from 'Assets/images/explore/card-c.png'
import AdvertisingCardImg1 from 'Assets/images/explore/card-d.png'
import AdvertisingCardImg2 from 'Assets/images/explore/card-e.png'
import SponsorshipCardImg1 from 'Assets/images/explore/card-f.png'

export const ProfileLocationLabelData: CardLabelType = {
    icon:BiMap,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "Durham, England",
}

export const ProfileClubLabelData: CardLabelType = {
    icon:TbUsersGroup,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "Club",
}

export const SocialMediaLinkData: SocialMediaLinkDataType[] = [
    {
        label:"Instagram",
        baseUrl: "www.instagram.com/",
        icon: BsInstagram,
        placeholder:"Instagram"
    },
    {
        label: "Facebook",
        baseUrl: "www.facebook.com/",
        icon: BsFacebook,
        placeholder:"Facebook"
    },
    {
        label: "Twitter",
        baseUrl: "www.twitter.com/",
        icon: FiTwitter,
        placeholder:"Twitter"
    },
    {
        label: "YouTube",
        baseUrl: "www.youtube.com/",
        icon: FiYoutube,
        placeholder:"YouTube"
    },
    {
        label: "Linkedin",
        baseUrl: "www.linkedin.com/",
        icon: BsLinkedin,
        placeholder:"Linkedin"
    },
]

export const SelectFundraiserCardData: SelectCardDataType[] = [
    {
        image: FundraiserCardImg1,
        title: "Running a crowdfunding campaign for my football club",
        value:"1"
    },
    {
        image: FundraiserCardImg2,
        title: "Sit faucibus augue arcu iaculis amet odio nisl ac. Lectus ac et.",
        value:"2"
    },
    {
        image: FundraiserCardImg3,
        title: "Justo risus turpis risus fermentum fringilla egestas.",
        value:"3"
    },
]

export const SelectAdvertisingCardData: SelectCardDataType[] = [
    {
          image: AdvertisingCardImg1,
        title: "Pitchisde advertising board 1220x610cm",
        value:"1"
    },
    {
          image: AdvertisingCardImg2,
        title: "Sit faucibus augue arcu iaculis amet odio nisl ac. Lectus ac et.",
        value:"2"
    },
]

export const SelectSponsorshipCardData: SelectCardDataType[] = [
    {
          image: SponsorshipCardImg1,
        title: "Front of shirt sponsorship - Season 2023/24",
        value:"1"
    }
]

export const FoundedData: InputType = { 
    label: "Founded",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
}
export const TrophiesData: InputType = { 
    label: "Trophies",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
}
export const CapacityData: InputType = { 
    label: "Capacity",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
}
export const AverageAttendanceData: InputType = { 
    label: "Average attendance",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
}
export const AveragePlayerAgeData: InputType = { 
    label: "Average player age",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
}

export const WebSiteURLData: InputType = {

    label: "Website URL",
    height: "h-[58px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
}

export const FaceItemData: FactItemType[] = [
    {
        title:"Since",
         value:"2004"
    },
    {
        title:"Trophies",
         value:"12"
    },
    {
        title:"Capacity",
         value:"1000"
    },
    {
        title:"Average attendance",
         value:"669"
    },
    {
        title:"Average player age",
         value:"26"
    },
]

export const IndividualFactItemData: FactItemType[] = [
    {
        title:"Member since",
         value:"2023"
    },
    {
        title:"Supported fundraisers",
         value:"1000"
    },
    {
        title:"Total spent",
         value:"£2"
    },
   
]