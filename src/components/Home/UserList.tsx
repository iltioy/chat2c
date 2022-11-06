import { StyledUserList } from "./styled/UserList";
import { IoMenuSharp } from "react-icons/io5";

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
}

const SingleChat: React.FC<ChatProps> = ({ chName, img }) => {
    return (
        <div className="singleChat">
            <div className="imageWrapper">
                <img src={img} alt="" />
            </div>
            <div className="name">{chName}</div>
        </div>
    );
};

const UserList = () => {
    return (
        <StyledUserList>
            <div className="userMenu">
                <IoMenuSharp className="icon" />
            </div>
            <div className="chatWrapper">
                {chatUsers.map((chat) => {
                    return (
                        <SingleChat
                            chName={chat.name}
                            img={chat.img}
                        ></SingleChat>
                    );
                })}
            </div>
        </StyledUserList>
    );
};

export default UserList;
