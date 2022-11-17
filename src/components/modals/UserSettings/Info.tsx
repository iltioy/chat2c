import { BiArrowBack } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { ImPhone } from "react-icons/im";
import { SiMaildotru } from "react-icons/si";
import { switchUserSettings } from "../../../features/modalHandles/modalSlice";
import { useAppDispatch } from "../../../store/store";
import SliderButton from "../../Home/SliderButton";
import { user } from "../../../features/auth/authTypes";

interface Props {
    setSite: React.Dispatch<React.SetStateAction<string>>;
    user: user;
}

const Info: React.FC<Props> = ({ setSite, user }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="settingsWrapper settingsWrapperInfo">
            <div className="topper flex column">
                <div className="upper">
                    <div className="iconDiv" onClick={() => setSite("main")}>
                        <BiArrowBack className="icon" />
                    </div>
                    <div className="text">Профиль</div>
                    <div
                        className="iconDiv end"
                        onClick={() => {
                            dispatch(switchUserSettings());
                            setSite("main");
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
                    <input
                        className="descInput"
                        name=""
                        id=""
                        placeholder="Bio"
                    ></input>
                </div>

                <SliderButton Icon={BiUser} iconBackground="#56B3F5">
                    Имя
                </SliderButton>
                <SliderButton Icon={ImPhone} iconBackground="#6DC534">
                    Телефонный Номер
                </SliderButton>
                <SliderButton Icon={SiMaildotru} iconBackground="orange">
                    Имя пользователя
                </SliderButton>
            </div>
        </div>
    );
};

export default Info;
