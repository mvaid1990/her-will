'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Subscription {
  id: number;
  plan_name: string;
  amount: number;
  start_date: string;
  end_date: string;
  status: string;
  payment_id: string;
  payment_status: string;
  duration_days: number;
}

export default function Subscriptions() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/subscriptions');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user?.id) {
      fetchSubscriptions();
    }
  }, [session]);

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch(`/api/subscriptions?userId=${session?.user?.id}`);
      if (response.ok) {
        const data = await response.json();
        setSubscriptions(data);
      }
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    } finally {
      setLoading(false);
    }
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  const getStatusBadge = (status: string) => {
    const badges: { [key: string]: { bg: string; text: string } } = {
      active: { bg: '#28A745', text: 'Active' },
      expired: { bg: '#DC3545', text: 'Expired' },
      cancelled: { bg: '#6C757D', text: 'Cancelled' },
    };
    const badge = badges[status] || { bg: '#6C757D', text: status };
    return (
      <span className="badge" style={{ background: badge.bg, padding: '8px 16px', borderRadius: '50px' }}>
        {badge.text}
      </span>
    );
  };

  const getDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{minHeight: '40vh', padding: '80px 0'}}>
        <div className="container text-center">
          <div className="animate-fadeInDown">
            <span className="badge-custom mb-3">💳 My Subscriptions</span>
          </div>
          <h1 className="display-3 fw-bold mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Your <span className="gradient-text">Subscriptions</span>
          </h1>
          <div className="divider" style={{background: 'white'}}></div>
          <p className="lead mb-0 animate-fadeInUp" style={{fontSize: '1.3rem', animationDelay: '0.4s'}}>
            Manage your fitness plans and payment history
          </p>
        </div>
      </section>

      <div className="section-padding bg-pattern">
        <div className="container">
          {subscriptions.length === 0 ? (
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="card text-center p-5" style={{border: 'none', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)'}}>
                  <div style={{fontSize: '5rem', marginBottom: '1rem'}}>📦</div>
                  <h3 className="fw-bold mb-3">No Subscriptions Yet</h3>
                  <p className="text-muted mb-4">Start your fitness journey by choosing a plan!</p>
                  <Link href="/plans" className="btn btn-primary btn-lg px-5 py-3" style={{borderRadius: '50px'}}>
                    🚀 Browse Plans
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Active Subscriptions */}
              {subscriptions.filter(sub => sub.status === 'active').length > 0 && (
                <div className="mb-5">
                  <h3 className="fw-bold mb-4">Active Subscriptions</h3>
                  <div className="row g-4">
                    {subscriptions.filter(sub => sub.status === 'active').map((subscription, index) => (
                      <div key={subscription.id} className="col-lg-6 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                        <div className="card h-100" style={{
                          border: 'none',
                          borderRadius: '20px',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                          background: 'linear-gradient(135deg, #fff 0%, #fff5f8 100%)',
                          position: 'relative',
                          overflow: 'hidden'
                        }}>
                          <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: '5px',
                            background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)'
                          }}></div>
                          <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                              <div>
                                <h4 className="fw-bold mb-2">{subscription.plan_name}</h4>
                                {getStatusBadge(subscription.status)}
                              </div>
                              <div className="text-end">
                                <div className="h3 fw-bold mb-0" style={{color: '#FF6B9D'}}>₹{subscription.amount}</div>
                              </div>
                            </div>
                            
                            <div className="row g-3 mb-3">
                              <div className="col-6">
                                <div className="small text-muted">Start Date</div>
                                <div className="fw-semibold">{new Date(subscription.start_date).toLocaleDateString()}</div>
                              </div>
                              <div className="col-6">
                                <div className="small text-muted">End Date</div>
                                <div className="fw-semibold">{new Date(subscription.end_date).toLocaleDateString()}</div>
                              </div>
                              <div className="col-6">
                                <div className="small text-muted">Duration</div>
                                <div className="fw-semibold">{subscription.duration_days} days</div>
                              </div>
                              <div className="col-6">
                                <div className="small text-muted">Days Remaining</div>
                                <div className="fw-semibold text-success">{getDaysRemaining(subscription.end_date)} days</div>
                              </div>
                            </div>

                            {subscription.payment_id && (
                              <div className="p-3 rounded mb-3" style={{background: '#f8f9fa'}}>
                                <div className="small text-muted">Payment ID</div>
                                <div className="small fw-semibold text-truncate">{subscription.payment_id}</div>
                              </div>
                            )}

                            <div className="d-grid">
                              <Link href="/sessions" className="btn btn-outline-primary">
                                Join Live Sessions
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Past Subscriptions */}
              {subscriptions.filter(sub => sub.status !== 'active').length > 0 && (
                <div>
                  <h3 className="fw-bold mb-4">Past Subscriptions</h3>
                  <div className="row g-4">
                    {subscriptions.filter(sub => sub.status !== 'active').map((subscription, index) => (
                      <div key={subscription.id} className="col-lg-6 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                        <div className="card h-100" style={{
                          border: 'none',
                          borderRadius: '20px',
                          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                          opacity: 0.8
                        }}>
                          <div className="card-body p-4">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                              <div>
                                <h5 className="fw-bold mb-2">{subscription.plan_name}</h5>
                                {getStatusBadge(subscription.status)}
                              </div>
                              <div className="text-end">
                                <div className="h4 fw-bold mb-0 text-muted">₹{subscription.amount}</div>
                              </div>
                            </div>
                            
                            <div className="row g-3">
                              <div className="col-6">
                                <div className="small text-muted">Start Date</div>
                                <div className="fw-semibold">{new Date(subscription.start_date).toLocaleDateString()}</div>
                              </div>
                              <div className="col-6">
                                <div className="small text-muted">End Date</div>
                                <div className="fw-semibold">{new Date(subscription.end_date).toLocaleDateString()}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Renew CTA */}
              <div className="mt-5 text-center p-5 rounded" style={{
                background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                color: 'white'
              }}>
                <div className="mb-3" style={{fontSize: '3rem'}}>🎯</div>
                <h3 className="fw-bold mb-3">Want to Continue Your Journey?</h3>
                <p className="lead mb-4">Explore our plans and keep transforming!</p>
                <Link href="/plans" className="btn btn-light btn-lg px-5 py-3" style={{borderRadius: '50px', fontWeight: '700'}}>
                  View All Plans
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
