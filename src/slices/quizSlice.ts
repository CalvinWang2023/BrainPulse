import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: QuizState = {
    questions: [],
    isLoading: true,
    currentIndex: 0,
    picked: '',
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuiz(state, { payload }: PayloadAction<Question[]>) {
            state.questions = payload;
        },
        setIsLoading(state, { payload }: PayloadAction<boolean>) {
            state.isLoading = payload;
        },
        setCurrentIndex(state) {
            state.questions.length - 1 === state.currentIndex ? state.currentIndex : state.currentIndex += 1;
        },
    },
});

export const {
    setQuiz,
    setIsLoading,
    setCurrentIndex,
} = quizSlice.actions;

export default quizSlice.reducer;