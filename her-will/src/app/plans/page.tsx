'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Plan {
  id: number;
  name: string;
  price: number;
  duration_days: number;
  description: string;
  features: string[];
}

export default function PlansPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const response = await fetch('/api/plans');
      const data = await response.json();
      setPlans(data);
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{minHeight: '40vh', padding: '80px 0'}}>
        <div className="container text-center">
          <div className="animate-fadeInDown">
            <span className="badge-custom mb-3">💰 Affordable Pricing</span>
          </div>
          <h1 className="display-3 fw-bold mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Choose Your <span className="gradient-text">Perfect Plan</span>
          </h1>
          <div className="divider" style={{background: 'white'}}></div>
          <p className="lead mb-0 animate-fadeInUp" style={{fontSize: '1.3rem', animationDelay: '0.4s'}}>
            Start your transformation journey today - Cancel anytime, No hidden fees
          </p>
        </div>
      </section>

      <div className="section-padding bg-pattern">
        <div className="container">

          <div className="row g-4 justify-content-center">
            {plans.map((plan, index) => (
              <div key={plan.id} className="col-md-6 col-lg-4 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <div className={`card plan-card p-4 h-100 ${index === 0 ? 'featured' : ''}`} style={{
                  transform: index === 0 ? 'scale(1.05)' : 'scale(1)',
                  zIndex: index === 0 ? 10 : 1,
                  marginTop: index === 0 ? '30px' : '0',
                  position: 'relative',
                  overflow: 'visible'
                }}>
                  {index === 0 && (
                    <div style={{
                      position: 'absolute',
                      top: '-15px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      zIndex: 20
                    }}>
                      <span className="badge" style={{
                        background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                        padding: '8px 20px',
                        borderRadius: '50px',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)',
                        whiteSpace: 'nowrap'
                      }}>
                        ⭐ MOST POPULAR
                      </span>
                    </div>
                  )}
                  <div className="card-body text-center">
                    <div className="mb-3" style={{fontSize: '3rem'}}>
                      {index === 0 ? '🔥' : index === 1 ? '💪' : index === 2 ? '🏆' : '✨'}
                    </div>
                    <h3 className="card-title fw-bold mb-3" style={{fontSize: '1.5rem'}}>{plan.name}</h3>
                    <div className="mb-4">
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <span className="display-4 fw-bold" style={{
                          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent'
                        }}>₹{plan.price}</span>
                        <span className="text-muted ms-2">/month</span>
                      </div>
                      <small className="text-muted">{plan.duration_days} days access</small>
                    </div>
                    <p className="text-muted mb-4">{plan.description}</p>
                    
                    <ul className="list-unstyled text-start mb-4">
                      {plan.features && plan.features.map((feature, idx) => (
                        <li key={idx} className="mb-3 d-flex align-items-start">
                          <span className="me-2" style={{
                            color: '#28A745',
                            fontSize: '1.2rem',
                            minWidth: '24px'
                          }}>✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href="/signup" className="btn w-100 py-3" style={{
                      background: index === 0 ? 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)' : 'transparent',
                      border: index === 0 ? 'none' : '2px solid #FF6B9D',
                      color: index === 0 ? 'white' : '#FF6B9D',
                      borderRadius: '50px',
                      fontWeight: '700',
                      fontSize: '1.05rem',
                      transition: 'all 0.3s ease',
                      boxShadow: index === 0 ? '0 4px 15px rgba(255, 107, 157, 0.4)' : 'none'
                    }}>
                      {index === 0 ? '🚀 Get Started Now' : 'Choose Plan'}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-5 rounded" style={{
            background: 'white',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            borderRadius: '20px'
          }}>
            <div className="text-center mb-4">
              <h3 className="fw-bold mb-2">All Plans Include</h3>
              <div className="divider"></div>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-3" style={{fontSize: '2.5rem'}}>🏋️</div>
                  <h5 className="fw-bold mb-2">Live Workouts</h5>
                  <p className="text-muted small">Daily live sessions with expert trainers</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-3" style={{fontSize: '2.5rem'}}>🥗</div>
                  <h5 className="fw-bold mb-2">Diet Plans</h5>
                  <p className="text-muted small">Personalized nutrition guidance</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-3" style={{fontSize: '2.5rem'}}>🏆</div>
                  <h5 className="fw-bold mb-2">Challenges</h5>
                  <p className="text-muted small">Win prizes up to ₹10,000</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-3" style={{fontSize: '2.5rem'}}>👥</div>
                  <h5 className="fw-bold mb-2">Community</h5>
                  <p className="text-muted small">Supportive women's fitness community</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-3" style={{fontSize: '2.5rem'}}>📊</div>
                  <h5 className="fw-bold mb-2">Progress Tracking</h5>
                  <p className="text-muted small">Monitor your transformation journey</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="text-center">
                  <div className="mb-3" style={{fontSize: '2.5rem'}}>🔄</div>
                  <h5 className="fw-bold mb-2">Flexible</h5>
                  <p className="text-muted small">Cancel anytime, no questions asked</p>
                </div>
              </div>
            </div>
          </div>

          {/* Money Back Guarantee */}
          <div className="mt-5 text-center p-5 rounded" style={{
            background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
            color: 'white'
          }}>
            <div className="mb-3" style={{fontSize: '3rem'}}>✅</div>
            <h3 className="fw-bold mb-3">30-Day Money-Back Guarantee</h3>
            <p className="lead mb-4">Not satisfied? Get a full refund within 30 days, no questions asked!</p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <div className="px-4 py-2 bg-white bg-opacity-25 rounded-pill">
                <strong>💳 Secure Payment</strong>
              </div>
              <div className="px-4 py-2 bg-white bg-opacity-25 rounded-pill">
                <strong>🔒 SSL Encrypted</strong>
              </div>
              <div className="px-4 py-2 bg-white bg-opacity-25 rounded-pill">
                <strong>✅ Instant Access</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
