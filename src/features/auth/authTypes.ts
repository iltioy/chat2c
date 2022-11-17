export interface user {
    username: string;
    name: string;
    img: string;
}

export interface authState {
    token: string;
    user: user;
    isLoaded: boolean;
}

export interface loginBody {
    username: string;
    password: string;
}

export interface registerBody {
    username: string;
    password: string;
}
