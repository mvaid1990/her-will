'use client';

import { useEffect, useState } from 'react';

interface Challenge {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  prize_amount: number;
  rules: string[];
}

export default function ChallengesPage() {
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchChallenges();
  }, []);

  const fetchChallenges = async () => {
    try {
      const response = await fetch('/api/challenges');
      const data = await response.json();
      setChallenges(data);
    } catch (error) {
      console.error('Error fetching challenges:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
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
          <h1 className="display-4 fw-bold">Fitness Challenges</h1>
          <p className="lead">Compete, win prizes, and stay motivated!</p>
        </div>

        {challenges.length === 0 ? (
          <div className="alert alert-info text-center">
            <h5>No active challenges at the moment</h5>
            <p className="mb-0">New challenges coming soon!</p>
          </div>
        ) : (
          <div className="row g-4">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="col-md-6">
                <div className="card h-100 shadow-sm border-primary">
                  <div className="card-header bg-primary text-white">
                    <h4 className="mb-0">{challenge.title}</h4>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{challenge.description}</p>
                    
                    <div className="mb-3">
                      <h6 className="text-primary">Prize Money</h6>
                      <p className="h3 text-success mb-0">₹{challenge.prize_amount}</p>
                    </div>
                    
                    <div className="mb-3">
                      <h6 className="text-primary">Duration</h6>
                      <p className="mb-0">
                        <i className="bi bi-calendar-check me-2"></i>
                        {formatDate(challenge.start_date)} - {formatDate(challenge.end_date)}
                      </p>
                    </div>
                    
                    {challenge.rules && challenge.rules.length > 0 && (
                      <div className="mb-3">
                        <h6 className="text-primary">Rules</h6>
                        <ul className="small">
                          {challenge.rules.map((rule, idx) => (
                            <li key={idx}>{rule}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <button className="btn btn-primary w-100">Join Challenge</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 p-4 bg-light rounded">
          <h3 className="mb-3">How Challenges Work</h3>
          <div className="row">
            <div className="col-md-3 text-center mb-3">
              <div className="feature-icon mx-auto mb-3">1</div>
              <h5>Join</h5>
              <p className="small text-muted">Sign up for a challenge</p>
            </div>
            <div className="col-md-3 text-center mb-3">
              <div className="feature-icon mx-auto mb-3">2</div>
              <h5>Track</h5>
              <p className="small text-muted">Log your progress daily</p>
            </div>
            <div className="col-md-3 text-center mb-3">
              <div className="feature-icon mx-auto mb-3">3</div>
              <h5>Compete</h5>
              <p className="small text-muted">See your ranking</p>
            </div>
            <div className="col-md-3 text-center mb-3">
              <div className="feature-icon mx-auto mb-3">4</div>
              <h5>Win</h5>
              <p className="small text-muted">Earn prizes!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
