import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: QuizState = {
    questions: [],
    isLoading: true,
    currentIndex: 0,
    isQuizCompleted: false,
    correct_number: 0,
};

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setQuiz(state, { payload }: PayloadAction<QuestionState[]>) {
            state.questions = payload;
        },
        setIsLoading(state, { payload }: PayloadAction<boolean>) {
            state.isLoading = payload;
        },
        setCurrentIndex(state) {
            if (state.questions.length - 1 === state.currentIndex) 
                state.isQuizCompleted = true  
            state.currentIndex += 1;
        },
        setPicked(state, { payload }: PayloadAction<string>) {
            const question = state.questions[state.currentIndex];
            question.picked = payload;
        },
        setQuestionScore(state, { payload }: PayloadAction<number>) {
            const question = state.questions[state.currentIndex];
            if (question.correctAnswer === question.picked) {
                question.score = payload;
                state.correct_number += 1;
            }
        },
        clearQuiz() {
            return initialState;
        },
    },
});

export const {
    setQuiz,
    setIsLoading,
    setCurrentIndex,
    setPicked,
    setQuestionScore,
    clearQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;