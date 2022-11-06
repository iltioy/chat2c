import styled from "styled-components";

export const StyledChat = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;

    .topper {
        height: 50px;
        border-bottom: 1px solid #555;
        display: flex;
        align-items: center;
        position: fixed;
        width: 100%;
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
    }

    .footer {
        height: 50px;
        width: 100%;
        border-top: 1px solid #555;
        display: flex;
        align-items: center;

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
        font-size: 17px;
        max-height: 40px;
        align-self: flex-start;
        flex: 1;
        word-wrap: break-word;
        resize: none;
        padding: none;
        margin-top: 10px;
    }
`;
