import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { chatState } from "./types";
import axios from "axios";

const initialState: chatState = {
    chatUsers: [],
    chatMessages: [],
};

interface fetchProps {
    token: string;
    id: string;
}

export const fetchMessages: any = createAsyncThunk(
    "chat/fetchMessages",
    async ({ token, id }: fetchProps, thunkAPI) => {
        try {
            const res = await axios.get(`/api/v1/chat/messages/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Couldn't fetch messages");
        }
    }
);

export const fetchChatUser: any = createAsyncThunk(
    "chat/fetchMessages",
    async ({ token, id }: fetchProps, thunkAPI) => {
        try {
            const res = await axios.get(`/api/v1/chat/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);
const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchMessages.fulfilled, (state, { payload }) => {
            state.chatMessages = [...state.chatMessages, payload.messages];
        });
    },
});

export default chatSlice.reducer;
