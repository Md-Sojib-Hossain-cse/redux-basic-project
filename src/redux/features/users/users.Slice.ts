import { RootState } from "@/redux/store";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  users: IUser[];
}

export interface IUser {
  id: string;
  name: string;
}

const initialState: InitialState = {
  users: [],
};

type TDraftUser = Pick<IUser, "name">;

const createUser = (userData: TDraftUser) => {
  return { id: nanoid(), ...userData };
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(createUser(action.payload));
    },
    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUsers = (state: RootState) => state.user.users;

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
