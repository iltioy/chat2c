import "../styles/login/loginPage.css";
import { StyledButton } from "../components/styled/Button.styled";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
// import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const [error, setError] = useState("");

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().max(15).min(3).required(),
            password: Yup.string().max(15).min(3).required(),
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: async (values: any) => {
            const res = await dispatch(login(values));

            if (!res.error) {
                navigate("/chat/0");
            } else {
                // setError(res.error);
            }
        },
    });

    const authViaGoogle = () => {
        window.open("/api/v1/auth/google", "_self");
    };

    return (
        <div className="loginWrapper rlWrapper">
            <div className="loginDiv rlDiv">
                <div className="login flex column rl">
                    <form
                        action=""
                        className="flex column"
                        onSubmit={handleSubmit}
                    >
                        <div className="rlHeader">Вход в аккаунт</div>
                        <label htmlFor="username" className="form-label">
                            Логин:
                        </label>
                        <input
                            value={values.username}
                            onChange={handleChange}
                            type="text"
                            id="username"
                            name="username"
                            className="form-input"
                        />
                        <label htmlFor="password" className="form-label">
                            Пароль:
                        </label>
                        <input
                            value={values.password}
                            onChange={handleChange}
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
                        <div className="oauthBlock" onClick={authViaGoogle}>
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
