export interface LabelAccordionType { 
        name:string,
        date:string,
        address:string
        email:string
        sent:boolean
}

export interface ChatDetailType { 
        date: string,
        content:string
}

export interface ChatHistoryType { 
        me: ChatDetailType[],
        oppotunity:ChatDetailType[]
}

export interface ChattingAccordionType { 
        date:string,
        name: string,
        content: string,
        chatHistory? : ChatHistoryType
}