import { configureStore } from "@reduxjs/toolkit";
import fileTreeReducer from './editor/fileTreeSlice'
import tabsReducer from "./editor/tabSlice";

export const store = configureStore({
  reducer: {
    fileTree: fileTreeReducer,
    tabs: tabsReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
