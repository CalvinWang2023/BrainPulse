import { configureStore } from "@reduxjs/toolkit";
import timerReducer from "../slices/timerSlice";
import formReducer from "../slices/formSlice";
import quizReducer from "../slices/quizSlice";
import pageReducer from "../slices/pageSlice";

export const store = configureStore({
    reducer: {
        page: pageReducer,
        timer: timerReducer,
        form: formReducer,
        quiz: quizReducer,
    },    
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
