import {useState} from "react";
import './registerFormStyles.css'

export default function RegisterForm() {
    const [formData, setFormData] = useState({username: "", email: "", password: ""});

   const handleSubmit = async (e) => {
       e.preventDefault();
       await fetch("http://localhost:8000/users/register",
           {
               method: "POST",
               body: JSON.stringify(formData),
               headers: {
                   "Content-Type": "application/json",
               }
           }).then(res => res.json())
   }

   const handleChange = (e) => {
        const {name , value} = e.target;
        setFormData(values => ({...values, [name]: value}));
   }

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <div className="register-presentation">
                <h2>
                    Sign Up
                </h2>
                <span>
                    Welcome to Docease! Sign up to get started
                </span>
            </div>
            <div className="input-wrapper">
                <input type="text" name="username" placeholder="username" value={formData.username || ""} onChange={handleChange} />
            </div>
            <div className="input-wrapper">
                <input type="email" name="email" placeholder="email" value={formData.email || ""} onChange={handleChange} />
            </div>
            <div className="input-wrapper">
                <input type="password" name="password" placeholder="password" value={formData.password} onChange={handleChange} />
            </div>
            <span className="TermsConditionLink">
                Pressing submit you accept our <a href="">Terms and Conditions</a> and <a href="">Privacy Policy</a>
            </span>
            <div className="buttonContainer">
                <button>Submit</button>
            </div>
            <span>
                Already have an account? <a href="">Sign In</a>
            </span>
        </form>
    )
}
