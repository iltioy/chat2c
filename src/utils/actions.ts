import { AnyAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Dispatch } from "react";
import { updateUserInfo } from "../features/auth/authSlice";

export const sendUserProfileImage = async (
    file: File,
    token: string,
    dispatch: Dispatch<AnyAction>
) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
        const res = await axios.patch("/api/v1/user/image", formData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (res.data.img) {
            dispatch(updateUserInfo({ img: res.data.img }));
        }
    } catch (error) {
        console.log(error);
    }
};
