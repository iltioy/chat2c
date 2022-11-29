import { BiArrowBack } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { ImPhone } from "react-icons/im";
import { SiMaildotru } from "react-icons/si";
import { switchUserInfoActive } from "../../../features/modalHandles/modalSlice";
import { RootState, useAppDispatch } from "../../../store/store";
import SliderButton from "../../Home/SliderButton";
import { userType } from "../../../features/auth/authTypes";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import { StyledUserModal } from "../../styled/UserModal.styled";

const UserInfo: React.FC = () => {
    const dispatch = useAppDispatch();

    const user: userType = useSelector(
        (state: RootState) => state.modal.userInfo.user
    );

    return (
        <StyledUserModal>
            <>
                <Modal
                    className="modalDiv"
                    actionOnDispatch={switchUserInfoActive}
                />
                <div className="settingsWrapper settingsWrapperInfo">
                    <div className="topper flex column">
                        <div className="upper">
                            <div className="iconDiv">
                                <BiArrowBack className="icon" />
                            </div>
                            <div className="text">Профиль</div>
                            <div
                                className="iconDiv end"
                                onClick={() => {
                                    dispatch(switchUserInfoActive());
                                }}
                            >
                                <AiOutlineClose className="icon" />
                            </div>
                        </div>
                        <div className="imageDiv flex column">
                            <img src={user.img} alt="" />

                            <div className="name">{user.name}</div>
                            <div className="online">last active..</div>
                        </div>
                        <div className="descInputDiv">
                            <div className="descInput">
                                {user.bio === "" ? "Bio" : user.bio}
                            </div>
                        </div>

                        <SliderButton Icon={BiUser} iconBackground="#56B3F5">
                            {user.name}
                        </SliderButton>
                        <SliderButton Icon={ImPhone} iconBackground="#6DC534">
                            Телефонный Номер
                        </SliderButton>
                        <SliderButton
                            Icon={SiMaildotru}
                            iconBackground="orange"
                        >
                            {user.username}
                        </SliderButton>
                    </div>
                </div>
            </>
        </StyledUserModal>
    );
};

export default UserInfo;
