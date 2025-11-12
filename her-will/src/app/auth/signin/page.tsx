'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

export default function SignIn() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

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
                <h2 className="fw-bold mb-2">Welcome to HER-WILL</h2>
                <p className="mb-0">Sign in to start your fitness journey</p>
              </div>

              {/* Body */}
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h5 className="fw-bold mb-3">Sign in with</h5>
                </div>

                {/* Google Sign In Button */}
                <button
                  onClick={() => signIn('google', { callbackUrl })}
                  className="btn btn-lg w-100 d-flex align-items-center justify-content-center gap-3 mb-3"
                  style={{
                    border: '2px solid #e0e0e0',
                    borderRadius: '50px',
                    padding: '15px',
                    background: 'white',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FF6B9D';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 157, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e0e0e0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="fw-semibold" style={{color: '#333'}}>Continue with Google</span>
                </button>

                {/* Benefits */}
                <div className="mt-4 p-4 rounded" style={{background: '#f8f9fa'}}>
                  <h6 className="fw-bold mb-3">Why sign in?</h6>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <span className="text-success me-2">✓</span>
                      Track your fitness progress
                    </li>
                    <li className="mb-2">
                      <span className="text-success me-2">✓</span>
                      Access personalized plans
                    </li>
                    <li className="mb-2">
                      <span className="text-success me-2">✓</span>
                      Join live sessions
                    </li>
                    <li className="mb-0">
                      <span className="text-success me-2">✓</span>
                      Manage your subscriptions
                    </li>
                  </ul>
                </div>

                {/* Privacy Note */}
                <p className="text-center text-muted small mt-4 mb-0">
                  By signing in, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
