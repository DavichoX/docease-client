import './App.css'
import ReactDom from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterForm from "./modules/auth/components/register/registerForm.jsx";
import LoginForm from "./modules/auth/components/signIn/loginForm.jsx";
import HomePageNav from "./modules/core/components/HomePageNav.jsx";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element={<HomePageNav />} />
            <Route path="/register" element={<RegisterForm />}/>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/recent" element={<div>RECENTS</div>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
