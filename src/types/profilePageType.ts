import { IconType } from "react-icons/lib";

export interface SocialMediaLinkDataType { 
    label:string,
    icon: IconType,
    placeholder: string,
    baseUrl:string
}

export interface SelectCardDataType { 
    image:string,
    title: string,
    value:string
}

export interface FactItemType { 
    title: string,
    value:string
}