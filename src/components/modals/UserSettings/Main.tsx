import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
import { FaGlobe } from "react-icons/fa";
import { user } from "../../../features/auth/authTypes";
import SliderButton from "../../Home/SliderButton";

interface Props {
    setSite: React.Dispatch<React.SetStateAction<string>>;
    user: user;
}

const Main: React.FC<Props> = ({ setSite, user }) => {
    return (
        <>
            <div className="settingsWrapper settingsWrapperMain">
                <div className="topper">
                    <div className="upper">
                        <div className="header">Настройки</div>
                    </div>

                    <div className="lower">
                        <img src={user.img} alt="" />
                        <div className="info">
                            <div className="name">{user.name}</div>
                            <div className="phoneNumber">+78005553535</div>
                            <div className="username">@{user.username}</div>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div onClick={() => setSite("info")}>
                        <SliderButton
                            Icon={BiUserCircle}
                            iconBackground="orange"
                        >
                            Настойки профиля
                        </SliderButton>
                    </div>
                    <SliderButton Icon={CiLock} iconBackground="#6DC534">
                        Приватность
                    </SliderButton>
                    <SliderButton Icon={FaGlobe} iconBackground="#F2925B">
                        Язык
                    </SliderButton>
                </div>
            </div>
        </>
    );
};

export default Main;
