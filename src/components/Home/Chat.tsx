import { StyledChat } from "./styled/Chat.styled";
import { HiOutlinePaperClip } from "react-icons/hi";

const Chat = () => {
    return (
        <StyledChat>
            <div className="topper">
                <div className="wrap">
                    <div>Name</div>
                    <div className="lastActive">Last Active</div>
                </div>
            </div>

            <div className="mainChat"></div>

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
                    rows={1}
                />
            </div>
        </StyledChat>
    );
};

export default Chat;
