import styled from "styled-components";

export const StyledUserSettings = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .settingsWrapperInfo {
        .topper {
            display: flex;

            .descInput {
                background: #282e33;
                outline: none;
                border: none;
                resize: none;
                height: 24px;
                font-size: 18px;
                max-height: 100px;
                color: white;
                padding: 12px;
                margin-top: 10px;
            }

            .upper {
                height: 35px;
                display: flex;
                align-items: center;
                margin-top: 7px;
                .text {
                    margin-left: 7px;
                    font-size: 20px;
                    flex: 1;
                }

                .iconDiv {
                    height: 100%;
                    width: 35px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    margin-left: 5px;
                }
                .icon {
                    height: 27px;
                    width: 27px;
                    color: white;
                }
                .end {
                    margin-right: 7px;
                }
            }

            .imageDiv {
                display: flex;
                align-items: center;
                width: 100%;
                padding-top: 20px;

                .name {
                    margin-top: 5px;
                }

                .online {
                    color: #bcbcbc;
                    font-size: 14px;
                }
            }
            img {
                width: 120px;
                height: 120px;
                border-radius: 50%;
            }
        }
    }

    .settingsWrapper {
        position: relative;
        bottom: 32%;
        transform: translateY(32%);
        max-height: 80%;
        flex-direction: column;
        width: 390px;
        max-width: 100%;
        background: #282e33;
        z-index: 104;
        border-radius: 12px;
        overflow: auto;
    }

    .settingsWrapperMain {
        .topper {
            padding-bottom: 30px;
            border-bottom: 10px solid #303a42;
            margin-bottom: 5px;
            .upper {
                height: 60px;
                display: flex;
                align-items: center;
                .header {
                    margin-left: 30px;
                }
            }

            .lower {
                display: flex;
                img {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    margin-left: 31px;
                }

                .info {
                    margin-left: 10px;
                    .phoneNumber {
                        font-weight: 400 !important;
                        margin-top: 4px;
                        font-size: 14px;
                        font-weight: 300;
                    }

                    .username {
                        color: #ccc;
                        font-weight: 100;
                        font-size: 14px;
                        margin-top: 9px;
                    }
                }
            }
        }

        .main {
            display: flex;
            flex-direction: column;
        }
    }
`;
