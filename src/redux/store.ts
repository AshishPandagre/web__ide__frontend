import { configureStore } from "@reduxjs/toolkit";
import fileTreeReducer from './editor/fileTreeSlice'
import tabsReducer from "./editor/tabSlice";
import fileCodeReducer from "./editor/fileCodeSlice";

export const store = configureStore({
  reducer: {
    fileTree: fileTreeReducer,
    tabs: tabsReducer,
    fileCode: fileCodeReducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
