import { StyledSlideMenu } from "./styled/SlideMenu.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SliderButton from "./SliderButton";
import {
    siwtchCreateChat,
    switchSlideMenu,
} from "../../features/modalHandles/modalSlice";
import Modal from "../modals/Modal";
import { useAppDispatch } from "../../store/store";
import { switchUserSettings } from "../../features/modalHandles/modalSlice";
import { IoMdSettings } from "react-icons/io";
import { HiUsers } from "react-icons/hi";

const SlideMenu = () => {
    const dispatch = useAppDispatch();
    const { slideMenuActive } = useSelector((state: RootState) => state.modal);
    const { user } = useSelector((state: RootState) => state.auth);

    return (
        <StyledSlideMenu>
            {slideMenuActive ? (
                <Modal
                    actionOnDispatch={switchSlideMenu}
                    className="modalDiv"
                />
            ) : null}

            <div className={`slideMenu ${slideMenuActive ? "" : "hidden"}`}>
                <div className="topper">
                    <div className="topperDiv">
                        <img src={user.img} alt="" />
                        <div className="name">{user.name}</div>
                        <div className="username">@{user.username}</div>
                    </div>
                </div>
                <div className="mainSlide">
                    <div onClick={() => dispatch(siwtchCreateChat())}>
                        <SliderButton Icon={HiUsers} iconBackground="orange">
                            Новый чат
                        </SliderButton>
                    </div>
                    <div onClick={() => dispatch(switchUserSettings())}>
                        <SliderButton
                            iconBackground="#B580E2"
                            Icon={IoMdSettings}
                        >
                            Настройки
                        </SliderButton>
                    </div>
                </div>
            </div>
        </StyledSlideMenu>
    );
};

export default SlideMenu;
