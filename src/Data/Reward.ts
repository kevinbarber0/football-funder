import { createSlice } from '@reduxjs/toolkit';

export interface RewardStateType { 
    title: string,
    amount: string,
    description: string,
    available_number: number,
    unlimited: boolean,
    about: string,
    delivery: boolean,
    dispatch_date: string,
    created_at: string,
    updated_at: string,
    id: number
}

const initialRewardState: {
    rewardData: RewardStateType[];
} = {
    rewardData: []
};

const rewardSlice = createSlice({
    name: 'reward',
    initialState: initialRewardState,
    reducers: {
        setReward: (state: any, action: any) => {
            state.rewardData = [...state.rewardData, action.payload];
        }
    }
})

export const { setReward } = rewardSlice.actions;
export default rewardSlice.reducer;