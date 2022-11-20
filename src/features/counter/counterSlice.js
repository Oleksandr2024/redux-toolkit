import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: Number(localStorage.getItem('count'))
    },
    reducers: {
        increment: (state) => { 
           state.count += 1
           localStorage.setItem('count', state.count)  
        },
        decrement: (state) => {
            state.count -= 1
            localStorage.setItem('count', state.count) 
        },
        reset: (state) => {
            state.count = 0
            localStorage.setItem('count', state.count) 
        },
        changeAmount: (state, action) => {
            state.count += action.payload
            localStorage.setItem('count', state.count) 
        }
    }
})

export const {increment, decrement, reset, changeAmount} = counterSlice.actions

export const counterState = (state) => state.counter

export default counterSlice.reducer