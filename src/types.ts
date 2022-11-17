interface chatUser {
    _id: string;
    name: string;
    username: string;
    img: string;
}

export interface chat {
    _id: string;
    lastMessage?: string;
    user: chatUser;
}
