import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  links: [],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
    },

    addLink: (state, action) => {
      //state.links.push(action.payload);
      state.links = [...state.links, action.payload];
    },

    removeLink: (state, action) => {
      state.links = state.links
        .filter((link) => link.id != action.payload.id)
        .map((link, index) => ({
          ...link,
          id: index + 1,
        }));
    },
    updateLink: (state, action) => {
      state.links = state.links.map((link) => {
        if (link.id === action.payload.link.id) return action.payload.link;
        return link;
      });
    },
  },
});

export const { setUser, addLink, removeLink, updateLink } = globalSlice.actions;

export default globalSlice.reducer;
