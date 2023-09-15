import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Timer = {
    initialTime: 10,
    elapsedTime: 0,
    isTimerStop: false,
};

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        setElapsedTime(state, { payload }: PayloadAction<number>) {
            state.elapsedTime += payload;
        },
        setTimerStop(state, { payload }: PayloadAction<boolean>) {
            state.isTimerStop = payload;
        },
        setTimerStart(state) {
            state.elapsedTime = 0;
            state.isTimerStop = false;
        },
        setTimerComplete(state) {
            state.elapsedTime = 10;
            state.isTimerStop = true;
        },
    },
});

export const {
    setElapsedTime,
    setTimerStop,
    setTimerComplete,
} = timerSlice.actions;

export default timerSlice.reducer;