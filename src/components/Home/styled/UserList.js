import styled from "styled-components";

export const StyledUserList = styled.div`
    max-height: 100%;
    overflow: auto;
    width: 325px;
    display: ${({ display }) => display};
    border-right: 1px solid #555;

    @media (max-width: 768px) {
        width: 100%;
    }

    .userMenu {
        height: 50px;
        border-bottom: 1px solid #555;
        position: fixed;
        width: inherit;
        background: #1c1a1a;

        .icon {
            height: 100%;
            width: 40px;
            margin-left: 10px;
            cursor: pointer;
        }
    }

    .chatWrapper {
        margin-top: 50px;
    }

    .singleChat {
        height: 70px;
        border-bottom: 1px solid #555;
        cursor: pointer;
        display: flex;

        .name {
            margin-top: 8px;
            margin-left: 9px;
            font-weight: bold;
            font-size: 18px;
        }

        .imageWrapper {
            height: 100%;
            width: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 5px;
            img {
                height: 53px;
                width: 53px;
                border-radius: 50%;
            }
        }
    }
`;
