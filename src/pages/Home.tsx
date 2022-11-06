import "../styles/home/homePage.css";
import Chat from "../components/Home/Chat";
import UserList from "../components/Home/UserList";

const Home = () => {
    return (
        <div className="homePageWrapper">
            <div className="flex row homePage">
                <UserList />
                <Chat />
            </div>
        </div>
    );
};

export default Home;
