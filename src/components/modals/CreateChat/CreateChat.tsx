import Modal from "../Modal";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { StyledCreateChat } from "../../styled/CreateChat.styled";
import { siwtchCreateChat } from "../../../features/modalHandles/modalSlice";
import { useFormik } from "formik";
import { ChatType } from "../../../types";
import * as io from "socket.io-client";

interface CreateChatProps {
    token: string;
    setChats: React.Dispatch<React.SetStateAction<[] | ChatType[]>>;
    socket: io.Socket;
}

const CreateChat: React.FC<CreateChatProps> = ({ token, setChats, socket }) => {
    const { createChatActive } = useSelector((state: RootState) => state.modal);

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            credentials: "",
        },
        onSubmit: async (values) => {
            try {
                const res = await axios.post(
                    "/api/v1/chat/create",
                    {
                        secondUserCreds: values.credentials,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (res.data.chat) {
                    setChats((prevState) => {
                        return [res.data.chat, ...prevState];
                    });
                }

                if (res.data.chat.user) {
                    socket.emit("chat_created", {
                        token,
                        user: res.data.chat.user,
                        chat: res.data.chat,
                    });
                }
            } catch (error) {
                console.log(error);
            }
            values.credentials = "";
        },
    });

    return (
        <>
            {createChatActive ? (
                <StyledCreateChat>
                    <Modal
                        className="modalDiv higherModal"
                        actionOnDispatch={siwtchCreateChat}
                    ></Modal>

                    <div className="createWrapper">
                        <form action="" onSubmit={handleSubmit}>
                            <label
                                htmlFor="credentials"
                                className="labelCreateChat"
                            >
                                Начните новый чат..
                            </label>
                            <label
                                htmlFor="credentials"
                                className="labelCreateChat"
                            >
                                Введите логин или email пользователя
                            </label>
                            <div>
                                <input
                                    value={values.credentials}
                                    onChange={handleChange}
                                    type="text"
                                    id="credentials"
                                    name="credentials"
                                    className="form-input createChatInput"
                                    placeholder="@username"
                                />
                            </div>
                        </form>
                    </div>
                </StyledCreateChat>
            ) : null}
        </>
    );
};

export default CreateChat;
