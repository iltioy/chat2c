export interface MessagesType {
    body: string;
    username: string;
    userId: string;
    chatId: string;
    createdAt: string;
    _id: string;
    imageKEY?: null | string;
}

interface ChatUser {
    username: string;
    name: string;
    email: string;
    img: string;
}

export interface chatState {
    chatUsers: any;
    chatMessages: any;
}
