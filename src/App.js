import React from "react";
import { Routes, Route ,BrowserRouter} from "react-router-dom";

//pages
// import LoginForm from "./pages/LoginForm";
import MainPage from "./pages/MainPage";

const App =()=> {
    return (
        <div className="App">
          <BrowserRouter>
             <Routes>

            <Route path="/" element={<MainPage />} />
            {/* <Route path="/login" element={<LoginForm />} /> */}
            
        </Routes>
          </BrowserRouter>
     
    </div>
    );
}

export default App;