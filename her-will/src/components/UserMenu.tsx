'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function UserMenu() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <div className="spinner-border spinner-border-sm text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn('google')}
        className="btn btn-primary px-4 py-2"
        style={{
          borderRadius: '50px',
          fontWeight: '600',
          fontSize: '0.95rem',
          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
          border: 'none',
          boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)',
        }}
      >
        🚀 Sign In
      </button>
    );
  }

  return (
    <div className="dropdown">
      <button
        className="btn btn-link dropdown-toggle d-flex align-items-center gap-2 text-decoration-none p-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ border: 'none' }}
      >
        {session.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name || 'User'}
            width={40}
            height={40}
            className="rounded-circle"
            style={{ border: '2px solid #FF6B9D', objectFit: 'cover' }}
            unoptimized
          />
        ) : (
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '18px'
            }}
          >
            {session.user?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
        )}
        <span className="fw-semibold d-none d-lg-inline text-dark">{session.user?.name?.split(' ')[0]}</span>
      </button>
      <ul className="dropdown-menu dropdown-menu-end shadow-lg" style={{ 
        borderRadius: '15px', 
        minWidth: '250px',
        border: 'none',
        marginTop: '10px'
      }}>
        <li className="px-3 py-3 border-bottom">
          <div className="d-flex align-items-center gap-2 mb-2">
            {session.user?.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || 'User'}
                width={50}
                height={50}
                className="rounded-circle"
                style={{ border: '2px solid #FF6B9D' }}
                unoptimized
              />
            ) : (
              <div
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{
                  width: '50px',
                  height: '50px',
                  background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '20px'
                }}
              >
                {session.user?.name?.charAt(0).toUpperCase() || 'U'}
              </div>
            )}
            <div>
              <div className="fw-bold">{session.user?.name}</div>
              <div className="small text-muted">{session.user?.email}</div>
            </div>
          </div>
        </li>
        <li>
          <a className="dropdown-item py-2 d-flex align-items-center gap-2" href="/dashboard">
            <span>📊</span>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item py-2 d-flex align-items-center gap-2" href="/profile">
            <span>👤</span>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item py-2 d-flex align-items-center gap-2" href="/subscriptions">
            <span>💳</span>
            <span>My Subscriptions</span>
          </a>
        </li>
        <li><hr className="dropdown-divider" /></li>
        <li>
          <a 
            className="dropdown-item py-2 text-danger d-flex align-items-center gap-2" 
            href="/auth/signout"
          >
            <span>🚪</span>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
