import "../styles/home/homePage.css";
import Chat from "../components/Home/Chat";
import UserList from "../components/Home/UserList";
import { useNavigate, useParams } from "react-router";
import SlideMenu from "../components/Home/SlideMenu";
import UserSettings from "../components/modals/UserSettings/UserSettings";
import CreateChat from "../components/modals/CreateChat/CreateChat";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { RootState } from "../store/store";
import { ChatType } from "../types";
import _ from "lodash";
import * as io from "socket.io-client";
import Crop from "../components/modals/Crop/Crop";
import { sendUserProfileImage } from "../utils/actions";
import UserInfo from "../components/modals/UserInfo/UserInfo";
const socket = io.connect("http://localhost:5000");

const Home: React.FC = () => {
    const { id } = useParams();
    const { token } = useSelector((state: RootState) => state.auth);
    const { cropImageActive, userInfo } = useSelector(
        (state: RootState) => state.modal
    );
    const navigate = useNavigate();

    const [chats, setChats] = useState<ChatType[] | []>([]);
    const [cropFile, setCropFile] = useState<File | null | undefined>(null);
    useEffect(() => {
        socket.emit("join_personal_room", { token });
        socket.on("recieve_chat", ({ chat }) => {
            if (chat) {
                setChats((prevState) => {
                    const chatInState = prevState.filter(
                        (item) => item._id === chat._id
                    );
                    if (!_.isEmpty(chatInState)) {
                        return [...prevState];
                    }
                    return [chat, ...prevState];
                });
            }
        });
        // eslint-disable-next-line
    }, []);

    const getAllChats = async () => {
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
        if (token === "") {
            navigate("/login");
        }
        // eslint-disable-next-line
    }, [token]);

    const screenWidth: number = window.innerWidth;
    const isSmall = screenWidth <= 768 ? true : false;
    const chatClosed = id === "0" && isSmall ? true : false;

    return (
        <div className="homePageWrapper">
            <div className="flex row homePage" id="home">
                {cropImageActive && cropFile ? (
                    <Crop
                        cropFile={cropFile}
                        imageURL={URL.createObjectURL(cropFile)}
                        actionOnCrop={sendUserProfileImage}
                    />
                ) : null}
                {userInfo.active ? <UserInfo /> : null}
                <UserSettings setCropFile={setCropFile} />
                <CreateChat token={token} setChats={setChats} socket={socket} />
                <SlideMenu />
                <UserList
                    isSmall={isSmall}
                    chatClosed={chatClosed}
                    chats={chats}
                />
                <Chat
                    setAllChats={setChats}
                    allChats={chats}
                    token={token}
                    id={id}
                    isSmall={isSmall}
                    chatClosed={chatClosed}
                    socket={socket}
                />
            </div>
        </div>
    );
};

export default Home;
