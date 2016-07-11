import {
    CardType,
    CategoryDataType,
    ContactPhoneNumberType,
    InputType,
    RadioButtonDataType,
    SelectDataType,
    WithdrawFundItemType
} from 'types';
import CardImageA from 'Assets/images/explore/card-a.png'
import CardImageB from 'Assets/images/explore/card-b.png'
import CardImageC from 'Assets/images/explore/card-c.png'
import CardImageD from 'Assets/images/explore/card-d.png'
import CardImageE from 'Assets/images/explore/card-e.png'
// import CardImageF from 'Assets/images/explore/card-f.png'
import CardSImageNone from 'Assets/images/explore/card-s-none.png'
// import CardWImageNone from 'Assets/images/explore/card-w-none.png'
import { CardLabelType, userFundListDataType, userCommentListDataType } from 'types'
import { FaRegUserCircle, FaRegCalendarAlt, } from 'react-icons/fa'
import { BiMap, BiMessageRounded } from 'react-icons/bi'
import { RiHeart3Line, RiHeart3Fill } from "react-icons/ri";
export const FundraiserCategoryData: CategoryDataType[] = [
    {
        label: "Club",
        value: 1,
    },
    {
        label: "Individual",
        value: 2
    },
    {
        label: "Supporters’ Trust",
        value: 3

    },
    {
        label: "Local community",
        value: 4
    },
    {
        label: "Foundation",
        value: 5
    },
    {
        label: "League",
        value: 6
    },
    {
        label: "Charity",
        value: 7
    },
    {
        label: "Singing Section / Ultras",
        value: 8
    },
    {
        label: "Agency / Rights holder",
        value: 9
    },
    {
        label: "Podcast / Vlog",
        value: 10
    },
    {
        label: "Advertiser/Sponsor",
        value: 11
    },
    {
        label: "Other",
        value: 12
    },
]

export const FundraiserNationData: CategoryDataType[] = [

    {
        label: "England",
        value: 1,
    },
    {
        label: "Scotland",
        value: 2
    },
    {
        label: "Wales",
        value: 3

    },
    {
        label: "Northern Ireland",
        value: 4
    }
]

export const ContactOrganisationData: InputType = {
    id: 1,
    label: "Organisation name",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}

export const ContactPhoneNumberData: ContactPhoneNumberType[] = [
    {
        country: "UK",
        randomNumber: "(123) 123-1234"
    },
    {
        country: "UK",
        randomNumber: "(123) 123-2345"
    },
    {
        country: "UK",
        randomNumber: "(123) 123-3456"
    },
    {
        country: "UK",
        randomNumber: "(123) 123-4567"
    },
];


