import { createSlice } from '@reduxjs/toolkit'

interface LayoutState {
  isMobileMenu: boolean,
}

const initialState: LayoutState = {
  isMobileMenu: false,
}

const layoutStateSlice = createSlice({
  name: 'layoutState',
  initialState: initialState,
  reducers: {
    setShowMobileMenu: (state, action) => {
      state.isMobileMenu = action.payload
    },
  },
})

export const { setShowMobileMenu } = layoutStateSlice.actions
export default layoutStateSlice.reducer
