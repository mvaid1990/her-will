'use client';

import { signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SignOut() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          signOut({ callbackUrl: '/' });
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSignOutNow = () => {
    signOut({ callbackUrl: '/' });
  };

  const handleCancel = () => {
    window.history.back();
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-pattern">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5">
            <div className="card shadow-lg" style={{
              borderRadius: '25px',
              border: 'none',
              overflow: 'hidden'
            }}>
              {/* Header */}
              <div className="text-center p-5" style={{
                background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                color: 'white'
              }}>
                <div className="mb-3">
                  <Image src="/logo.svg" alt="HER-WILL" width={80} height={80} />
                </div>
                <h2 className="fw-bold mb-2">Sign Out</h2>
                <p className="mb-0">Are you sure you want to leave?</p>
              </div>

              {/* Body */}
              <div className="card-body p-5 text-center">
                <div className="mb-4" style={{ fontSize: '4rem' }}>
                  👋
                </div>
                
                <h4 className="fw-bold mb-3">Come back soon!</h4>
                <p className="text-muted mb-4">
                  You'll be signed out in <strong className="text-primary" style={{ fontSize: '1.5rem' }}>{countdown}</strong> seconds
                </p>

                {/* Action Buttons */}
                <div className="d-grid gap-3">
                  <button
                    onClick={handleSignOutNow}
                    className="btn btn-lg"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                      border: 'none',
                      borderRadius: '50px',
                      color: 'white',
                      fontWeight: '700',
                      padding: '15px',
                      boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)'
                    }}
                  >
                    🚪 Sign Out Now
                  </button>
                  
                  <button
                    onClick={handleCancel}
                    className="btn btn-outline-secondary btn-lg"
                    style={{
                      borderRadius: '50px',
                      fontWeight: '600',
                      padding: '15px'
                    }}
                  >
                    ← Stay Signed In
                  </button>
                </div>

                {/* Info Box */}
                <div className="mt-4 p-4 rounded" style={{ background: '#f8f9fa' }}>
                  <h6 className="fw-bold mb-3">What happens when you sign out?</h6>
                  <ul className="list-unstyled text-start mb-0 small">
                    <li className="mb-2">
                      <span className="text-muted me-2">•</span>
                      Your session will be cleared
                    </li>
                    <li className="mb-2">
                      <span className="text-muted me-2">•</span>
                      You'll need to sign in again to access your account
                    </li>
                    <li className="mb-2">
                      <span className="text-muted me-2">•</span>
                      Your subscriptions and data remain safe
                    </li>
                    <li className="mb-0">
                      <span className="text-muted me-2">•</span>
                      You can sign back in anytime
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
