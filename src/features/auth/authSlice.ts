import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { authState, loginBody, registerBody } from "./authTypes";

const initialState: authState = {
    token: localStorage.getItem("token") || "",
    user: {
        username: "username",
        name: "name",
        img: "user.png",
    },
    isLoaded: false,
};

export const login: any = createAsyncThunk(
    "auth/login",
    async ({ username, password }: loginBody, thunkAPI) => {
        try {
            const res = await axios.post("/api/v1/auth/login", {
                username,
                password,
            });
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong.");
        }
    }
);

export const register: any = createAsyncThunk(
    "auth/register",
    async ({ username, password }: registerBody, thunkAPI) => {
        try {
            const res = await axios.post("/api/v1/auth/register", {
                username,
                password,
            });

            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Something went wrong.");
        }
    }
);

export const getUserInfo: any = createAsyncThunk(
    "auth/getUserInfo",
    async (token: string, thunkAPI) => {
        try {
            const res = await axios.get("/api/v1/user/info", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to fetch user.");
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.token = "";
            state.user = initialState.user;
            localStorage.removeItem("token");
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state: authState, body) => {
            state.token = body.payload.response.token;
            state.user = body.payload.response.user;
            localStorage.setItem("token", body.payload.response.token);
        });
        builder.addCase(login.rejected, (state: authState) => {
            state.token = "";
            state.user = initialState.user;
        });
        builder.addCase(
            getUserInfo.fulfilled,
            (state: authState, { payload }) => {
                state.user = payload.user;
                state.isLoaded = true;
            }
        );
        builder.addCase(getUserInfo.rejected, (state: authState) => {
            state.isLoaded = false;
        });
        builder.addCase(register.fulfilled, (state: authState, { payload }) => {
            state.token = payload.token;
            state.user = payload.user;
            localStorage.setItem("token", payload.token);
        });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
