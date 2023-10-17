import { ListingApprovalDataType, WithdrawalApprovalDataType } from "types"

export const LISTING_TABLE_HEAD = [
    "Title",
    "Status",
    "Type",
    "User",
    "Posted",
    "Fee (Editable)",
    "Action"
]

const lisitngType = ["Fundraiser", "Advertising", "Sponsorship"];

export const lisingTableData: ListingApprovalDataType = [...Array(10)].map((_, index) => (
    {
    id: index,
    title: "Running a crowdfunding campaign for my football club",
    status: Math.floor(Math.random() * 100 % 4),
    type: lisitngType[Math.floor(Math.random() * 100 % 3)],
    user: "Damien Scott",
    posted: "21 min ago",
    fee:  Math.floor(Math.random() * 100)
    }))

export const WITHDRAWAL_TABLE_HEAD = [
    "Title",
    "Status",
    "Type",
    "User",
    "Amount",
    "Account details",
    "Action"
]

const withdrawalType = ["Fundraiser", "Advertising", "Sponsorship"];

export const withdrawalTableData: WithdrawalApprovalDataType = [...Array(10)].map((_, index) => (
    {
    id: index,
    title: "Running a crowdfunding campaign for my football club",
    status: Math.floor(Math.random() * 100 % 2),
    type: withdrawalType[Math.floor(Math.random() * 100 % 3)],
    user: "Damien Scott",
        amount: Math.floor(Math.random() * 10000),
        bankAccountName: "Coxhoe Athletic Ltd",
        accountNumber: 12345678,
        sortCode:"01-02-03"
}))