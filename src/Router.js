import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import PostWritePage from "./pages/PostWritePage";
import Start from "./pages/Start";
import RegisterLocation from "./pages/RegisterLocation";
import Register from "./pages/Register";
import DetailPage from "./pages/DetailPage";
import PostEditPage from "./pages/PostEditPage";


function Router() {
  
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/location" element={<RegisterLocation />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<MainPage />} />
                <Route path="/postwrite" element={<PostWritePage />} />
                <Route path="/detailpage/:id" element={<DetailPage />} />
                <Route path="/post/edit/:id" element={<PostEditPage/>} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;
