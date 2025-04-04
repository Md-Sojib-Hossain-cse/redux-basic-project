import { RootState } from "@/redux/store";
import { ITask } from "@/tasks";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  tasks: ITask[];
  filter: "all" | "high" | "medium" | "low";
}

const initialState: IInitialState = {
  tasks: [
    {
      id: "asdf",
      title: "Initialize frontend",
      description: "Create Home page and routing.",
      dueDate: "2025-11-04",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "asdfrt",
      title: "Create GitHub Repo",
      description: "Create state branching.",
      dueDate: "2025-11-04",
      isCompleted: false,
      priority: "Low",
    },
  ],
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export default taskSlice.reducer;
