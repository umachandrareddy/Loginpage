// Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otp, setOTP] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [showSignUp, setShowSignUp] = useState(true);

  const handleForgotPassword = () => {
    setShowEmailForm(true);
    setShowSignUp(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setShowOTPForm(true);
    setShowEmailForm(false);
  };

  const handleOTPSubmit = (e) => {
    e.preventDefault();
    setShowOTPForm(false);
    setNewPassword('');
    setConfirmPassword('');
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    console.log('Password reset successful');
    setSuccessMessage('Password reset successful!');
  };

  return (
    <div className="login-container">
      {showSignUp && (
        <>
          <h2>Create New Account</h2>
          {/* New User Signup Form - Example fields */}
          <form>
            <input
              type="text"
              placeholder="Full Name"
              // Add necessary state handling here for full name
            />
            <input
              type="email"
              placeholder="Email"
              // Add necessary state handling here for email
            />
            <input
              type="password"
              placeholder="Password"
              // Add necessary state handling here for password
            />
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <button onClick={() => setShowSignUp(false)}>Login</button></p>
        </>
      )}

      {!showEmailForm && !showOTPForm && !showSignUp && (
        <>
          <h2>Login</h2>
          {/* Login Form */}
          <form>
            <input
              type="text"
              placeholder="Username or Email"
              // Add necessary state handling here for username or email
            />
            <input
              type="password"
              placeholder="Password"
              // Add necessary state handling here for password
            />
            <button type="submit">Login</button>
          </form>

          {/* Forgot Password Button */}
          <button onClick={handleForgotPassword}>Forgot Password?</button>
          <p>New User? <button onClick={() => setShowSignUp(true)}>Sign Up</button></p>
        </>
      )}

      {showEmailForm && (
        // Forgot Password - Email Form
        <form onSubmit={handleEmailSubmit}>
          <h2>Forgot Password</h2>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      {showOTPForm && (
        // Forgot Password - OTP Form
        <form onSubmit={handleOTPSubmit}>
          <h2>Enter OTP</h2>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            required
          />
          <button type="submit">Submit OTP</button>
        </form>
      )}

      {newPassword !== '' && confirmPassword !== '' && (
        // Forgot Password - New Password Form
        <form onSubmit={handlePasswordReset}>
          <h2>Reset Password</h2>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
      )}

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default Login;
