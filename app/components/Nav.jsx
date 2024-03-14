import LoginModal from './LoginModal.jsx';
import RegisterModal from './RegisterModal.jsx';
import Link from 'next/link.js';
import { useState } from 'react';
import '../ui/nav.css';

const Nav = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);

  return (
    <nav className='nav'>
      <Link href="/">
        <img className='logo' src="/logo.svg" alt="logo" />
      </Link>
      <div className="nav-buttons">
        <button className='nav-button' onClick={() => setLoginModalOpen(true)}>Login</button>
        <button className='nav-button' onClick={() => setRegisterModalOpen(true)}>Register</button>
      </div>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
      <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)} />
    </nav>)
}

export default Nav