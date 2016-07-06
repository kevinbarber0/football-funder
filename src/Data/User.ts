import { createSlice } from '@reduxjs/toolkit';

export interface UserStateType { 
    address_line1: string;
    address_line2: string;
    category: {
        name: string;
        id: number;
    };
    category_id: number;
    city: string;
    country: string;
    created_at: string; // Change Date to string
    email: string;
    first_name: string;
    id: number;
    last_login: string; // Change Date to string
    last_name: string;
    organization: {
        address1: string;
        address2: string;
        city: string;
        country: string;
        created_at: string; // Change Date to string
        id: number;
        name: string;
        phone_number: string;
        post_code: string;
        updated_at: string; // Change Date to string
    };
    organization_id: number;
    phone_number: string;
    post_code: string;
    role: string;
    updated_at: string; // Change Date to string
    profile_url?:string
}

const initialUserState: {
    userInfo: UserStateType;
} = {
    userInfo : {
        address_line1: '',
        address_line2: '',
        category: {
            name: '',
            id: 0,
        },
        category_id: 0,
        city: '',
        country: '',
        created_at: '', // Change new Date() to an empty string
        email: '',
        first_name: '',
        id: 1,
        last_login: '', // Change new Date() to an empty string
        last_name: '',
        organization: {
            address1: '',
            address2: '',
            city: '',
            country: '',
            created_at: '', // Change new Date() to an empty string
            id: 1,
            name: '',
            phone_number: '',
            post_code: '',
            updated_at: '', // Change new Date() to an empty string
        },
        organization_id: 1,
        phone_number: '',
        post_code: '',
        role: '',
        updated_at: '', // Change new Date() to an empty string
        profile_url:''
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUserInfo: (state: any, action: any) => {
            const data = action.payload;
            state.userInfo = {...state.userInfo, ...data}
        }
    }
})

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;