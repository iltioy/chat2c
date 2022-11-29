import { BiArrowBack } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { ImPhone } from "react-icons/im";
import { SiMaildotru } from "react-icons/si";
import { switchUserSettings } from "../../../features/modalHandles/modalSlice";
import { useAppDispatch } from "../../../store/store";
import SliderButton from "../../Home/SliderButton";
import { userType } from "../../../features/auth/authTypes";
import { updateUserInfo } from "../../../features/auth/authSlice";
import { useState, useEffect, useRef } from "react";
import { switchCropImageActive } from "../../../features/modalHandles/modalSlice";
import axios from "axios";

interface Props {
    setSite: React.Dispatch<React.SetStateAction<string>>;
    user: userType;
    token: string;
    setCropFile: React.Dispatch<React.SetStateAction<File | null | undefined>>;
}

const Info: React.FC<Props> = ({ setSite, user, token, setCropFile }) => {
    const dispatch = useAppDispatch();

    const [bio, setBio] = useState(user.bio);
    const bioRef = useRef(bio);

    const [name, setName] = useState(user.name);
    const [username, setUsername] = useState(user.username);

    const fileInput = useRef<HTMLInputElement>(null);

    const handleImageChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (!e.target.files || e.target.files.length <= 0) {
            return;
        }

        const selectedFile = e.target.files[0];
        const fileType = selectedFile.type;
        const fileSize = selectedFile.size;
        if (
            !(
                fileType === "image/png" ||
                fileType === "image/jpeg" ||
                fileType === "image/jpg"
            ) ||
            fileSize > 1024 * 1024 * 10
        ) {
            return;
        }

        setCropFile(selectedFile);
        dispatch(switchCropImageActive());

        if (fileInput.current) {
            fileInput.current.value = "";
        }

        // const formData = new FormData();
        // formData.append("image", selectedFile);

        // try {
        //     const res = await axios.patch("/api/v1/user/image", formData, {
        //         headers: {
        //             Authorization: `Bearer ${token}`,
        //         },
        //     });

        //     if (res.data.img) {
        //         dispatch(updateUserInfo({ img: res.data.img }));
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    };

    const updateProfile = async (bioArg: string) => {
        try {
            const res = await axios.patch(
                "/api/v1/user/update",
                {
                    bio: bioArg,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (res.data.user) {
                const user = res.data.user;
                dispatch(
                    updateUserInfo({
                        name: user.name,
                        username: user.username,
                        bio: user.bio,
                    })
                );
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        bioRef.current = bio;

        const updateTimer = setTimeout(() => {
            updateProfile(bioRef.current);
        }, 2000);

        return () => {
            clearTimeout(updateTimer);
        };
        // eslint-disable-next-line
    }, [bio]);

    useEffect(() => {
        return () => {
            updateProfile(bioRef.current);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <div className="settingsWrapper settingsWrapperInfo">
                <div className="topper flex column">
                    <div className="upper">
                        <div
                            className="iconDiv"
                            onClick={() => setSite("main")}
                        >
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
                        <label htmlFor="userFile">
                            <img src={user.img} alt="" />
                        </label>
                        <input
                            onChange={(e) => handleImageChange(e)}
                            ref={fileInput}
                            type="file"
                            id="userFile"
                            name="userFile"
                            style={{ display: "none" }}
                            accept="image/png, image/gif, image/jpeg, image/jpg"
                        />
                        <div className="name">{user.name}</div>
                        <div className="online">last active..</div>
                    </div>
                    <div className="descInputDiv">
                        <input
                            className="descInput"
                            name=""
                            id=""
                            placeholder="Bio"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        ></input>
                    </div>

                    <SliderButton
                        input
                        placeholder="Name"
                        Icon={BiUser}
                        iconBackground="#56B3F5"
                        value={name}
                        setValue={setName}
                    >
                        Имя
                    </SliderButton>
                    <SliderButton Icon={ImPhone} iconBackground="#6DC534">
                        Телефонный Номер
                    </SliderButton>
                    <SliderButton
                        input
                        placeholder="@username"
                        value={username}
                        Icon={SiMaildotru}
                        iconBackground="orange"
                        setValue={setUsername}
                    >
                        Имя пользователя
                    </SliderButton>
                </div>
            </div>
        </>
    );
};

export default Info;
