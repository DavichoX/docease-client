import {useState} from "react";
import './registerFormStyles.css'
import {Link} from "react-router-dom";

function RegisterForm() {
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
        <div className="form-wrapper flex flex-col bg-teal-800 border-1 rounded-lg text-gray-300  wx-auto " style={{margin: '5% auto', padding: '3%'}} >
            <div className="register-presentation">
                <h2>
                    Sign Up
                </h2>
                <span>
                    Welcome to Docease! Sign up to get started
                </span>
            </div>
            <form method="POST" onSubmit={handleSubmit} className="flex flex-col  h-[90%] justify-center items-center">
                <div className="input-wrapper">
                    <input type="text" name="username" placeholder="username" value={formData.username || ""}
                           onChange={handleChange}/>
                </div>
                <div className="input-wrapper">
                    <input type="email" name="email" placeholder="email" value={formData.email || ""}
                           onChange={handleChange}/>
                </div>
                <div className="input-wrapper">
                    <input type="password" name="password" placeholder="password" value={formData.password}
                           onChange={handleChange}/>
                </div>
                <span className="TermsConditionLink">
                    Pressing submit you accept our
                    <br/>
                    <a href="">Terms and Conditions</a>
                    <br/>
                    and <br/>
                    <a href="">Privacy Policy</a>
                </span>
                <div className="buttonContainer">
                    <button className=" bg-teal-900 hover:bg-teal-700 border-2 border-white">Submit</button>
                </div>
                <div className="separatorContainer">
                    <span className="separator">or</span>
                </div>
                <div className="login-options">
                    <button className="google-oauth bg-white text-gray-900 hover:bg-gray-200 border-2 border-white flex flex-row justify-between items-center">
                        <span>
                            <svg width="800px" height="800px" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg"
                                 preserveAspectRatio="xMidYMid"><path
                                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                                fill="#4285F4"/><path
                                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                                fill="#34A853"/><path
                                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                                fill="#FBBC05"/><path
                                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                                fill="#EB4335"/></svg>
                        </span>
                        <span className="text-sm">Continue with Google</span>
                    </button>
                </div>
                <span>
                Already have an account?
                <Link to="/login"> Log in</Link>
                </span>
            </form>
        </div>

    )
}

export default RegisterForm;