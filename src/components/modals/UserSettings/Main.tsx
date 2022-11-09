import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { CiLock } from "react-icons/ci";
import { FaGlobe } from "react-icons/fa";
import SliderButton from "../../Home/SliderButton";

const Main = () => {
    return (
        <>
            <div className="settingsWrapper settingsWrapperMain">
                <div className="topper">
                    <div className="upper">
                        <div className="header">Настройки</div>
                    </div>

                    <div className="lower">
                        <img
                            src="https://zhizn-zvezd.ru/wp-content/uploads/2019/11/Певица-Дора-Дарья-Шиханова-биография-личная-жизнь-песни-2.jpg"
                            alt=""
                        />
                        <div className="info">
                            <div className="name">Name</div>
                            <div className="phoneNumber">+78005553535</div>
                            <div className="username">@Username</div>
                        </div>
                    </div>
                </div>

                <div className="main">
                    <SliderButton Icon={BiUserCircle} iconBackground="orange">
                        Настойки профиля
                    </SliderButton>
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
