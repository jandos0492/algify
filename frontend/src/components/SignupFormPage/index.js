import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupFormPage.css'; // Import your CSS file for styling

function SignupFormPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (sessionUser) {
            return navigate("/");
        }
    }, [sessionUser, navigate])


    const clearInputs = () => {
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setUsername("");
        setMessage("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            setMessage("We have got your request. Please wait for approval...")
            return dispatch(sessionActions.signup({ email, username, password }))
                .then(() => {
                    setTimeout(() => {
                        clearInputs();
                    }, 2000)
                })
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                    if (data && data.message) setMessage(data.message);
                    setTimeout(() => {
                        clearInputs();
                    }, 2000)
                })
        }
        return setErrors(["Confirm Password field must be the same as the Password field"]);
    }



    return (
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <ul className="error-list">
                    {/* {errors.map((error, idx) => <li key={idx} className="error-item">{error}</li>)} */}
                    {errors && Array.isArray(errors) && errors.map((error, idx) => <li key={idx} className="error-item">{error}</li>)}
                </ul>
                <label className="form-label">
                    Email
                    <input
                        className="form-input"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label className="form-label">
                    Username
                    <input
                        className="form-input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label className="form-label">
                    Password
                    <input
                        className="form-input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="new-password"
                        required
                    />
                </label>
                <label className="form-label">
                    Confirm Password
                    <input
                        className="form-input"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        autoComplete="new-password"
                        required
                    />
                </label>
                <button className="submit-button" type="submit">Sign Up</button>
                <div className="login-text">
                    Already Member? <Link to="/login">Please Sign In here</Link>
                </div>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
}

export default SignupFormPage;
