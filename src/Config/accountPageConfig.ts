
import {
    AccountPageTabButtonNameType,
    ChattingAccordionType,
    CardLabelType,
    LabelAccordionType,
    MyDropdownType,
    RadioButtonDataType,
    SelectDataType
} from "types"
import { BiMap } from 'react-icons/bi'
import { FaUsers } from 'react-icons/fa'
import { BsThreeDots } from "react-icons/bs";
import { HiOutlinePencil, HiOutlineEye, } from "react-icons/hi";
import { TbArrowsDiff } from 'react-icons/tb'
import { AiOutlineCloseCircle, AiOutlineGift } from 'react-icons/ai'
import { BiShareAlt,BiLinkAlt} from 'react-icons/bi'

export const AccountLocationCardLabelData: CardLabelType = {
    icon:BiMap,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "Durham, England",
}
export const AccountClubTypeCardLabelData:CardLabelType = {
    icon:FaUsers,
    backgroundColor: "bg-gray-20",
    textColor: "text-green-70", 
    text: "Club",
}

export const AccountPageTabButtonNameData: AccountPageTabButtonNameType[] = [
    {
        name: "My Profile",
        value:"myProfile"
    },
    {
        name: "Fundraising",
        value:"fundraising"
    },
    {
        name: "Advertising",
        value:"advertising"
    },
    {
        name: "Sponsorship",
        value:"sponsorship"
    },
    {
        name: "Withdraw Funds",
        value:" withdrawFunds"
    },
    {
        name: "Manage Rewards",
        value:"managerewards"
    },
    {
        name: "Help",
        value:"help"
    },
]
export const CardMenuTabButtonNameData: AccountPageTabButtonNameType[] = [
    
        {
            icon:HiOutlineEye,
            name: "View",
            value:"view"
        },
        {
            icon:HiOutlinePencil,
            name: "Edit",
            value:"edit"
        },
        {
            icon:TbArrowsDiff,
            name: "Withdraw Funds",
            value:"withdrawfunds"
        },
        {
            icon:AiOutlineCloseCircle,
            name: "End Fundraiser",
            value:"endfundraiser"
        },
        {
            icon:AiOutlineGift,
            name: "Manage Rewards",
            value:"managerewards"
        },
        
    ]


export const CardDropdownData: MyDropdownType = {
   
    icon:BsThreeDots,
    children: [
        {
            icon:HiOutlineEye,
            title: "View",
        },
        {
            icon:HiOutlinePencil,
            title: "Edit",
        },
        {
            icon:TbArrowsDiff,
            title: "Withdraw Funds",
        },
        {
            icon:AiOutlineCloseCircle,
            title: "End Fundraiser",
        },
        {
            icon:AiOutlineGift,
            title: "Manage Rewards",
        },
    ]
}
export const AccountDropdownData: MyDropdownType = {

    icon:BsThreeDots,
    children: [
        {
            icon:BiShareAlt,
            title: "Share",
        },
        {
            icon:BiLinkAlt,
            title: "Copy link",
        },
        
    ]
}

export const RewardsSortbyData: SelectDataType[] = [
    {
        value: 1,
        option: 'Newest',
    },
    {
        value: 2,
        option: 'Promoted',
    },   
    {
        value: 3,
        option: 'Oldest',
    },   
    {
        value: 4,
        option: 'High to Low',
    },   
    {
        value: 5,
        option: 'Low to High',
    },   
];


export const CampaignCheckboxData:RadioButtonDataType[] = [
    {
        label: "Live",
        value: 1,
        classes:"gap-[10px] flex-row-reverse justify-end"
    },
    {
        label: "Funded",
        value: 0,
        classes:"gap-[10px] flex-row-reverse justify-end"
    },
];

export const DownloadFormatData:RadioButtonDataType[] = [
        {
            label: "PDF",
            value: 0,
            classes:"gap-[10px] flex-row-reverse justify-end"
        },
        {
            label: "XLS",
            value: 1,
            classes:"gap-[10px] flex-row-reverse justify-end",
        },
        {
            label: "CSV",
            value: 2,
            classes:"gap-[10px] flex-row-reverse justify-end",
        },
       
];

