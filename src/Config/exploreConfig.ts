import {
    ButtonDataType,
    RadioButtonDataType,
    InputType,
    SearchDataType,
} from "types"
import FilterIcon from "Assets/images/explore/filter-icon.svg";
import { MdSearch } from "react-icons/md";


export const FilterSearchData: SearchDataType = {
    backgroundColor: "bg-white",
    placeholder: "Search...",
    placeholderClass:"placeholder:text-[16px] placeholder:leading-[22px] placeholder:font-medium placeholder:text-green-70",
    padding: "px-15 py-[10px]",
    iconColor: "text-black",
    inputTextSize: "font-medium text-[16px]",
    border:"border-2 border-gray-100",
    icon: MdSearch,
    iconSize: "text-[20px]",
    inputColor:"text-black"
}
export const FiterButtonProperty: ButtonDataType = {
    backgroundColor: "text-white",
    text: "Filter & Sort",
    image: FilterIcon,
    width: "w-[150px]",
    height: "h-[50px]",
    border:"border-[1px] border-gray-100",
}

export const TypeFilterData:RadioButtonDataType[] = [
    {
        label: "All",
        value: 1,
    },
    {
        label: "Fundraisers",
        value: 2,
    },
    {
        label: "Advertising",
        value: 3,
    },
    {
        label: "Sponsorship",
        value: 4,
    }
];

export const OrganisationFilterData: RadioButtonDataType[] = [
    {
        label: "All",
        value: 1,
    },
    {
        label: "Clubs",
        value: 2,
    },
    {
        label: "Supporters' Trusts",
        value: 3,
    },
    {
        label: "Local communities",
        value: 4,
    },
    {
        label: "Foundations",
        value: 5,
    },
    {
        label: "Leagues",
        value: 6,
    },
    {
        label: "Charities",
        value: 7,
    },
    {
        label: "Singing Sections / Ultras",
        value: 8,
    },
    {
        label: "Agency / Rights holder",
        value: 9,
    },
    {
        label: "Podcast / Vlog",
        value: 10,
    },
    {
        label: "Advertiser/Sponsor",
        value: 11,
    },
    {
        label: "Other",
        value: 12,
    },  
];
export const StatusFilterData:RadioButtonDataType[] = [
        {
            label: "All",
            value: 0,
        },
        {
            label: "Live",
            value: 1,
        },
        {
            label: "Pending",
            value: 2,
        },
        {
            label: "Funded / Sold",
            value: 3,
        }
    ];
export const SortByData: RadioButtonDataType[] = [
        {
            label: "Promoted",
        value: 0,
            classes:"justify-between"
        },
        {
            label: "Newest (£)",
            value: 1,
            classes:"justify-between"
        },
        {
            label: "Oldest (£)",
            value: 2,
            classes:"justify-between"
        },
        {
            label: "High to Low",
            value:  3,
            classes:"justify-between"
        },
        {
            label: "Low to High",
            value: 4,
            classes:"justify-between"
        },
    ];
 


export const MileDistanceInputFormData: InputType = {

    content:"after:content-['*'] after:ml-1 after:text-green-10",
    height: "h-[54px]",
    label: "Miles from",
    textSize:"generalText",
    type: "text",
}
export const PostcodeDistanceInputFormData: InputType = {

    content:"after:content-['*'] after:ml-1 after:text-green-10",
    height: "h-[54px]",
    label: "Postcode",
    textSize:"generalText",
    type: "text",
}
    