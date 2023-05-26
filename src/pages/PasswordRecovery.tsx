import "../styles/recovery/recovery.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import { NavigateFunction } from "react-router";

interface emailPageProps {
    handleRecovery: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    email: string;
}

const RecoveryPasswordEmailInput = ({
    handleRecovery,
    setEmail,
    email,
}: emailPageProps) => {
    return (
        <div className="page">
            <div className="mainWindow">
                <div className="inner">
                    <form action="" onSubmit={(e) => handleRecovery(e)}>
                        <div className="recoveryText">
                            Введите почту от вашего аккаунта
                        </div>
                        <input
                            type="email"
                            className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="button" type="submit">
                            Восстановить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

interface passwordPageProps {
    handlePasswordChange: (
        e: React.FormEvent<HTMLFormElement>
    ) => Promise<void>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    confPassword: string;
    setConfPassword: React.Dispatch<React.SetStateAction<string>>;
}

const RecoveryPasswordPasswordChange = ({
    handlePasswordChange,
    password,
    setPassword,
    confPassword,
    setConfPassword,
}: passwordPageProps) => {
    return (
        <div className="page">
            <div className="mainWindow">
                <div className="inner">
                    <form action="" onSubmit={(e) => handlePasswordChange(e)}>
                        <div className="recoveryText">Введите пароль</div>
                        <input
                            type="password"
                            className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="recoveryText">Повторите пароль</div>
                        <input
                            type="password"
                            className="input"
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                        />

                        <button
                            className="button"
                            style={{
                                padding: "10px 12px",
                            }}
                        >
                            Отправть
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

const PasswordRecovery = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confPassword, setConfPassword] = useState<string>("");
    const navigate: NavigateFunction = useNavigate();
    const params = useParams();

    const { recoveryId } = params;

    const handleRecovery = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email) {
            return;
        }
        let tempMail = email;
        setEmail("");
        try {
            const res = await axios.post("/api/v1/auth/recover", {
                email: tempMail,
            });

            if (res.status === 200) {
                alert(
                    `Сообщение с ссылкой для сброса пароля отправлено на почту ${tempMail}!`
                );

                navigate("/login");
            }
        } catch (error: any) {
            alert(error?.response?.data?.msg);
        }
    };

    const handlePasswordChange = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        if (password !== confPassword) {
            alert("Пароли не совпадают!");
        }

        if (password.length < 6) {
            alert("Пароль должен содержать минимум 6 символов");
        }

        try {
            const res = await axios.post(`/api/v1/auth/recover/${recoveryId}`, {
                password,
            });

            if (res.status === 200) {
                alert("Пароль был успешно сброшен!");

                navigate("/login");
            }
        } catch (error: any) {
            alert(error?.response?.data?.msg);
        }
    };

    return (
        <>
            {!recoveryId ? (
                <RecoveryPasswordEmailInput
                    handleRecovery={handleRecovery}
                    email={email}
                    setEmail={setEmail}
                />
            ) : (
                <RecoveryPasswordPasswordChange
                    confPassword={confPassword}
                    handlePasswordChange={handlePasswordChange}
                    password={password}
                    setConfPassword={setConfPassword}
                    setPassword={setPassword}
                />
            )}
        </>
    );
};

export default PasswordRecovery;
