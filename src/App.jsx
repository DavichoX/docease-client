import './App.css'
import ReactDom from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterForm from "./modules/auth/components/register/registerForm.jsx";
import LoginForm from "./modules/auth/components/signIn/loginForm.jsx";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path= "/" element={<div>HomePage</div>} />
            <Route path="/register" element={<RegisterForm />}/>
            <Route path="/login" element={<LoginForm />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
