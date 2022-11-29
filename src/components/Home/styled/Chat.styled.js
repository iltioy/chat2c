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
            cursor: pointer;
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

                img {
                    max-width: 100%;
                    max-height: 100%;
                    padding-top: 10px;
                }
            }

            .my-message {
                justify-content: flex-end;
                margin-right: 8px;
            }
            .not-my-message {
                margin-left: 8px;
            }

            .message {
                background: #363636;
                word-wrap: break-word;
                max-width: 35%;
                padding: 10px 7px 5px 7px;
                border-radius: 10px;
                margin: 8px 0;
                display: flex;
                flex-direction: column;

                @media (max-width: 768px) {
                    max-width: 140px;
                }
            }
        }
    }

    .showFooter {
        left: 0;
        right: 0;
    }

    .attachedFilesInfo {
        position: fixed;
        bottom: 50px;
        margin-left: 20px;
        background: #363636;
        height: 30px;
        padding: 0 10px;
        z-index: 101;
        display: flex;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        font-size: 14px;
        .attachedFilesInfoBody {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        @media (max-width: 768px) {
            margin-left: 7px;
            padding: 0 10px;
            height: 24px;
        }

        .smallIconDiv {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 4px;
            cursor: pointer;
            .smallIcon {
                height: 20px;
                width: 20px;
                margin-top: 1px;
            }
        }
    }

    .footer {
        height: 50px;
        border-top: 1px solid #555;
        display: flex;
        flex-flow: row;
        align-items: center;
        position: fixed;
        bottom: 0;
        background: #1c1a1a;
        z-index: 101;

        @media (min-width: 769px) {
            right: 0;
            left: 326px;
        }

        .icon {
            height: 25px;
            width: 40px;
            cursor: pointer;
            color: #555;
        }
        .sendIconDiv {
            cursor: pointer;
            height: 100%;
            display: flex;
            justify-content: cetner;
            align-items: center;
            margin-right: 20px;
            @media (max-width: 768px) {
                margin-right: 5px;
            }
            .sendIcon {
                cursor: pointer;
                height: 30px;
                color: #555;
                width: 30px;
            }
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
        font-size: 17px;
        flex: 1;

        height: 35px;
        align-self: flex-start;
        word-wrap: break-word;
        resize: none;
        padding: none;
        margin-top: 10px;
    }
`;
