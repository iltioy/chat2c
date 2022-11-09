import "../styles/home/homePage.css";
import Chat from "../components/Home/Chat";
import UserList from "../components/Home/UserList";
import { useParams } from "react-router";
import SlideMenu from "../components/Home/SlideMenu";
import UserSettings from "../components/modals/UserSettings/UserSettings";

const Home: React.FC = () => {
    const { id } = useParams();

    const screenWidth: number = window.innerWidth;
    const isSmall = screenWidth <= 768 ? true : false;
    const chatClosed = id === "0" && isSmall ? true : false;

    return (
        <div className="homePageWrapper">
            <div className="flex row homePage">
                <UserSettings />
                <SlideMenu />
                <UserList isSmall={isSmall} chatClosed={chatClosed} />
                <Chat isSmall={isSmall} chatClosed={chatClosed} />
            </div>
        </div>
    );
};

export default Home;
