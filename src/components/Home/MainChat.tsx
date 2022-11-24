import { useRef, useEffect } from "react";
import { useParams } from "react-router";
import { MessagesType } from "../../features/chat/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
interface MessageProps {
    body: string;
    messageUserId: string;
    mainUserId: string;
}

const Message: React.FC<MessageProps> = ({
    body,
    messageUserId,
    mainUserId,
}) => {
    return (
        <div
            className={`messageDiv  ${
                messageUserId === mainUserId ? "my-message" : "not-my-message"
            }`}
        >
            <div className="message">{body}</div>
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

    useEffect(() => {
        scrollRef.current?.scrollIntoView();
    }, [scrollRef, id, messages]);
    return (
        <div className="mainChatDiv">
            <div ref={scrollRef}></div>
            {messages.map((message) => {
                return (
                    <Message
                        body={message.body}
                        key={message._id}
                        messageUserId={message.userId}
                        mainUserId={userId}
                    />
                );
            })}
        </div>
    );
};

export default MainChat;
