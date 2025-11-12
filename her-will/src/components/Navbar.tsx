'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`navbar navbar-expand-lg sticky-top transition-all ${scrolled ? 'navbar-scrolled' : ''}`}
      style={{
        background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'white',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.5rem 0' : '1rem 0'
      }}
    >
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center" style={{transition: 'transform 0.3s ease'}}>
          <Image src="/logo.svg" alt="HER-WILL Logo" width={45} height={45} style={{transition: 'transform 0.3s ease'}} />
          <span className="ms-2 fw-bold" style={{ 
            background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '1.5rem',
            letterSpacing: '1px'
          }}>HER-WILL</span>
        </Link>
        
        <button 
          className="navbar-toggler border-0" 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          style={{
            padding: '0.5rem',
            fontSize: '1.5rem'
          }}
        >
          <span style={{
            display: 'block',
            width: '25px',
            height: '2px',
            background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
            margin: '5px 0',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(45deg) translateY(7px)' : 'none'
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '2px',
            background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
            margin: '5px 0',
            transition: 'all 0.3s ease',
            opacity: isOpen ? 0 : 1
          }}></span>
          <span style={{
            display: 'block',
            width: '25px',
            height: '2px',
            background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
            margin: '5px 0',
            transition: 'all 0.3s ease',
            transform: isOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
          }}></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link href="/" className="nav-link position-relative" style={{
                fontWeight: '500',
                padding: '0.5rem 1rem',
                transition: 'color 0.3s ease'
              }}>
                Home
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/plans" className="nav-link position-relative" style={{
                fontWeight: '500',
                padding: '0.5rem 1rem'
              }}>
                Plans
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sessions" className="nav-link position-relative" style={{
                fontWeight: '500',
                padding: '0.5rem 1rem'
              }}>
                Sessions
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/challenges" className="nav-link position-relative" style={{
                fontWeight: '500',
                padding: '0.5rem 1rem'
              }}>
                Challenges
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/testimonials" className="nav-link position-relative" style={{
                fontWeight: '500',
                padding: '0.5rem 1rem'
              }}>
                Success Stories
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link position-relative" style={{
                fontWeight: '500',
                padding: '0.5rem 1rem'
              }}>
                Contact
                <span className="nav-underline"></span>
              </Link>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <Link href="/signup" className="btn btn-primary px-4 py-2 position-relative overflow-hidden" style={{
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '0.95rem',
                border: 'none',
                background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)',
                transition: 'all 0.3s ease'
              }}>
                <span style={{position: 'relative', zIndex: 1}}>🚀 Join Now - ₹99</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <style jsx>{`
        .nav-link {
          color: #333 !important;
        }
        .nav-link:hover {
          color: #FF6B9D !important;
        }
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%);
          transition: width 0.3s ease;
        }
        .nav-link:hover .nav-underline {
          width: 80%;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 107, 157, 0.5) !important;
        }
        .navbar-brand:hover img {
          transform: scale(1.1) rotate(5deg);
        }
      `}</style>
    </nav>
  );
}
