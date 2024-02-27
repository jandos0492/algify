import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import PasswordResetRequest from './components/PasswordResetRequest';
import ResetPassword from './components/ResetPassword';
import Example from './components/Example';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const isAuthenticated = useSelector((state) => Boolean(state.session.user));
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated, navigate]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Routes>
          {!isAuthenticated && <Route path="/login" element={<LoginFormPage />} />}
          {!isAuthenticated && <Route path="/signup" element={<SignupFormPage />} />}
          {!isAuthenticated && <Route path="/reset-password" element={<PasswordResetRequest />} />}
          {!isAuthenticated && <Route path="/reset-password/:token" element={<ResetPassword />} />}

          {isAuthenticated && (
            <Route path="/" element={<Example />} />
          )}
        </Routes>
      )}
    </>
  )
}

export default App;