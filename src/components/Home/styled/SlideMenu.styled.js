import styled from "styled-components";

export const StyledSlideMenu = styled.div`
    .slideMenu {
        display: flex;
        flex-direction: column;
        width: 325px;
        height: 100%;
        max-width: 100%;
        background: #282e33;
        z-index: 103;
        position: absolute;
        transition: 0.3s;
        left: 0px;
        overflow: auto;
        .topper {
            width: 100%;
            border-bottom: 2px solid #303a42;
            padding-bottom: 20px;

            .topperDiv {
                margin: 15px 0 0 20px;
                display: flex;
                flex-direction: column;
            }

            img {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                cursor: pointer;
            }

            .name {
                margin-top: 15px;
                margin-left: 5px;
            }
            .username {
                color: grey;
                font-size: 14px;
                margin-left: 5px;
                margin-top: 4px;
            }
        }

        .mainSlide {
            width: 100%;
        }
    }

    .hidden {
        left: -325px;
    }
`;
