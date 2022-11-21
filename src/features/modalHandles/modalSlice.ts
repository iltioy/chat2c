import { createSlice } from "@reduxjs/toolkit";

interface initialStateType {
    slideMenuActive: boolean;
    userSettingsActive: boolean;
    createChatActive: boolean;
}

const initialState: initialStateType = {
    slideMenuActive: false,
    userSettingsActive: false,
    createChatActive: false,
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
        siwtchCreateChat: (state) => {
            state.createChatActive = !state.createChatActive;
        },
    },
});

export const { switchSlideMenu, switchUserSettings, siwtchCreateChat } =
    modalSlice.actions;
export default modalSlice.reducer;
