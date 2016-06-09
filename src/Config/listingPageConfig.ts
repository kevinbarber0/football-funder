import { ListingPageDropdownType, SearchDataType } from "types";
import { MdSearch } from "react-icons/md";

export const ListingPageDropdownData: ListingPageDropdownType[] = [
    {
        id: 1,
        name:'England'
    },   
    {
        id: 2,
        name:'Scotland'
    },   
    {
        id: 3,
        name:'Wales'
    },   
    {
        id: 4,
        name:'Northern Ireland'
    },   
];

export const ListingPageSearchData: SearchDataType = {
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
};