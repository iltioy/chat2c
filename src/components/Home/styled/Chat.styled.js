import styled from "styled-components";

export const StyledChat = styled.div`
    height: 100%;
    flex: 1;
    display: ${({ display }) => display};
    flex-direction: column;
    overflow: auto;
    position: relative;

    .topper {
        height: 50px;
        border-bottom: 1px solid #555;
        display: flex;
        align-items: center;
        position: fixed;
        background: #1c1a1a;
        width: 100%;
        z-index: 101;
        .wrap {
            margin-left: 15px;
        }
        .lastActive {
            font-size: 15px;
            color: #b0b0b0;
        }
    }

    .mainChat {
        flex: 1;
        margin-bottom: 50px;
        display: flex;
        align-items: flex-end;
        z-index: 1;

        .mainChatDiv {
            display: flex;
            flex-direction: column-reverse;
            width: 100%;
            margin-top: 50px;

            .messageDiv {
                display: flex;
                flex-direction: row;
            }

            .my-message {
                justify-content: flex-end;
                margin-right: 8px;
            }

            .message {
                background: #363636;
                word-wrap: break-word;
                display: table;
                max-width: 35%;
                padding: 10px;
                border-radius: 10px;
                margin: 8px 0;

                @media (max-width: 1280px) {
                    max-width: 80px;
                }
            }
        }
    }

    .footer {
        height: 50px;
        width: 100%;
        border-top: 1px solid #555;
        display: flex;
        align-items: center;
        position: fixed;
        bottom: 0;
        background: #1c1a1a;
        z-index: 101;

        .icon {
            height: 25px;
            width: 40px;
            cursor: pointer;
            color: #555;
        }
    }

    .chatFileInput {
        display: none;
    }

    .chatInput {
        background: #1c1a1a;
        outline: none;
        border: none;
        color: white;
        flex: 1;
        font-size: 17px;
        height: 35px;
        align-self: flex-start;
        word-wrap: break-word;
        resize: none;
        padding: none;
        margin-top: 10px;
    }
`;
