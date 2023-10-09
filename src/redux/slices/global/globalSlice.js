import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: "",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload;
        },
    },
});

export const {
    setUser,
} = globalSlice.actions;

export default globalSlice.reducer;