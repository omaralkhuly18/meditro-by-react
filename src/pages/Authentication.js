import React, { useState } from 'react';
import './Authentication.css';

const AuthenticationPage = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [forgotEmail, setForgotEmail] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

  const handleLogin = (e) => {
    e.preventDefault();
    if (!emailRegex.test(loginEmail)) {
      alert('البريد الإلكتروني غير صالح');
      return;
    }
    if (!passwordRegex.test(loginPassword)) {
      alert('كلمة المرور يجب أن تحتوي على حرف واحد كبير، وحرف واحد صغير، ورقم واحد، وطولها بين 6 إلى 20 حرف.');
      return;
    }
    // تنفيذ عملية تسجيل الدخول هنا
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (!emailRegex.test(forgotEmail)) {
      alert('البريد الإلكتروني غير صالح');
      return;
    }
    // تنفيذ عملية استعادة كلمة المرور هنا
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!emailRegex.test(registerEmail)) {
      alert('البريد الإلكتروني غير صالح');
      return;
    }
    if (!passwordRegex.test(registerPassword)) {
      alert('كلمة المرور يجب أن تحتوي على حرف واحد كبير، وحرف واحد صغير، ورقم واحد، وطولها بين 6 إلى 20 حرف.');
      return;
    }
    // تنفيذ عملية التسجيل هنا
  };

  return (
    <div className="authentication-page">
      {!showForgotPassword && !showRegister && (
        <form onSubmit={handleLogin}>
          <h2>تسجيل الدخول</h2>
          <input 
            type="email" 
            placeholder="البريد الإلكتروني" 
            value={loginEmail} 
            onChange={(e) => setLoginEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="كلمة المرور" 
            value={loginPassword} 
            onChange={(e) => setLoginPassword(e.target.value)} 
            required 
          />
          <button type="submit">تسجيل الدخول</button>
          <button type="button" onClick={() => setShowForgotPassword(true)}>نسيت كلمة المرور</button>
          <button type="button" onClick={() => setShowRegister(true)}>تسجيل</button>
        </form>
      )}

      {showForgotPassword && (
        <form onSubmit={handleForgotPassword}>
          <h2>استعادة كلمة المرور</h2>
          <input 
            type="email" 
            placeholder="البريد الإلكتروني" 
            value={forgotEmail} 
            onChange={(e) => setForgotEmail(e.target.value)} 
            required 
          />
          <button type="submit">إرسال</button>
          <button type="button" onClick={() => setShowForgotPassword(false)}>العودة إلى تسجيل الدخول</button>
        </form>
      )}

      {showRegister && (
        <form onSubmit={handleRegister}>
          <h2>تسجيل جديد</h2>
          <input 
            type="email" 
            placeholder="البريد الإلكتروني" 
            value={registerEmail} 
            onChange={(e) => setRegisterEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            placeholder="كلمة المرور" 
            value={registerPassword} 
            onChange={(e) => setRegisterPassword(e.target.value)} 
            required 
          />
          <button type="submit">سجل الآن</button>
          <button type="button" onClick={() => setShowRegister(false)}>العودة إلى تسجيل الدخول</button>
        </form>
      )}
    </div>
  );
};

export default AuthenticationPage;