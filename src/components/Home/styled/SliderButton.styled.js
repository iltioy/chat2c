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
        &:hover .sliderButtonInput {
            background: #2e373f !important;
        }
    }
    .innerDiv {
        word-wrap: break-word;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;

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
        .sliderButtonInputDiv {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .sliderButtonInput {
                height: 80%;
                outline: none;
                border: 0;
                background: #282e33;
                width: 95%;
                transition: 0.1s;
                color: white;
                font-size: 20px;
                cursor: pointer;

                &:focus {
                    cursor: auto;
                }
            }
        }
    }
`;
