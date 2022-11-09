import Modal from "../Modal";
import { switchUserSettings } from "../../../features/modalHandles/modalSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { StyledUserSettings } from "../../styled/UserSettings.styled";
import Main from "./Main";
import Info from "./Info";

const UserSettings = () => {
    const { userSettingsActive } = useSelector(
        (state: RootState) => state.modal
    );
    return (
        <StyledUserSettings>
            {userSettingsActive ? (
                <>
                    <Modal
                        className="modalDiv higherModal"
                        actionOnDispatch={switchUserSettings}
                    />
                    <Info />
                </>
            ) : null}
        </StyledUserSettings>
    );
};

export default UserSettings;
