import { useRef, useEffect, useState } from "react";
import { useParams } from "react-router";
import { MessagesType } from "../../features/chat/types";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useInView } from "react-intersection-observer";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";
import reactStringReplace from "react-string-replace";

interface MessageProps {
    firstViewRef?: (node?: Element | null | undefined) => void;
    secondViewRef?: (node?: Element | null | undefined) => void;
    body: string;
    messageUserId: string;
    mainUserId: string;
    image: string | null;
}

const Message: React.FC<MessageProps> = ({
    firstViewRef,
    secondViewRef,
    body,
    messageUserId,
    mainUserId,
    image,
}) => {
    const ref = firstViewRef
        ? firstViewRef
        : secondViewRef
        ? secondViewRef
        : undefined;
    return (
        <div
            ref={ref}
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
    const { ref: firstViewRef, inView: firstInView } = useInView();
    const { ref: secondViewRef, inView: secondInView } = useInView();
    const scrollRef = useRef<HTMLDivElement>(null);

    const [viewPassed, setViewPassed] = useState<boolean>(false);

    const { userId } = useSelector((state: RootState) => state.auth.user);

    useEffect(() => {
        scrollToBottom();
    }, [scrollRef, id, messages]);

    const scrollToBottom = (
        e?: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        if (messages && !viewPassed) {
            scrollRef.current?.scrollIntoView();
            setViewPassed(false);
        } else if (!messages) {
            setTimeout(() => {
                scrollRef.current?.scrollIntoView();
            }, 1500);
            setViewPassed(false);
        }

        if (e) {
            scrollRef.current?.scrollIntoView();
            setViewPassed(false);
        }
    };

    useEffect(() => {
        if (secondInView) {
            setViewPassed(true);
        }
        if (firstInView) {
            setViewPassed(false);
        }
    }, [secondInView, firstInView]);

    return (
        <div className="mainChatDiv">
            <div ref={scrollRef}></div>
            {messages.map((message, index) => {
                const image = message.imageKEY ? message.imageKEY : null;

                return (
                    <Message
                        firstViewRef={index === 1 ? firstViewRef : undefined}
                        secondViewRef={index === 20 ? secondViewRef : undefined}
                        body={message.body}
                        key={message._id}
                        messageUserId={message.userId}
                        mainUserId={userId}
                        image={image}
                    />
                );
            })}
            {firstInView === false && viewPassed && (
                <motion.div
                    className="scrollIconDiv"
                    initial={{ y: 50 }}
                    animate={{ y: 0 }}
                    transition={{
                        type: "tween",
                        duration: 0.1,
                    }}
                    onClick={(e) => {
                        scrollToBottom(e);
                    }}
                    style={{
                        display: `${firstInView === false ? "" : "none"}`,
                    }}
                >
                    <AiOutlineArrowDown className="scrollIcon" />
                </motion.div>
            )}
        </div>
    );
};

export default MainChat;
