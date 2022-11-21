import styled from "styled-components";

export const StyledCreateChat = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .createWrapper {
        position: relative;
        bottom: 32%;
        transform: translateY(32%);
        max-height: 80%;
        width: 390px;
        max-width: 100%;
        background: #282e33;
        z-index: 104;
        border-radius: 12px;
        overflow: auto;
        padding: 30px 20px;

        form {
            display: flex;
            flex-direction: column;

            .labelCreateChat {
                margin-bottom: 3px;
            }
            .createChatInput {
                margin-top: 10px;
                padding: 2px;
                background-color: #4b4d4b;
            }
        }
    }
`;
