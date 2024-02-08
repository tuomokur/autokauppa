'use client'
import './ui/homePage.css';
import LoginModal from './components/LoginModal.js';
import RegisterModal from './components/RegisterModal.js';
import Link from "next/link"
import { useState } from 'react';


const HomePage = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  return (
    <>
      <div className='main'>
        <header className='container'>
          <nav className='nav'>
            <img className='logo' src="/logo.svg" alt="logo" />
            <div className="nav-buttons">
              <button className='nav-button' onClick={() => setLoginModalOpen(true)}>Login</button>
              <button className='nav-button' onClick={() => setRegisterModalOpen(true)}>Register</button>
            </div>
          </nav>

          <LoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
          <RegisterModal isOpen={isRegisterModalOpen} onClose={() => setRegisterModalOpen(false)} />

          <div className="hero">
            <h1 className='hero-heading'>A Car store</h1>
            <h2 className='hero-heading'>cars Lorem, ipsum...</h2>
            <div className="search-form">
              <form className="search-form" action="" >
                <Link href="/search"><button className='hero-buttons'>Find cars</button></Link>
                <select name="brand" id="brand">
                  <option value="" selected>Brand</option>
                  <option value="">Toyota</option>
                  <option value="">Lexus</option>
                  <option value="">Ford</option>
                  <option value="">Volkswagen</option>
                </select>
                <input type="text" placeholder='Max price' />
                <input type="text" placeholder='Max mileage' />
              </form>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
export default HomePage