import { StyledUserList } from "./styled/UserList";
import { IoMenuSharp } from "react-icons/io5";
import { NavigateFunction, useNavigate } from "react-router";
import { useAppDispatch } from "../../store/store";
import { switchSlideMenu } from "../../features/modalHandles/modalSlice";

const chatUsers = [
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
    {
        name: "123",
        img: "http://almode.ru/uploads/posts/2021-03/1616803817_29-p-eive-maks-30.jpg",
    },
];

interface ChatProps {
    chName: string;
    img: string;
    id: number;
}

const SingleChat: React.FC<ChatProps> = ({ chName, img, id }) => {
    const navigate: NavigateFunction = useNavigate();
    return (
        <div className="singleChat" onClick={() => navigate(`/chat/${id}`)}>
            <div className="imageWrapper">
                <img src={img} alt="" />
            </div>
            <div className="name">{chName}</div>
        </div>
    );
};

interface Props {
    isSmall: boolean;
    chatClosed: boolean;
}

const UserList: React.FC<Props> = ({ isSmall, chatClosed }) => {
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
                {chatUsers.map((chat, index) => {
                    return (
                        <SingleChat
                            key={index}
                            chName={chat.name}
                            img={chat.img}
                            id={index}
                        ></SingleChat>
                    );
                })}
            </div>
        </StyledUserList>
    );
};

export default UserList;
