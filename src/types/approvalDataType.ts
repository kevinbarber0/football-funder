export interface ListingApprovalType {
    id: number;
    title: string;
    status: number;
    type: string;
    user: string;
    posted: string;
    fee: number;
}

export type ListingApprovalDataType = ListingApprovalType[];

export interface WithdrawalApprovalType {
    id: number;
    title: string;
    status: number;
    type: string;
    user: string;
    amount: number;
    bankAccountName: string,
    accountNumber: number,
    sortCode:string
}

export type WithdrawalApprovalDataType = WithdrawalApprovalType[];