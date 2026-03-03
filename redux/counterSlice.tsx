import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    isNavbarOpen: boolean
    navbarMode: string
    blogNumber: number
    blogChoosed: boolean
}

const initialState: CounterState = {
    isNavbarOpen: false,
    navbarMode: "home",
    blogNumber: 0,
    blogChoosed: false
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
        },
        setBlogNumber: (state, action: PayloadAction<number>) => {
            state.blogNumber = action.payload
        },
        setBlogChoosed: (state, action: PayloadAction<boolean>) => {
            state.blogChoosed = action.payload
        }

    },
})

export const { setNavbar, setNavbarMode, setBlogNumber, setBlogChoosed } = counterSlice.actions

export default counterSlice.reducer