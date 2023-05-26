export interface userType {
    username: string;
    name: string;
    img: string;
    userId: string;
    bio: string;
}

export interface authState {
    token: string;
    user: userType;
    isLoaded: boolean;
}

export interface loginBody {
    username: string;
    password: string;
}

export interface registerBody {
    username: string;
    password: string;
    email: string;
}