export const ContactAddressLine1Data: InputType = {
    id: 1,
    label: "Address line 1",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const ContactAddressLine2Data: InputType = {
    id: 2,
    label: "Address line 2",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const ContactTownData: InputType = {
    id: 1,
    label: "Town/City",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const ContactPostcodeData: InputType = {
    id: 2,
    label: "Postcode",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountEmailData: InputType = {
    id: 1,
    label: "Email",
    height: "h-[54px]",
    textSize: "generalText",
    type: "email",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountPasswordData: InputType = {
    id: 1,
    label: "Password",
    height: "h-[54px]",
    textSize: "generalText",
    type: "password",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountConfirmPasswordData: InputType = {
    id: 2,
    label: "Confirm password",
    height: "h-[54px]",
    textSize: "generalText",
    type: "password",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const FirstNameData: InputType = {
    id: 1,
    // border:"focus:border-green-10 focus:border-2",
    content: "after:content-['*'] after:ml-1 after:text-green-10 ",
    height: "h-[54px]",
    label: "First name",
    textSize: "generalText",
    type: "text",
}
export const LastNameData: InputType = {
    id: 2,
    // border:"focus:border-green-10 focus:border-2",
    content: "after:content-['*'] after:ml-1 after:text-green-10",
    label: "Last name",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
}
export const DateData: InputType = {
    id: 1,
    label: "Date of Birth",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const DispatchDateData: InputType = {
    id: 2,
    label: "Pick a date",
    height: "h-[54px]",
    textSize: "generalText",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}

export const PhoneNumberData: InputType = {

    id: 5,
    label: "Phone Number",
    height: "h-[58px]",
    textSize: "generalText",
    type: "tel",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}

export const WebSiteData: InputType = {

    id: 6,
    label: "Website",
    height: "h-[58px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const VideoURLData: InputType = {

    id: 7,
    label: "Video URL",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AvailableNumberData: InputType = {

    id: 8,
    label: "Add a number",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const AccountNumberData: InputType = {

    id: 8,
    label: "Account number",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const SortCodeData: InputType = {

    id: 8,
    label: "Sort Code",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const NameData: InputType = {

    id: 9,
    label: "Name",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
    content: "after:content-['*'] after:ml-1 after:text-green-10 "
}
export const RegionData: SelectDataType[] = [
    {
        value: 1,
        option: 'England',
    },
    {
        value: 2,
        option: 'Scotland',
    },
    {
        value: 3,
        option: 'Wales',
    },
    {
        value: 4,
        option: 'Northern Ireland',
    },
];
export const CategoryData: SelectDataType[] = [
    {
        value: 1,
        option: 'Organization',
    },
    {
        option: 'Individual',
        value: 2,
    },

];

export const DeliveryData: RadioButtonDataType[] = [
    {
        label: "Yes",
        value: 1,
        classes: "gap-[10px] flex-row-reverse justify-end"
    },
    {
        label: "No",
        value:0,
        classes: "gap-[10px] flex-row-reverse justify-end",
    },

];

export const CrowdFundListData: CardType[] = [
    {
        broadcastingType: 'Live',
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress: true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "11th April 2023",
        },
        collection: {
            icon: BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "15 Comments",
        },
        image: CardImageA,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress: true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "11th April 2023",
        },
        collection: {
            icon: BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "15 Comments",
        },
        image: CardImageB,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress: true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "11th April 2023",
        },
        collection: {
            icon: BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "15 Comments",
        },
        image: CardImageC,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress: true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "11th April 2023",
        },
        collection: {
            icon: BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "15 Comments",
        },
        image: CardImageA,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress: true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "11th April 2023",
        },
        collection: {
            icon: BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "15 Comments",
        },
        image: CardImageB,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress: true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "11th April 2023",
        },
        collection: {
            icon: BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "15 Comments",
        },
        image: CardImageC,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress: true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "11th April 2023",
        },
        collection: {
            icon: BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "15 Comments",
        },
        image: CardImageA,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress: true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "11th April 2023",
        },
        collection: {
            icon: BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "15 Comments",
        },
        image: CardImageB,
    },
    {
        broadcastingType: 'Live',
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Running a crowdfunding campaign for my football club',
        description: 'The sub header for running a crowdfunding campaign for my football club goes here.',
        progress: true,
        fund: '50% funded',
        curFund: 50000,
        oriFund: 100000,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "11th April 2023",
        },
        collection: {
            icon: BiMessageRounded,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "15 Comments",
        },
        image: CardImageC,
    }

];
export const AdsListData: CardType[] = [
    {
        broadcastingType: 'Live',
        vat: 3000,
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress: false,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "April 2023 to April 2024",
        },
        image: CardImageD,
    },
    {
        broadcastingType: 'Live',
        vat: 3000,
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress: false,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "April 2023 to April 2024",
        },
        image: CardImageE,
    },
    {
        broadcastingType: 'Live',
        vat: 3000,
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress: false,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "April 2023 to April 2024",
        },
        image: CardSImageNone,
    },
    {
        broadcastingType: 'Live',
        vat: 3000,
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress: false,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "April 2023 to April 2024",
        },
        image: CardImageE,
    },
    {
        broadcastingType: 'Live',
        vat: 3000,
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress: false,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "April 2023 to April 2024",
        },
        image: CardSImageNone,
    },
    {
        broadcastingType: 'Live',
        vat: 3000,
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress: false,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "April 2023 to April 2024",
        },
        image: CardImageD,
    },
    {
        broadcastingType: 'Live',
        vat: 3000,
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress: false,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "April 2023 to April 2024",
        },
        image: CardSImageNone,
    },
    {
        broadcastingType: 'Live',
        vat: 3000,
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress: false,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "April 2023 to April 2024",
        },
        image: CardImageE,
    },
    {
        broadcastingType: 'Live',
        vat: 3000,
        club: {
            icon: FaRegUserCircle,
            backgroundColor: "bg-green-80",
            textColor: "text-green-10",
            text: "Coxhoe Athletic FC",
        },
        location: {
            icon: BiMap,
            backgroundColor: "bg-green-80",
            textColor: "text-white",
            text: "Durham, England",
        },
        title: 'Pitchside advertising board',
        description: 'Subline text goes here and there’s two lines of copy available to describe it.',
        progress: false,
        date: {
            icon: FaRegCalendarAlt,
            backgroundColor: "bg-gray-100",
            textColor: "text-green-70",
            text: "April 2023 to April 2024",
        },
        image: CardImageD,
    },

];

