import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    slideMenuActive: boolean;
    userSettingsActive: boolean;
}

const initialState: initialStateType = {
    slideMenuActive: false,
    userSettingsActive: false,
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        switchSlideMenu: (state) => {
            state.slideMenuActive = !state.slideMenuActive;
        },
        switchUserSettings: (state) => {
            state.userSettingsActive = !state.userSettingsActive;
        },
    },
});

export const { switchSlideMenu, switchUserSettings } = modalSlice.actions;
export default modalSlice.reducer;
