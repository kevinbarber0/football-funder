import { IconType } from "react-icons/lib"

export interface ListingPageDropdownType { 
    id: number,
    name:string
}

export interface CardLabelType { 
    backgroundColor: string,
    textColor: string,
    text: string,
    icon:IconType
}

export interface CardType {
    image: string,
    broadcastingType: string,
    vat?:number,
    club?: CardLabelType,
    location?: CardLabelType,
    title: string,
    description: string,
    progress?: boolean,
    fund?: string,
    curFund?: number,
    oriFund?: number,
    date?: CardLabelType,
    collection?: CardLabelType
};

export interface DistanceDataType { 
    id?: number;
    label: string;
    type: string;
}

export interface RadioButtonDataType { 
    label: string;
    value: number;
    classes?: string;
    textStyle?: string;
}