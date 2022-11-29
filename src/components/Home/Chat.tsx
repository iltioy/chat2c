import { StyledChat } from "./styled/Chat.styled";
import MainChat from "./MainChat";
import { useEffect, useState } from "react";
import axios from "axios";
import ChatFooter from "./ChatFooter";
import * as io from "socket.io-client";
import _ from "lodash";
import { ChatType } from "../../types";
import { setUserInfo } from "../../features/modalHandles/modalSlice";
import { useDispatch } from "react-redux";

interface Props {
    isSmall: boolean;
    chatClosed: boolean;
    id: string | undefined;
    token: string;
    socket: io.Socket;
    allChats: [] | ChatType[];
    setAllChats: React.Dispatch<React.SetStateAction<[] | ChatType[]>>;
}

export interface Messages {
    body: string;
    username: string;
    userId: string;
    chatId: string;
    createdAt: string;
    _id: string;
    imageKEY?: null | string;
}

interface ChatUser {
    userId: string;
    username: string;
    name: string;
    img: string;
    bio: string;
}

interface AllMessagesType {
    id: string;
    messages: Messages[];
}

// interface AllChatUsers {
//     id: string;
//     chatUser: ChatUser;
// }

const Chat: React.FC<Props> = ({
    isSmall,
    chatClosed,
    id,
    token,
    socket,
    allChats,
    setAllChats,
}) => {
    const defaultUser = {
        userId: "",
        username: "",
        name: "",
        img: "",
        bio: "",
    };

    const [allMessages, setAllMessages] = useState<AllMessagesType[] | []>([]);
    // const [allChatUsers, setAllChatUsers] = useState<AllChatUsers[] | []>([]);

    const [currentChatUser, setCurrentChatUser] =
        useState<ChatUser>(defaultUser);

    const dispatch = useDispatch();

    useEffect(() => {
        if (id !== "0") {
            socket.emit("join_chat", { chatId: id, token });
        }
        // eslint-disable-next-line
    }, [id]);

    useEffect(() => {
        const chat = allChats.filter((chat) => chat._id === id)[0];
        if (chat && chat.user) {
            setCurrentChatUser(chat.user);
            console.log(chat.user);
        }
    }, [allChats, id]);

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

            setAllChats((prevState) => {
                const newState = prevState.filter(
                    (item) => item._id !== message.chatId
                );
                var upChat = prevState.filter(
                    (item) => item._id === message.chatId
                )[0];
                upChat.lastMessage = message.body;
                if (!upChat || !newState) {
                    return [...prevState];
                }

                return [upChat, ...newState];
            });
        });
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchMessages();
        // fetchChatUser();
        // eslint-disable-next-line
    }, [token, id]);

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
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const fetchChatUser = async () => {
    //     try {
    //         if (id && id !== "0") {
    //             const res = await axios.get(`/api/v1/chat/user/${id}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });

    //             setAllChatUsers([
    //                 ...allChatUsers,
    //                 {
    //                     id,
    //                     chatUser: res.data.user,
    //                 },
    //             ]);
    //         }
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    if (id === "0" && !isSmall) {
        return (
            <div className="chatPlaceholder">
                Выберите чат для началa общения или начните новый!
            </div>
        );
    }

    return (
        <StyledChat display={chatClosed ? "none" : "flex"}>
            <div className="topper">
                <div
                    className="wrap"
                    onClick={() =>
                        dispatch(setUserInfo({ user: currentChatUser }))
                    }
                >
                    <div>{currentChatUser ? currentChatUser.name : null}</div>
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
