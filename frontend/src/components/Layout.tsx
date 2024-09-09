// src/components/Layout.tsx

import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import FloatingElements from './FloatingElements';
import "../styles/Layout.css"
import Button from './Button';
import "../styles/Button.css"

const Layout: React.FC = () => {
  return (
    <div>
      {/* Floating Background */}
      <FloatingElements />

      {/* Navbar */}
      <div className='viewport'>
      <nav className="navbar">
        <h3>eLearnEarn</h3>
        <ul>
          <li><Link to="/"><Button className={"button"} text='Home'/></Link></li>
          <li><Link to="signup"><Button className={"button"} text='Signup'/></Link></li>
          <li><Link to="signin"><Button className={"button"} text='Login'/></Link></li>
        </ul>
      </nav>

      {/* Dynamic Page Content */}
      <div className="page-content">
      <Outlet />

      </div>
      </div>
    </div>
  );
};

export default Layout;


