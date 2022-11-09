import { useRef, useEffect } from "react";
import { useParams } from "react-router";

const Message: React.FC = () => {
    return (
        <div className="messageDiv  my-message">
            <div className="message">
                asddgkjdhgdfkjgkjdfhgjkhdfkjgh Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Eveniet porro est delectus
                consequuntur sequi culpa sunt labore officia vel magnam, nisi
                deleniti possimus quaerat praesentium, nam rem quas assumenda?
                Nesciunt.s
            </div>
        </div>
    );
};

const MainChat = () => {
    const { id } = useParams();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollRef.current?.scrollIntoView();
    }, [scrollRef, id]);
    return (
        <div className="mainChatDiv">
            <div ref={scrollRef}></div>
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    );
};

export default MainChat;
