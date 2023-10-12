import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  links: [],
  user: {}
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload;
    },
    addLink: (state, action) => {
      state.links = [...state.links, action.payload];
    },
    updateLink: (state, action) => {
      state.links = state.links.map((link) => {
        if (link.id === action.payload.id)
          return action.payload;
        return link;
      });
    },

    removeLink: (state, action) => {
      state.links = state.links
        .filter((link) => link.id != action.payload.id)
        .map((link, index) => ({
          ...link,
          id: index + 1,
        }));
    },

    addUserData: (state, action) => {
      state.user = { ...state.user, ...action.payload.user };
    }

  },
});

export const { setUser, addLink, removeLink, updateLink, addUserData } = globalSlice.actions;

export default globalSlice.reducer;
