import { StyledSlideMenu } from "./styled/SlideMenu.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import SliderButton from "./SliderButton";
import { switchSlideMenu } from "../../features/modalHandles/modalSlice";
import Modal from "../modals/Modal";
import { useAppDispatch } from "../../store/store";
import { switchUserSettings } from "../../features/modalHandles/modalSlice";

import { IoMdSettings } from "react-icons/io";
import { HiUsers } from "react-icons/hi";

const SlideMenu = () => {
    const dispatch = useAppDispatch();
    const { slideMenuActive } = useSelector((state: RootState) => state.modal);

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
                        <img
                            src="https://zhizn-zvezd.ru/wp-content/uploads/2019/11/Певица-Дора-Дарья-Шиханова-биография-личная-жизнь-песни-2.jpg"
                            alt=""
                        />
                        <div className="name">Artem</div>
                    </div>
                </div>
                <div className="mainSlide">
                    <div>
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
