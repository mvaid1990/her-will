'use client';

import { useEffect, useState } from 'react';

interface Session {
  id: number;
  title: string;
  description: string;
  session_date: string;
  duration_minutes: number;
  instructor_name: string;
  session_type: string;
  is_live: boolean;
}

export default function SessionsPage() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const response = await fetch('/api/sessions');
      const data = await response.json();
      setSessions(data);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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
            <span className="badge-custom mb-3">🎥 Live & On-Demand</span>
          </div>
          <h1 className="display-3 fw-bold mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Live <span className="gradient-text">Fitness Sessions</span>
          </h1>
          <div className="divider" style={{background: 'white'}}></div>
          <p className="lead mb-0 animate-fadeInUp" style={{fontSize: '1.3rem', animationDelay: '0.4s'}}>
            Join expert-led workouts from the comfort of your home
          </p>
        </div>
      </section>

      <div className="section-padding bg-pattern">
        <div className="container">

          {sessions.length === 0 ? (
            <div className="alert alert-info text-center p-5 rounded" style={{background: 'white', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)'}}>
              <div style={{fontSize: '4rem', marginBottom: '1rem'}}>📅</div>
              <h5 className="fw-bold">No upcoming sessions scheduled</h5>
              <p className="mb-0 text-muted">Check back soon for new sessions!</p>
            </div>
          ) : (
            <div className="row g-4">
              {sessions.map((session, index) => (
                <div key={session.id} className="col-md-6 col-lg-4 animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="card h-100 card-hover" style={{border: 'none', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                    <div className="card-body p-4">
                      {session.is_live && (
                        <span className="badge mb-3" style={{
                          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                          padding: '8px 16px',
                          borderRadius: '50px',
                          fontSize: '0.85rem',
                          fontWeight: '700',
                          animation: 'pulse 2s infinite'
                        }}>
                          🔴 LIVE NOW
                        </span>
                      )}
                      <h5 className="card-title fw-bold mb-3">{session.title}</h5>
                      <p className="card-text text-muted mb-4">{session.description}</p>
                    
                    <div className="mb-2">
                      <i className="bi bi-calendar-event text-primary me-2"></i>
                      <small>{formatDate(session.session_date)}</small>
                    </div>
                    
                    <div className="mb-2">
                      <i className="bi bi-clock text-primary me-2"></i>
                      <small>{session.duration_minutes} minutes</small>
                    </div>
                    
                    <div className="mb-2">
                      <i className="bi bi-person text-primary me-2"></i>
                      <small>{session.instructor_name}</small>
                    </div>
                    
                    <div className="mb-3">
                      <span className="badge bg-secondary">{session.session_type}</span>
                    </div>
                    
                      <button className="btn w-100 py-3" style={{
                        background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                        border: 'none',
                        borderRadius: '50px',
                        color: 'white',
                        fontWeight: '700',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)'
                      }}>
                        {session.is_live ? '🎥 Join Live Now' : '📅 Book Session'}
                      </button>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
