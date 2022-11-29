import { createSlice } from "@reduxjs/toolkit";
import { userType } from "../auth/authTypes";
import { userInfoPayload } from "./types";

interface initialStateType {
    slideMenuActive: boolean;
    userSettingsActive: boolean;
    createChatActive: boolean;
    cropImageActive: boolean;
    userInfo: {
        active: boolean;
        user: userType;
    };
}

const initialState: initialStateType = {
    slideMenuActive: false,
    userSettingsActive: false,
    createChatActive: false,
    cropImageActive: false,
    userInfo: {
        active: false,
        user: {
            userId: "",
            username: "",
            name: "",
            img: "",
            bio: "",
        },
    },
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
        switchCropImageActive: (state) => {
            state.cropImageActive = !state.cropImageActive;
        },
        switchUserInfoActive: (state) => {
            state.userInfo.active = !state.userInfo.active;
        },
        setUserInfo: (state, { payload }: userInfoPayload) => {
            state.userInfo.active = !state.userInfo.active;
            state.userInfo.user = payload.user;
        },
    },
});

export const {
    switchSlideMenu,
    switchUserSettings,
    siwtchCreateChat,
    switchCropImageActive,
    switchUserInfoActive,
    setUserInfo,
} = modalSlice.actions;
export default modalSlice.reducer;
