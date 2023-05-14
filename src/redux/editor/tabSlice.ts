import { createSlice } from "@reduxjs/toolkit";
import { activeTab, tabs } from "../../data/tabsInitialState";

export type Tab = string;

let initialState = {
  activeTab,
  tabs,
};

export const tabSlice = createSlice({
  name: "tabs",
  initialState: initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },

    addTab: (state) => {},

    closeTab: (state) => {},
  },
});

export default tabSlice.reducer;

export const { setActiveTab, addTab, closeTab } = tabSlice.actions;
