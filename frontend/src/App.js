import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation';
import PasswordResetRequest from './components/PasswordResetRequest';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';
import IntroductionVideos from './components/Videos/IntroductionVideos';
import ArrayAndStringVideos from './components/Videos/ArrayAndStringVideos';
import LinkedListVideos from './components/Videos/LinkedListVideos';
import BinaryTreeVideos from './components/Videos/BinaryTreeVideos';
import GraphVideos from './components/Videos/GraphVideos';
import DynamicProgrammingVideos from './components/Videos/DynamicProgrammingVideos';
import StackVideos from './components/Videos/StackVideos';
import ExhaustiveRecursionVideos from './components/Videos/ExhaustiveRecursionVideos';
import MixedRecallVideos from './components/Videos/MixedRecallVideos';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  const isAuthenticated = useSelector((state) => Boolean(state.session.user));

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <>
          {isAuthenticated && <Home />}
          <Routes>
            {!isAuthenticated && <Route path="*" element={<LoginFormPage />} />}
            {!isAuthenticated && <Route path="/login" element={<LoginFormPage />} />}
            {!isAuthenticated && <Route path="/signup" element={<SignupFormPage />} />}
            {!isAuthenticated && <Route path="/reset-password" element={<PasswordResetRequest />} />}
            {!isAuthenticated && <Route path="/reset-password/:token" element={<ResetPassword />} />}

            {isAuthenticated && <Route path="/introduction/:id" element={<IntroductionVideos />} />}
            {isAuthenticated && <Route path="/array-and-string/:id" element={<ArrayAndStringVideos />} />}
            {isAuthenticated && <Route path="/linked-list/:id" element={<LinkedListVideos />} />}
            {isAuthenticated && <Route path="/binary-tree/:id" element={<BinaryTreeVideos />} />}
            {isAuthenticated && <Route path="/graph/:id" element={<GraphVideos />} />}
            {isAuthenticated && <Route path="/dynamic-programming/:id" element={<DynamicProgrammingVideos />} />}
            {isAuthenticated && <Route path="/stack/:id" element={<StackVideos />} />}
            {isAuthenticated && <Route path="/exhaustive-recursion/:id" element={<ExhaustiveRecursionVideos />} />}
            {isAuthenticated && <Route path="/mixed-recall/:id" element={<MixedRecallVideos />} />}
          </Routes>
        </>
      )}
    </>
  )
}

export default App;