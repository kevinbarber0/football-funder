import { CardLabelType,InputType, RadioButtonDataType } from "types"
import { BiMap} from 'react-icons/bi'
import { BsTag } from "react-icons/bs";
import { FaRegUserCircle, FaRegCalendarAlt, } from 'react-icons/fa'
export const ProfileURLData: InputType = { 
        id: 1,
        border:"focus:border-2",
        label: "Custom URL",
        height: "h-[54px]",
        textSize: "generalText",
        type: "text",
}

export const AdsNumberData: InputType = {

    id: 1,
    label: "Number of Ads",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}
export const PerkTitleData: InputType = {

    id: 1,
    label: "Perk title",
    height: "h-[54px]",
    textSize: "text-[16px] leading-[22px]",
    type: "text",
    content:"after:content-['*'] after:ml-1 after:text-green-10 "
}

export const FinalTouchPageCheckboxData:RadioButtonDataType[] = [
    {
        label: "I confirm I have read and understand Football Funder’s Terms & Conditions and Fraud Policy.",
        value: 0,
    },
    {
        label: "I agree for the commercial contact to be contacted by phone or email from interested parties, and that the use of the enquiry form will share details with interested parties.",
        value: 1,
    },
    {
        label: "I acknowledge that for the listing to be marked as sold, Football Funder will ask whether the placement was sold successfully or not, and who to.",
        value: 2,
    },
];

export const AdDetailPeriodCardLabelData:CardLabelType = {
    icon:FaRegCalendarAlt,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "April 2023 to April 2024",
}
export const AdDetailClubTypeCardLabelData:CardLabelType = {
    icon:BsTag,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "Club",
}
export const AdDetailCommencementDateLabelData:CardLabelType = {
   icon:FaRegCalendarAlt,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "23rd April 2023",
}

export const AdDetailClubCardLabelData:CardLabelType = {
    icon:FaRegUserCircle,
    backgroundColor: "bg-green-80",
    textColor: "text-green-10",
    text: "Coxhoe Athletic FC",
}
export const AdDetailLocationCardLabelData:CardLabelType = {
    icon:BiMap,
    backgroundColor: "bg-green-80",
    textColor: "text-white", 
    text: "Durham, England",
}

