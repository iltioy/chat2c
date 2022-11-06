import "../styles/login/loginPage.css";
import { StyledButton } from "../components/styled/Button.styled";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="loginWrapper rlWrapper">
            <div className="loginDiv rlDiv">
                <div className="login flex column rl">
                    <form action="" className="flex column">
                        <div className="rlHeader">Вход в аккаунт</div>
                        <label htmlFor="username" className="form-label">
                            Логин:
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-input"
                        />
                        <label htmlFor="password" className="form-label">
                            Пароль:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                        />
                        <div className="password-change">Забыли пароль?</div>
                        <StyledButton
                            width={86}
                            height={34}
                            background="494848"
                            hoverBackground="383737"
                        >
                            <button type="submit">Войти</button>
                        </StyledButton>
                        <div className="oauthBlock">
                            <FcGoogle className="icon" />
                            <div className="blockText">Продолжить с Google</div>
                        </div>
                        <div className="go-register">
                            <div className="first">Нет аккаунта?</div>
                            <Link to="/register" className="second">
                                Зарегестрироваться
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
