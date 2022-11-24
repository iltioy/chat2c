import { StyledChat } from "./styled/Chat.styled";
import MainChat from "./MainChat";
import { useEffect, useState } from "react";
import axios from "axios";
import ChatFooter from "./ChatFooter";
import * as io from "socket.io-client";
import _ from "lodash";

interface Props {
    isSmall: boolean;
    chatClosed: boolean;
    id: string | undefined;
    token: string;
    socket: io.Socket;
}

export interface Messages {
    body: string;
    username: string;
    userId: string;
    chatId: string;
    createdAt: string;
    _id: string;
}

interface ChatUser {
    username: string;
    name: string;
    email: string;
    img: string;
}

interface AllMessagesType {
    id: string;
    messages: Messages[];
}

interface AllChatUsers {
    id: string;
    chatUser: ChatUser;
}

// var allMessages: { [key: string]: any[] } = {};

const Chat: React.FC<Props> = ({ isSmall, chatClosed, id, token, socket }) => {
    const defaultUser = {
        username: "",
        name: "",
        email: "",
        img: "",
    };
    // const defaultMessages: [] = [];

    const [allMessages, setAllMessages] = useState<AllMessagesType[] | []>([]);
    const [allChatUsers, setAllChatUsers] = useState<AllChatUsers[] | []>([]);

    // const [currentMessages, setCurrentMessages] = useState<Messages[] | []>(
    //     id
    //         ? allMessages[id]
    //             ? allMessages[id]
    //             : defaultMessages
    //         : defaultMessages
    // );

    useEffect(() => {
        if (id !== "0") {
            socket.emit("join_chat", { chatId: id, token });
        }
        // eslint-disable-next-line
    }, [id]);

    useEffect(() => {
        socket.on("recieve_message", ({ message }) => {
            setAllMessages((prevState) => {
                const chat = prevState.filter(
                    (item) => item.id === message.chatId
                )[0];

                if (!chat) {
                    return [...prevState];
                }

                const existingMessage = chat.messages.filter(
                    (mes) => mes._id === message._id
                );

                if (!_.isEmpty(existingMessage)) {
                    return [...prevState];
                }
                const newState = prevState.filter(
                    (item) => item.id !== chat.id
                );

                return [
                    ...newState,
                    {
                        id: chat.id,
                        messages: [message, ...chat.messages],
                    },
                ];
            });
        });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchMessages();
        fetchChatUser();
        // eslint-disable-next-line
    }, [token, id]);

    // useEffect(() => {
    //     if (id) {
    //         if (allMessages[id]) {
    //             setCurrentMessages(allMessages[id]);
    //         }
    //     }
    // }, [id]);
    const fetchMessages = async () => {
        try {
            if (id && id !== "0") {
                const res = await axios.get(`/api/v1/chat/messages/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setAllMessages((prevState) => {
                    const newState = prevState.filter((item) => item.id !== id);
                    return [
                        ...newState,
                        {
                            id: id,
                            messages: res.data.messages,
                        },
                    ];
                });
                // if (id) {
                //     allMessages[id] = res.data.messages;
                // }

                // setCurrentMessages(allMessages[id]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const fetchChatUser = async () => {
        try {
            if (id && id !== "0") {
                const res = await axios.get(`/api/v1/chat/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setAllChatUsers([
                    ...allChatUsers,
                    {
                        id,
                        chatUser: res.data.user,
                    },
                ]);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <StyledChat display={chatClosed ? "none" : "flex"}>
            <div className="topper">
                <div className="wrap">
                    <div>
                        {allChatUsers.filter(
                            (chatUser) => chatUser.id === id
                        )[0]
                            ? allChatUsers.filter(
                                  (chatUser) => chatUser.id === id
                              )[0].chatUser.name
                            : defaultUser.name}
                    </div>
                    <div className="lastActive">Last Active</div>
                </div>
            </div>

            <div className="mainChat">
                <MainChat
                    messages={
                        allMessages.filter((message) => message.id === id)[0]
                            ? allMessages.filter(
                                  (message) => message.id === id
                              )[0].messages
                            : []
                    }
                />
            </div>

            <ChatFooter
                chatClosed={chatClosed}
                id={id}
                token={token}
                socket={socket}
                isSmall={isSmall}
            />
        </StyledChat>
    );
};

export default Chat;
