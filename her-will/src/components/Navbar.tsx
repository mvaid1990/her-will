'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link href="/" className="navbar-brand d-flex align-items-center">
          <Image src="/logo.svg" alt="HER-WILL Logo" width={50} height={50} />
          <span className="ms-2 fw-bold" style={{ color: '#FF6B9D' }}>HER-WILL</span>
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/plans" className="nav-link">Plans</Link>
            </li>
            <li className="nav-item">
              <Link href="/sessions" className="nav-link">Sessions</Link>
            </li>
            <li className="nav-item">
              <Link href="/challenges" className="nav-link">Challenges</Link>
            </li>
            <li className="nav-item">
              <Link href="/testimonials" className="nav-link">Success Stories</Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">Contact</Link>
            </li>
            <li className="nav-item ms-lg-2">
              <Link href="/signup" className="btn btn-primary btn-sm">Join Now</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
