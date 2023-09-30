import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Timer = {
    initialTime: 10,
    elapsedTime: 0,
    delay: 3,
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
            state.delay = 3;
            state.isTimerStop = false;
        },
        setTimerComplete(state) {
            state.elapsedTime = 10;
            state.isTimerStop = true;
        },
        setDelayTime(state, { payload }: PayloadAction<number>) {
            state.delay += payload;
        },
        clearTimer() {
            return initialState;
        },
    },
});

export const {
    setElapsedTime,
    setTimerStop,
    setTimerStart,
    setTimerComplete,
    setDelayTime,
    clearTimer,
} = timerSlice.actions;

export default timerSlice.reducer;