import "./styles/index/index.css";
import "./styles/pages/pages.css";
import { Location, NavigateFunction, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
    const { pathname }: Location = useLocation();
    const navigate: NavigateFunction = useNavigate();

    useEffect(() => {
        // redirect to proper path
        if (pathname === "/" || pathname === "/chat") {
            navigate("/chat/0");
        }
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/chat/:id" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
