import { createSlice } from "@reduxjs/toolkit";

export interface FileCodeType {
  [key: string]: string;
}

let initialState: FileCodeType = {
  "004": "code from 004",
  "005": "code from 005",
  "009": "code from 009",
};

export const fileCodeSlice = createSlice({
  name: "fileCode",
  initialState,
  reducers: {
    updateCode: (state, action) => {
      const { file_id, value } = action.payload;
      state[file_id] = value;
    },
  },
});

export default fileCodeSlice.reducer;

export const {updateCode} = fileCodeSlice.actions;
