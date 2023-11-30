import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name : "counter",
    initialState : {
        value : 0
    },
    reducers:{
        increment : (state) => {state.value += 1},
        decrement : (state) => {state.value -= 1},
        incrementByAmount : (state , action) => {
            state.value += (action.payload) * 2
        },
        decrementByAmount : (state , action) => {
            state.value -= (action.payload) / 2
        }
    }
});

export const { increment, decrement, incrementByAmount , decrementByAmount} = counterSlice.actions