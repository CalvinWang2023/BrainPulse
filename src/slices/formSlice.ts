import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: FormState = {
    amount: "5",
    category: "9",
    difficulty: "easy",
    type: "multiple",
};

const formSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        setForm(state, { payload: { name, value } }: PayloadAction<{
            name: keyof FormState,
            value: FormValue,
        }>) {
            return { ...state, [name]: value };
        },
        clearForm() {
            return initialState;
        },
    },
});

export const {
    setForm,
    clearForm,
} = formSlice.actions;

export default formSlice.reducer;