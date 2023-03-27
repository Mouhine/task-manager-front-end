import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import modalSlice from "./Futures/modalSlice";
import boardSlice from "./Futures/board";
import taskSlice from "./Futures/taskSlice";
import { todoApi } from "./api/TaskApi";
import { boardApi } from "./api/boardApi";
export const store = configureStore({
  reducer: {
    modal: modalSlice,
    board: boardSlice,
    task: taskSlice,
    [todoApi.reducerPath]: todoApi.reducer,
    [boardApi.reducerPath]: boardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware, boardApi.middleware),
});
setupListeners(store.dispatch);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
