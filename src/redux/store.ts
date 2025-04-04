import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter.Slice";
import taskReducer from "./features/tasks/tasks.Slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
