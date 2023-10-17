import { InputType, RadioButtonDataType } from "types"
export const AddressData: InputType = { 
        id: 1,
        // border:"focus:border-green-10 focus:border-2",
        content:"after:content-['*'] after:ml-1 after:text-green-10 ",
        height: "h-[54px]",
        label: "Address",
        textSize: "generalText",
        type: "text",
}
export const CardNumberData : InputType = { 
        id: 1,
        border:"focus:border-green-10 focus:border-2",
        content:"after:content-['*'] after:ml-1 after:text-green-10 ",
        height: "h-[54px]",
        label: "Card number",
        textSize: "generalText",
        type: "text",
}
export const ExpiryData: InputType = { 
        id: 1,
        border:"focus:border-green-10 focus:border-2",
        content:"after:content-['*'] after:ml-1 after:text-green-10 ",
        height: "h-[54px]",
        label: "Expiry",
        textSize: "generalText",
        type: "text",
}
export const CvcData: InputType = {
        id: 1,
        border: "focus:border-green-10 focus:border-2",
        content: "after:content-['*'] after:ml-1 after:text-green-10 ",
        height: "h-[54px]",
        label: "CVC",
        textSize: "generalText",
        type: "text",
}
export const PostcodeData: InputType = {
        id: 1,
        // border: "focus:border-green-10 focus:border-2",
        content: "after:content-['*'] after:ml-1 after:text-green-10 ",
        height: "h-[54px]",
        label: "Postcode",
        textSize: "generalText",
        type: "text",
}

export const PaymentMethodData:RadioButtonDataType[] = [
        {
            label: "Card",
            value: 0,
            classes:"gap-[10px] flex-row-reverse justify-end"
        },
        {
            label: "Paypal",
            value: 1,
            classes:"gap-[10px] flex-row-reverse justify-end",
        },
       
];
