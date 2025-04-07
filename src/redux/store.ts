import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter.Slice";
import taskReducer from "./features/tasks/tasks.Slice";
import userReducer from "./features/users/users.Slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
