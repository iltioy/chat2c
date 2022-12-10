import { StyledUserList } from "./styled/UserList";
import { IoMenuSharp } from "react-icons/io5";
import { NavigateFunction, useNavigate } from "react-router";
import { useAppDispatch } from "../../store/store";
import { switchSlideMenu } from "../../features/modalHandles/modalSlice";
import { ChatType } from "../../types";

interface ChatProps {
    chName: string;
    img: string;
    id: string;
    cLastMessage?: string;
}

const SingleChat: React.FC<ChatProps> = ({ chName, img, id, cLastMessage }) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className="singleChat" onClick={() => navigate(`/chat/${id}`)}>
            <div className="imageWrapper">
                <img src={img} alt="" />
            </div>
            <div className="singleChatInfo">
                <div className="name">{chName}</div>
                <div className="lastMessage">
                    {cLastMessage?.substring(0, 20) + "..."}
                </div>
            </div>
        </div>
    );
};

interface Props {
    isSmall: boolean;
    chatClosed: boolean;
    chats: [] | ChatType[];
}

const UserList: React.FC<Props> = ({ isSmall, chatClosed, chats }) => {
    const dispatch = useAppDispatch();

    return (
        <StyledUserList display={chatClosed || !isSmall ? "block" : "none"}>
            <div className="userMenu">
                <IoMenuSharp
                    className="icon"
                    onClick={() => dispatch(switchSlideMenu())}
                />
            </div>
            <div className="chatWrapper">
                {chats.map((chat, index) => {
                    return (
                        <SingleChat
                            key={index}
                            chName={chat.user.name}
                            img={chat.user.img}
                            id={chat._id}
                            cLastMessage={chat.lastMessage}
                        ></SingleChat>
                    );
                })}
            </div>
        </StyledUserList>
    );
};

export default UserList;
