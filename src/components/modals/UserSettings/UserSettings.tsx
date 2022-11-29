import { useState } from "react";
import Modal from "../Modal";
import { switchUserSettings } from "../../../features/modalHandles/modalSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { StyledUserModal } from "../../styled/UserModal.styled";
import Main from "./Main";
import Info from "./Info";

interface UserSettingsProps {
    setCropFile: React.Dispatch<React.SetStateAction<File | null | undefined>>;
}

const UserSettings: React.FC<UserSettingsProps> = ({ setCropFile }) => {
    const { userSettingsActive } = useSelector(
        (state: RootState) => state.modal
    );

    const { user, token } = useSelector((state: RootState) => state.auth);

    const [site, setSite] = useState("main");

    const sites = new Map([
        ["main", <Main setSite={setSite} user={user} />],
        [
            "info",
            <Info
                setSite={setSite}
                user={user}
                token={token}
                setCropFile={setCropFile}
            />,
        ],
    ]);

    return (
        <>
            {userSettingsActive ? (
                <StyledUserModal>
                    <>
                        <Modal
                            className="modalDiv higherModal"
                            actionOnDispatch={switchUserSettings}
                        />

                        {sites.get(site)}
                    </>
                </StyledUserModal>
            ) : null}
        </>
    );
};

export default UserSettings;
