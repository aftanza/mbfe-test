import { createSlice } from "@reduxjs/toolkit";

type DrawerType = {
    open: boolean;
};

const drawerInitialState: DrawerType = {
    open: false,
};

export const drawerSlice = createSlice({
    name: "drawer",
    initialState: drawerInitialState,
    reducers: {
        setOpen: (state) => {
            state.open = true;
        },
        setClosed: (state) => {
            state.open = false;
        },
        setToggle: (state) => {
            state.open = !state.open;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setOpen, setClosed, setToggle } = drawerSlice.actions;

export default drawerSlice.reducer;
