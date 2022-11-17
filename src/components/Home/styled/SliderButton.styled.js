import styled from "styled-components";

export const StyledSliderButton = styled.div`
    max-height: 50px;
    max-width: 100%;
    overflow: hidden;
    .buttonWrapper {
        height: 50px;
        display: flex;
        cursor: pointer;
        padding: 0 20px;
        transition: 0.1s;
        align-items: center;

        &:hover {
            background: #2e373f;
        }
    }
    .innerDiv {
        word-wrap: break-word;
        display: flex;
        align-items: center;

        .icon {
            width: 20px;
            height: 20px;
            background: ${({ iconBackground }) => iconBackground};
            color: ${({ iconColor }) => iconColor};
            padding: 3.5px;
            border-radius: 5px;
        }

        .buttonText {
            margin: 2px 0 0 7px;
            max-width: 253px;
        }
    }
`;