export const ClaimersListData: LabelAccordionType[] = [
    {
        address: "22 Burdon Place, Sedgefield, Stockton-on-Tees, TS21 3BF",
        date: "1 weeks",
        email: "damien.scott89@gmail.com",
        name: "Damien Scott",
        sent:false
    },
    {
        address: "22 Burdon Place, Sedgefield, Stockton-on-Tees, TS21 3BF",
        date: "1 weeks",
        email: "sheldon.copper89@gmail.com",
        name: "Sheldon Coppper",
        sent:false
    },
    {
        address: "22 Burdon Place, Sedgefield, Stockton-on-Tees, TS21 3BF",
        date: "1 weeks",
        email: "donart.selimi89@gmail.com",
        name: "Donart Selimi",
        sent:false
    },
]
export const ChatListData: ChattingAccordionType[] = [
    {
        date: "1 weeks",
        name: "Damien Scott",
        content: "Vel amet iaculis id adipiscing venenatis sed volutpat. Dictumst sem pellentesque lectus sollicitudin. Vel amet iaculis id adipiscing venenatis sed volutpat.",
        chatHistory: {
            me: [
                    {
                        content: "Lorem ipsum dolor sit amet.",
                        date:"1 day ago"
                    },
                    {
                        content: "Lorem ipsum dolor sit amet.",
                        date:"2 day ago"
                    },
                    {
                        content: "Lorem ipsum dolor sit amet.",
                        date:"3 day ago"
                    },
                    {
                        content: "Lorem ipsum dolor sit amet.",
                        date:"4 day ago"
                    },
                    {
                        content: "Lorem ipsum dolor sit amet.",
                        date:"5 day ago"
                    },
                ],
            oppotunity: [
                {
                    content: "Proin quis dictum arcu, non tincidunt nulla. Pellentesque habitant morbi.",
                    date: "1 day ago"
                },
                {
                    content: "Proin quis dictum arcu, non tincidunt nulla. Pellentesque habitant morbi.",
                    date: "2 day ago"
                },
                {
                    content: "Proin quis dictum arcu, non tincidunt nulla. Pellentesque habitant morbi.",
                    date: "3 day ago"
                },
                {
                    content: "Proin quis dictum arcu, non tincidunt nulla. Pellentesque habitant morbi.",
                    date: "4 day ago"
                },
                {
                    content: "Proin quis dictum arcu, non tincidunt nulla. Pellentesque habitant morbi.",
                    date: "5 day ago"
                },
              
            ]
        }
    },
    {
        date: "1 weeks",
        name: "Sheldon Coppper",
        content: "Vel amet iaculis id adipiscing venenatis sed volutpat. Dictumst sem pellentesque lectus sollicitudin. Vel amet iaculis id adipiscing venenatis sed volutpat.",
        chatHistory: {
            me: [
                    {
                        content: "Lorem ipsum dolor sit amet.",
                        date:"4 day ago"
                    },
            ],
            oppotunity: [
                    {
                    content: "Proin quis dictum arcu, non tincidunt nulla. Pellentesque habitant morbi.",
                    date: "5 day ago"
                    },
            ]
        }
    },
    {
        date: "1 weeks",
        name: "Donart Selimi",
        content:"Vel amet iaculis id adipiscing venenatis sed volutpat. Dictumst sem pellentesque lectus sollicitudin. Vel amet iaculis id adipiscing venenatis sed volutpat. "
    },
    {
        date: "1 weeks",
        name: "Donart Selimi",
        content:"Vel amet iaculis id adipiscing venenatis sed volutpat. Dictumst sem pellentesque lectus sollicitudin. Vel amet iaculis id adipiscing venenatis sed volutpat. "
    },
    {
        date: "1 weeks",
        name: "Donart Selimi",
        content:"Vel amet iaculis id adipiscing venenatis sed volutpat. Dictumst sem pellentesque lectus sollicitudin. Vel amet iaculis id adipiscing venenatis sed volutpat. "
    },
]
