interface chatUser {
    _id: string;
    name: string;
    username: string;
    img: string;
}

export interface ChatType {
    _id: string;
    lastMessage?: string;
    user: chatUser;
}
