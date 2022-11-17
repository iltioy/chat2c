import "../styles/home/homePage.css";
import Chat from "../components/Home/Chat";
import UserList from "../components/Home/UserList";
import { useParams } from "react-router";
import SlideMenu from "../components/Home/SlideMenu";
import UserSettings from "../components/modals/UserSettings/UserSettings";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { RootState } from "../store/store";

const Home: React.FC = () => {
    const { id } = useParams();
    const { token } = useSelector((state: RootState) => state.auth);

    const [chats, setChats] = useState([]);

    const getAllChats = async () => {
        console.log("123");
        try {
            const res = await axios.get("/api/v1/chat/chats", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setChats(res.data.chats);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllChats();
    }, [token]);

    const screenWidth: number = window.innerWidth;
    const isSmall = screenWidth <= 768 ? true : false;
    const chatClosed = id === "0" && isSmall ? true : false;

    return (
        <div className="homePageWrapper">
            <div className="flex row homePage">
                <UserSettings />
                <SlideMenu />
                <UserList
                    isSmall={isSmall}
                    chatClosed={chatClosed}
                    chats={chats}
                />
                <Chat isSmall={isSmall} chatClosed={chatClosed} />
            </div>
        </div>
    );
};

export default Home;
