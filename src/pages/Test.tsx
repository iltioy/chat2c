import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Test = () => {
    const [img, setImg] = useState();
    const { token } = useSelector((state: RootState) => state.auth);
    useEffect(() => {
        fetchImage();
    }, []);
    const fetchImage = async () => {
        try {
            const res = await axios.get(
                "/api/v1/chat/message/image/2022-11-26T23-02-28.371Z-CWJkGrE_M5I.jpg",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setImg(res.data);
            console.log(res);
        } catch (error) {}
    };
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Test;
