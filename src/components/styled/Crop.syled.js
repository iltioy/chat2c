import styled from "styled-components";

export const StyledCrop = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    .innerCrop {
        z-index: 107;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-width: 90%;
        max-height: 90%;
        width: 500px;
        height: 500px;
    }

    .cropBottom {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        z-index: 103;
        .send {
            margin-bottom: 50px;
            z-index: 107;
            cursor: pointer;
            font-size: 20px;
            text-decoration: underline;
            @media (max-height: 600px) {
                margin-bottom: 20px;
            }
        }
    }
`;
