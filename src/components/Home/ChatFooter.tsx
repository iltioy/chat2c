import { BiSend } from "react-icons/bi";
import { HiOutlinePaperClip } from "react-icons/hi";
import { useEffect, useState } from "react";
import * as io from "socket.io-client";
interface Props {
    id: string | undefined;
    token: string;
    socket: io.Socket;
    chatClosed: boolean;
    isSmall: boolean;
}

const ChatFooter: React.FC<Props> = ({
    id,
    token,
    socket,
    chatClosed,
    isSmall,
}) => {
    const [body, setBody] = useState("");
    const sendMessage = () => {
        socket.emit("send_message", {
            token,
            message: {
                chatId: id,
                body,
            },
        });
        setBody("");
    };
    return (
        <>
            <div
                className={`footer ${
                    isSmall && !chatClosed ? "showFooter" : ""
                }`}
            >
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
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />

                <div className="sendIconDiv" onClick={() => sendMessage()}>
                    <BiSend className="sendIcon" />
                </div>
            </div>
        </>
    );
};

export default ChatFooter;
