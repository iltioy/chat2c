import { userType } from "../auth/authTypes";

export interface userInfoPayload {
    payload: {
        user: userType;
    };
}
