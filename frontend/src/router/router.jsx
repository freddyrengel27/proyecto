
import {Route, Routes} from "react-router-dom";


import Home from "../components/home/home.jsx";
import Registro from "../components/registro/Registro.jsx";
import Login from "../components/login/Login.jsx"

const AppRouter = () =>{


    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/login" element={<Login />} />
        </Routes>

    )
};

export default AppRouter;