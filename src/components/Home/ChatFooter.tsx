import { BiSend } from "react-icons/bi";
import { HiOutlinePaperClip } from "react-icons/hi";
import { useRef, useState } from "react";
import * as io from "socket.io-client";
import { IoCloseOutline } from "react-icons/io5";
import axios from "axios";
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
    const [file, setFile] = useState<File | null>(null);

    const fileInput = useRef<HTMLInputElement>(null);

    const sendMessage = async () => {
        var imgKEY: null | string = null;

        if (file) {
            try {
                const formData = new FormData();
                formData.append("image", file);

                const res = await axios.post(
                    "/api/v1/chat/message/file",
                    formData,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (res.data.imgKEY) {
                    imgKEY = res.data.imgKEY;
                }
            } catch (error) {
                console.log(error);
            }
        }
        console.log(imgKEY);
        socket.emit("send_message", {
            token,
            message: {
                chatId: id,
                body,
                imgKEY,
            },
        });

        setBody("");

        clearFile();
    };

    const clearFile = () => {
        if (fileInput.current) {
            fileInput.current.value = "";
        }
        setFile(null);
    };
    return (
        <>
            {file ? (
                <div className="attachedFilesInfo">
                    <div className="attachedFilesInfoBody">
                        Прикреплен 1 файл
                    </div>
                    <div className="smallIconDiv" onClick={() => clearFile()}>
                        <IoCloseOutline className="smallIcon" />
                    </div>
                </div>
            ) : null}

            <div
                className={`footer ${
                    isSmall && !chatClosed ? "showFooter" : ""
                }`}
            >
                <label htmlFor="chatFile">
                    <HiOutlinePaperClip className="icon" />
                </label>
                <input
                    ref={fileInput}
                    type="file"
                    name="chatFile"
                    id="chatFile"
                    className="chatFileInput"
                    onChange={(e) =>
                        e.target.files ? setFile(e.target.files[0]) : null
                    }
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
