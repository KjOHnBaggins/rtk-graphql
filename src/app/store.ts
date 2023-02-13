import { configureStore } from "@reduxjs/toolkit";
import homePageSlice from "./containers/HomePage/homePageSlice";

export const store = configureStore({
  reducer: {
    homePage: homePageSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
