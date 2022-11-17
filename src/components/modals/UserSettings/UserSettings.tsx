import { useState } from "react";
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

    const { user } = useSelector((state: RootState) => state.auth);

    const [site, setSite] = useState("main");

    const sites = new Map([
        ["main", <Main setSite={setSite} user={user} />],
        ["info", <Info setSite={setSite} user={user} />],
    ]);

    return (
        <>
            {userSettingsActive ? (
                <StyledUserSettings>
                    <>
                        <Modal
                            className="modalDiv higherModal"
                            actionOnDispatch={switchUserSettings}
                        />

                        {sites.get(site)}
                    </>
                </StyledUserSettings>
            ) : null}
        </>
    );
};

export default UserSettings;
