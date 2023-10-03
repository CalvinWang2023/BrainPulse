import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: PageState = {
    page: "home",
};

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        setPage(state, { payload }: PayloadAction<Page>) {
            state.page = payload;
        },
        setHomePage() {
            return initialState;
        },
    },
});

export const {
    setPage,
    setHomePage,
} = pageSlice.actions;

export default pageSlice.reducer;