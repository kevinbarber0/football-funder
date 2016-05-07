import { IconType } from "react-icons/lib"

export interface AccountPageTabButtonType {
    handleClick: () => void
    icon?:IconType
    name: string,
    selectedBtnName:string
    value:string,
    textSize: string,
    textColor:string
}

export interface AccountPageTabButtonNameType {
    icon?:IconType
    name: string,
    value:string
}
