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

    addTab: (state, action) => {
      // adds a tab next to the active tab.
      const file_id = action.payload;
      const active_tab = state.activeTab;
      const active_tab_pos = state.tabs.indexOf(active_tab);

      if (!state.tabs.includes(file_id)) {
        state.tabs.splice(active_tab_pos + 1, 0, file_id);
      }
    },

    closeTab: (state, action) => {
      const tab_id = action.payload;
      const pos = state.tabs.indexOf(tab_id);
      state.tabs.splice(pos, 1);
    },
  },
});

export default tabSlice.reducer;

export const { setActiveTab, addTab, closeTab } = tabSlice.actions;
