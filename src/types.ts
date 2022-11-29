interface chatUser {
    userId: string;
    name: string;
    username: string;
    img: string;
    bio: string;
}

export interface ChatType {
    _id: string;
    lastMessage?: string;
    user: chatUser;
}
