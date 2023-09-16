import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../slices/timerSlice";
import formReducer from "../slices/formSlice";
import quizReducer from "../slices/quizSlice";

export const store = configureStore({
    reducer: {
        timer: timerReducer,
        form: formReducer,
        quiz: quizReducer,
    },    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
