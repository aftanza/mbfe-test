import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserType = {
    name: string;
    id: string;
    email: string;
    isLoggedIn: boolean;
};

const userInitialState: UserType = {
    name: "",
    id: "",
    email: "",
    isLoggedIn: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setUserId: (state, action: PayloadAction<string>) => {
            state.id = action.payload;
        },
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.isLoggedIn = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setUserId, setName, setUserEmail, setIsLoggedIn } =
    userSlice.actions;

export default userSlice.reducer;
