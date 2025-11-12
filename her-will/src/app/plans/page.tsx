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
    <div className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold">Choose Your Plan</h1>
          <p className="lead">Start your transformation journey today</p>
        </div>

        <div className="row g-4">
          {plans.map((plan, index) => (
            <div key={plan.id} className="col-md-6 col-lg-4">
              <div className={`card plan-card p-4 ${index === 0 ? 'featured' : ''}`}>
                <div className="card-body">
                  <h3 className="card-title text-center mb-3">{plan.name}</h3>
                  <div className="text-center mb-4">
                    <span className="display-4 fw-bold text-primary">₹{plan.price}</span>
                    <span className="text-muted">/month</span>
                  </div>
                  <p className="text-muted text-center mb-4">{plan.description}</p>
                  
                  <ul className="list-unstyled mb-4">
                    {plan.features && plan.features.map((feature, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/signup" className="btn btn-primary w-100">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 p-4 bg-light rounded">
          <h3 className="mb-3">What You Get</h3>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>Daily live workout sessions</li>
                <li>Personalized diet plans</li>
                <li>Expert guidance and support</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>Community challenges with prizes</li>
                <li>Progress tracking tools</li>
                <li>Flexible, cancel anytime</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
