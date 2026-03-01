import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    isNavbarOpen: boolean
    navbarMode: string
}

const initialState: CounterState = {
    isNavbarOpen: false,
    navbarMode: "home"
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNavbar: (state) => {
            state.isNavbarOpen = !state.isNavbarOpen

        },
        setNavbarMode: (state, action: PayloadAction<string>) => {
            state.navbarMode = action.payload
        }

    },
})

export const { setNavbar, setNavbarMode } = counterSlice.actions

export default counterSlice.reducer