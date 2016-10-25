import { IconType } from "react-icons/lib";
export interface ButtonDataType {
    backgroundColor?: string,
    otherStyle?: string;
    padding?: string;
    width?: string,
    height?: string,
    text?: string,
    textColor?: string,
    textSize?: string,
    border?: string,
    handleClick?: (val:any) => void;
    image?: string,
    icon?: IconType,
    disabled?: boolean
    value?: number
    type?: "button" | "submit" | "reset";
}