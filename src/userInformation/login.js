import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { app } from "./firebase";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Login successful");
        navigate('/');
      })
      .catch((error) => {
        console.error("Error during login:", error);
      });
  };

  const redirectToSignup = () => {
    navigate('/signup');
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundImage: `url('https://plus.unsplash.com/premium_photo-1669223469766-130f869846e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFja2dyb3VuZCUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D')`,
      backgroundSize: 'cover',
    }}>
      <div style={{ 
        backgroundColor: '#fff', 
        borderRadius: '8px', 
        padding: '20px', 
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
        width: '400px', 
        textAlign: 'center',
        transition: 'transform 0.3s ease',
        transform: 'scale(1)',
      }}>
        <h2 style={{ marginBottom: '20px', color: "black", fontSize: '28px' }}>Login</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <label htmlFor="email" style={{ fontWeight: 'bold', marginBottom: '5px', color: "black", fontSize: '16px', width: '100%', display: 'block', textAlign: 'left' }}>Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <label htmlFor="password" style={{ fontWeight: 'bold', marginBottom: '5px', color: "black", fontSize: '16px', width: '100%', display: 'block', textAlign: 'left' }}>Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '15px', width: '100%' }}>
            <button type="submit" style={{ width: '100%', padding: '10px', border: 'none', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', cursor: 'pointer', transition: 'background-color 0.3s ease', fontSize: '16px' }}>Login</button>
          </div>
        </form>
        <button style={{ backgroundColor: 'transparent', border: 'none', color: '#007bff', cursor: 'pointer', textDecoration: 'underline', fontSize: '16px' }} onClick={redirectToSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default LoginPage;
