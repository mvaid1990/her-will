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
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Live Sessions</h1>
          <p className="lead">Join our expert-led fitness sessions</p>
        </div>

        {sessions.length === 0 ? (
          <div className="alert alert-info text-center">
            <h5>No upcoming sessions scheduled</h5>
            <p className="mb-0">Check back soon for new sessions!</p>
          </div>
        ) : (
          <div className="row g-4">
            {sessions.map((session) => (
              <div key={session.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    {session.is_live && (
                      <span className="badge bg-danger mb-2">
                        <i className="bi bi-broadcast me-1"></i>LIVE
                      </span>
                    )}
                    <h5 className="card-title">{session.title}</h5>
                    <p className="card-text text-muted">{session.description}</p>
                    
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
                    
                    <button className="btn btn-primary w-100">Join Session</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
