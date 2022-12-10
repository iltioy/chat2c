import { useRef, useEffect } from "react";
import { useParams } from "react-router";
import { MessagesType } from "../../features/chat/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import reactStringReplace from "react-string-replace";

interface MessageProps {
    body: string;
    messageUserId: string;
    mainUserId: string;
    image: string | null;
}

const Message: React.FC<MessageProps> = ({
    body,
    messageUserId,
    mainUserId,
    image,
}) => {
    return (
        <div
            className={`messageDiv  ${
                messageUserId === mainUserId ? "my-message" : "not-my-message"
            }`}
        >
            <div className="message">
                {reactStringReplace(body, "\n", (match, i) => (
                    <br />
                ))}
                {image ? (
                    <img
                        src={`/api/v1/chat/message/image/${image}`}
                        alt="Не найдено"
                    />
                ) : null}
            </div>
        </div>
    );
};

interface MainChatProps {
    messages: [] | MessagesType[];
}

const MainChat: React.FC<MainChatProps> = ({ messages }) => {
    const { id } = useParams();
    const scrollRef = useRef<HTMLDivElement>(null);

    const { userId } = useSelector((state: RootState) => state.auth.user);
    console.log(userId);
    useEffect(() => {
        scrollRef.current?.scrollIntoView();
    }, [scrollRef, id, messages]);
    return (
        <div className="mainChatDiv">
            <div ref={scrollRef}></div>
            {messages.map((message) => {
                const image = message.imageKEY ? message.imageKEY : null;

                return (
                    <Message
                        body={message.body}
                        key={message._id}
                        messageUserId={message.userId}
                        mainUserId={userId}
                        image={image}
                    />
                );
            })}
        </div>
    );
};

export default MainChat;
