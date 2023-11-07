import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';

function App() { 
  
  return (
    <div className="App">
    {/* <BrowserRouter>
    <routes>
      <route element={<Header />} >
        <route index element={<Home />} />
        <route index element={<Dashboard />} />
      </route>
      
      <route path="signupPage" element={<SignupPage />} />
      <route path="login" element={<LoginPage />} />
    </routes>
    </BrowserRouter> */}
      <LoginPage />
    </div>
  ); 
}

export default App;
