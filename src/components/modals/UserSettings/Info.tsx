import { BiArrowBack } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Info = () => {
    return (
        <div className="settingsWrapper settingsWrapperInfo">
            <div className="topper flex column">
                <div className="upper">
                    <div className="iconDiv">
                        <BiArrowBack className="icon" />
                    </div>
                    <div className="text">Профиль</div>
                    <div className="iconDiv end">
                        <AiOutlineClose className="icon" />
                    </div>
                </div>
                <div className="imageDiv flex column">
                    <img
                        src="https://zhizn-zvezd.ru/wp-content/uploads/2019/11/Певица-Дора-Дарья-Шиханова-биография-личная-жизнь-песни-2.jpg"
                        alt=""
                    />
                    <div className="name">Artem</div>
                    <div className="online">last active..</div>
                </div>

                <input
                    className="descInput"
                    name=""
                    id=""
                    placeholder="Bio"
                ></input>
            </div>
        </div>
    );
};

export default Info;
