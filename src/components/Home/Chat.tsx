import { StyledChat } from "./styled/Chat.styled";
import { HiOutlinePaperClip } from "react-icons/hi";
import MainChat from "./MainChat";

interface Props {
    isSmall: boolean;
    chatClosed: boolean;
}

const Chat: React.FC<Props> = ({ isSmall, chatClosed }) => {
    return (
        <StyledChat display={chatClosed ? "none" : "flex"}>
            <div className="topper">
                <div className="wrap">
                    <div>Name</div>
                    <div className="lastActive">Last Active</div>
                </div>
            </div>

            <div className="mainChat">
                <MainChat />
            </div>

            <div className="footer">
                <label htmlFor="chatFile">
                    <HiOutlinePaperClip className="icon" />
                </label>

                <input
                    type="file"
                    name="chatFile"
                    id="chatFile"
                    className="chatFileInput"
                />

                <textarea
                    placeholder="Write a message..."
                    className="chatInput"
                />
            </div>
        </StyledChat>
    );
};

export default Chat;
