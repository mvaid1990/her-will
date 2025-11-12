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
}

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/dashboard');
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

  const activeSubscription = subscriptions.find(sub => sub.status === 'active');

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{minHeight: '40vh', padding: '80px 0'}}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3 animate-fadeInUp">
            Welcome back, <span className="gradient-text">{session.user?.name?.split(' ')[0]}!</span>
          </h1>
          <p className="lead mb-0 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Your fitness journey dashboard
          </p>
        </div>
      </section>

      <div className="section-padding bg-pattern">
        <div className="container">
          {/* Stats Cards */}
          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card card-hover h-100" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <div className="card-body p-4 text-center">
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>💪</div>
                  <h3 className="fw-bold mb-2">{subscriptions.length}</h3>
                  <p className="text-muted mb-0">Total Subscriptions</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-hover h-100" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <div className="card-body p-4 text-center">
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔥</div>
                  <h3 className="fw-bold mb-2">{activeSubscription ? 'Active' : 'Inactive'}</h3>
                  <p className="text-muted mb-0">Current Status</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-hover h-100" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <div className="card-body p-4 text-center">
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🎯</div>
                  <h3 className="fw-bold mb-2">
                    {activeSubscription ? new Date(activeSubscription.end_date).toLocaleDateString() : 'N/A'}
                  </h3>
                  <p className="text-muted mb-0">Plan Expires</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="row g-4 mb-5">
            <div className="col-12">
              <h3 className="fw-bold mb-4">Quick Actions</h3>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link href="/sessions" className="text-decoration-none">
                <div className="card card-hover h-100" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
                  <div className="card-body p-4 text-center">
                    <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🎥</div>
                    <h5 className="fw-bold">Join Session</h5>
                    <p className="text-muted small mb-0">Live workouts</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link href="/plans" className="text-decoration-none">
                <div className="card card-hover h-100" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
                  <div className="card-body p-4 text-center">
                    <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>💳</div>
                    <h5 className="fw-bold">View Plans</h5>
                    <p className="text-muted small mb-0">Upgrade plan</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link href="/challenges" className="text-decoration-none">
                <div className="card card-hover h-100" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
                  <div className="card-body p-4 text-center">
                    <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>🏆</div>
                    <h5 className="fw-bold">Challenges</h5>
                    <p className="text-muted small mb-0">Win prizes</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link href="/profile" className="text-decoration-none">
                <div className="card card-hover h-100" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', cursor: 'pointer'}}>
                  <div className="card-body p-4 text-center">
                    <div style={{fontSize: '2.5rem', marginBottom: '1rem'}}>👤</div>
                    <h5 className="fw-bold">Profile</h5>
                    <p className="text-muted small mb-0">Edit details</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Active Subscription */}
          {activeSubscription && (
            <div className="row">
              <div className="col-12">
                <h3 className="fw-bold mb-4">Active Subscription</h3>
                <div className="card" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', background: 'linear-gradient(135deg, #fff 0%, #fff5f8 100%)'}}>
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <h4 className="fw-bold mb-2">{activeSubscription.plan_name}</h4>
                        <p className="text-muted mb-2">
                          <strong>Started:</strong> {new Date(activeSubscription.start_date).toLocaleDateString()}
                        </p>
                        <p className="text-muted mb-0">
                          <strong>Expires:</strong> {new Date(activeSubscription.end_date).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="col-md-4 text-md-end mt-3 mt-md-0">
                        <div className="h2 fw-bold mb-2" style={{color: '#FF6B9D'}}>₹{activeSubscription.amount}</div>
                        <Link href="/subscriptions" className="btn btn-outline-primary">
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* No Active Subscription */}
          {!activeSubscription && (
            <div className="row">
              <div className="col-12">
                <div className="card text-center p-5" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                  <div style={{fontSize: '4rem', marginBottom: '1rem'}}>🎯</div>
                  <h4 className="fw-bold mb-3">No Active Subscription</h4>
                  <p className="text-muted mb-4">Start your fitness journey today!</p>
                  <Link href="/plans" className="btn btn-primary btn-lg px-5 py-3" style={{borderRadius: '50px'}}>
                    View Plans
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
