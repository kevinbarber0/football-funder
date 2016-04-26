import { IconType } from "react-icons/lib"

export interface userFundListDataType { 
    name: string,
    fund: number,
    startDay:string
}
export interface userCommentListDataType { 
    name: string,
    commentNum:number,
    chat: string,
    Icon:IconType,
    startDay:string
}
export interface userLiveList { 
    name: string,
    fund: string,
    startDay:string
}