export const CrowdDetailDateCardLabelData: CardLabelType = {
    icon: FaRegCalendarAlt,
    backgroundColor: "bg-gray-100",
    textColor: "text-green-70",
    text: "11th April 2023",
}
export const CrowdDetailCommentCardLabelData: CardLabelType = {
    icon: BiMessageRounded,
    backgroundColor: "bg-gray-100",
    textColor: "text-green-70",
    text: "15 Comments",
}
export const CrowdDetailClubCardLabelData: CardLabelType = {
    icon: FaRegUserCircle,
    backgroundColor: "bg-green-80",
    textColor: "text-green-10",
    text: "Coxhoe Athletic FC",
}
export const CrowdDetailLocationCardLabelData: CardLabelType = {
    icon: BiMap,
    backgroundColor: "bg-green-80",
    textColor: "text-white",
    text: "Durham, England",
}

export const UserFundListData: userFundListDataType[] = [
    {
        name: "Tom",
        fund: 10000,
        startDay: "1 week"
    },
    {
        name: "David",
        fund: 5000,
        startDay: "1 day"
    },
    {
        name: "Alex",
        fund: 5000,
        startDay: "5 day"
    },
    {
        name: "Alice",
        fund: 3500,
        startDay: "6 days"
    },
    {
        name: "Ema",
        fund: 2000,
        startDay: "6 days"
    },
]

export const UserCommentListData: userCommentListDataType[] = [
    {
        chat: "Love this project! Will support until the end ❤️.",
        commentNum: 0,
        Icon: RiHeart3Line,
        startDay: "1 day",
        name: "David"
    },
    {
        chat: "Wohoo let’s go!!! ⚡️",
        commentNum: 24,
        Icon: RiHeart3Fill,
        startDay: "1 day",
        name: "Ema"
    },
    {
        chat: "Such a nice thing! Supporting.",
        commentNum: 0,
        Icon: RiHeart3Line,
        startDay: "1 day",
        name: "Alice"
    },
];

export const DonateClubLabel: CardLabelType = {
    icon: FaRegUserCircle,
    backgroundColor: "bg-green-80",
    textColor: "text-green-10",
    text: "Coxhoe Athletic FC",
}

export const DonateLocationLabel: CardLabelType = {
    icon: BiMap,
    backgroundColor: "bg-green-80",
    textColor: "text-white",
    text: "Durham, England",
}

export const DonateCreateAccountConfirm: RadioButtonDataType[] = [
    {
        label: "I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy",
        value: 0
    },
    {
        label: "I would like to sign up to receive newsletters from Football Funder. See Privacy Policy.",
        value:1
    },
]
export const DonatePaymentConfirm: RadioButtonDataType[] = [
    {
        label: "I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy",
        value: 2
    },
]

export const SelectAnonymous: RadioButtonDataType[] = [
    {
        label: "Keep me anonymous",
        value: 0,
        classes: "gap-[10px] flex-row-reverse justify-end"
    },
];

export const WithdrawFundsItemData: WithdrawFundItemType[] = [
    {
        intro: "Initial target",
        value: "£100.000"
    },
    {
        intro: "Raised (lees fees)",
        value: "£50.000"
    },
    {
        intro: "Withdrawn",
        value: "£5.000"
    },
    {
        intro: "Total left to withdraw",
        value: "£45.000"
    },
]
