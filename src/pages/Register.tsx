import { StyledButton } from "../components/styled/Button.styled";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { register } from "../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import "../styles/register/register.css";
// import { useState } from "react";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const [error, setError] = useState();

    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            username: "",
            password: "",
            confPassword: "",
            email: "",
        },
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema: Yup.object({
            username: Yup.string()
                .min(3, "Имя пользователя должно быть больше 3 символов.")
                .max(15, "Имя пользователя должно быть меньше 16 символов.")
                .required(),
            password: Yup.string()
                .min(6, "Минимум 6 символов для пароля.")
                .max(100, "Максимум 100 символов для пароля.")
                .required(),
            confPassword: Yup.string()
                .min(6, "Минимум 6 символов для пароля.")
                .required()
                .max(100, "Максимум 100 символов для пароля.")
                .oneOf([Yup.ref("password"), null], "Пароли должны совпадать."),
            email: Yup.string().email().required(),
        }),
        onSubmit: async () => {
            const res = await dispatch(
                register({
                    username: values.username,
                    password: values.password,
                    email: values.email,
                })
            );

            if (!res.error) {
                navigate("/chat/0");
            } else {
                // setError(res.error);
            }
        },
    });

    return (
        <div className="rlWrapper registerWrapper">
            <div className="rlDiv registerDiv">
                <div className="rl">
                    <form
                        action=""
                        style={{ overflow: "hidden" }}
                        onSubmit={handleSubmit}
                    >
                        <div className="flex column form-div">
                            <div className="rlHeader">Регистрация</div>
                            <label htmlFor="username" className="form-label">
                                Логин:
                            </label>
                            <input
                                value={values.username}
                                onChange={handleChange}
                                name="username"
                                id="username"
                                type="text"
                                placeholder="Логин"
                                className="form-input"
                            />
                            <label htmlFor="email" className="form-label">
                                Почта:
                            </label>
                            <input
                                value={values.email}
                                onChange={handleChange}
                                name="email"
                                id="email"
                                type="email"
                                placeholder="example@gmail.com"
                                className="form-input"
                            />
                            <label htmlFor="password" className="form-label">
                                Пароль:
                            </label>
                            <input
                                value={values.password}
                                onChange={handleChange}
                                name="password"
                                id="password"
                                type="password"
                                placeholder="123..."
                                className="form-input"
                            />
                            <label
                                htmlFor="confPassword"
                                className="form-label"
                            >
                                Повторите пароль:
                            </label>
                            <input
                                value={values.confPassword}
                                onChange={handleChange}
                                name="confPassword"
                                id="confPassword"
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
