'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          age: formData.age ? parseInt(formData.age) : null
        })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome to HER-WILL! Your account has been created successfully.');
        setTimeout(() => {
          router.push('/plans');
        }, 2000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Join HER-WILL Today</h2>
                <p className="text-center text-muted mb-4">
                  Start your fitness journey for just ₹99/month
                </p>

                {status === 'success' && (
                  <div className="alert alert-success" role="alert">
                    {message}
                  </div>
                )}

                {status === 'error' && (
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      id="age"
                      min="10"
                      max="100"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                  </div>

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="terms" required />
                    <label className="form-check-label" htmlFor="terms">
                      I agree to the Terms & Conditions and Privacy Policy
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 mb-3"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Creating Account...' : 'Create Account'}
                  </button>

                  <p className="text-center text-muted small mb-0">
                    Already have an account? <a href="/login" className="text-primary">Login here</a>
                  </p>
                </form>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white rounded shadow-sm">
              <h5 className="mb-3">What happens next?</h5>
              <ol className="mb-0">
                <li>Choose your preferred plan</li>
                <li>Complete the payment</li>
                <li>Get instant access to live sessions</li>
                <li>Start your transformation journey!</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
