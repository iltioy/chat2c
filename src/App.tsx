import "./styles/index/index.css";
import "./styles/pages/pages.css";
import { Location, NavigateFunction, Route, Routes } from "react-router-dom";
import axios from "axios";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { getUserInfo } from "./features/auth/authSlice";
import { useAppDispatch } from "./store/store";
import { getTokenByCreds } from "./features/auth/authSlice";
import Test from "./pages/Test";

function App() {
    const { pathname }: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();
    const dispatch = useAppDispatch();

    const { token, isLoaded } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (token !== "" && !isLoaded) {
            dispatch(getUserInfo(token));
        }
        // eslint-disable-next-line
    }, [token]);

    const getToken = async () => {
        const res = await dispatch(getTokenByCreds());

        if ((res.type = "auth/getTokenByCreds/fulfilled")) {
            navigate("/chat/0");
        }
    };

    useEffect(() => {
        // redirect to proper path
        if (pathname === "/" || pathname === "/chat") {
            navigate("/chat/0");
        }

        if (pathname == "/getToken") {
            getToken();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/chat/:id" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </div>
    );
}

export default App;
