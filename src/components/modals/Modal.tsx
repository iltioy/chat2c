import { useAppDispatch } from "../../store/store";
import ReactDOM from "react-dom";
import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";

interface Props {
    actionOnDispatch?:
        | ActionCreatorWithoutPayload<"modal/switchSlideMenu">
        | ActionCreatorWithoutPayload<"modal/switchUserSettings">
        | ActionCreatorWithoutPayload<"modal/siwtchCreateChat">
        | ActionCreatorWithoutPayload<"modal/switchCropImageActive">
        | ActionCreatorWithoutPayload<"modal/switchUserInfoActive">;
    className?: string;
}

const Modal: React.FC<Props> = ({ actionOnDispatch, className }) => {
    const dispatch = useAppDispatch();
    const portalContainer = document.getElementById("root")!;

    if (actionOnDispatch) {
        return ReactDOM.createPortal(
            <div
                className={`${className}`}
                onClick={() => {
                    dispatch(actionOnDispatch());
                }}
            ></div>,
            portalContainer
        );
    } else {
        return ReactDOM.createPortal(
            <div className={`${className}`}></div>,
            portalContainer
        );
    }
};

export default Modal;
