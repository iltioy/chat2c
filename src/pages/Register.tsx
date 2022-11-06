import { StyledButton } from "../components/styled/Button.styled";
import { FcGoogle } from "react-icons/fc";
import "../styles/register/register.css";

const Register = () => {
    return (
        <div className="rlWrapper registerWrapper">
            <div className="rlDiv registerDiv">
                <div className="rl">
                    <form action="" style={{ overflow: "hidden" }}>
                        <div className="flex column form-div">
                            <div className="rlHeader">Регистрация</div>
                            <label htmlFor="" className="form-label">
                                Логин:
                            </label>
                            <input
                                type="text"
                                placeholder="Логин"
                                className="form-input"
                            />
                            <label htmlFor="" className="form-label">
                                Почта:
                            </label>
                            <input
                                type="email"
                                placeholder="example@gmail.com"
                                className="form-input"
                            />
                            <label htmlFor="" className="form-label">
                                Пароль:
                            </label>
                            <input
                                type="password"
                                placeholder="123..."
                                className="form-input"
                            />
                            <label htmlFor="" className="form-label">
                                Повторите пароль:
                            </label>
                            <input
                                type="password"
                                placeholder="123..."
                                className="form-input"
                            />

                            <div className="r-button">
                                <StyledButton
                                    width={110}
                                    height={34}
                                    background="494848"
                                    hoverBackground="383737"
                                >
                                    <button>Продолжить</button>
                                </StyledButton>
                            </div>

                            <div className="oauthBlock roauth">
                                <FcGoogle className="icon" />
                                <div className="blockText">
                                    Продолжить с Google
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
