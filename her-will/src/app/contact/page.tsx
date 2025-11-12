'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to submit form. Please try again.');
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="hero-section" style={{minHeight: '40vh', padding: '80px 0'}}>
        <div className="container text-center">
          <div className="animate-fadeInDown">
            <span className="badge-custom mb-3">💬 Contact Us</span>
          </div>
          <h1 className="display-3 fw-bold mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <div className="divider" style={{background: 'white'}}></div>
          <p className="lead mb-0 animate-fadeInUp" style={{fontSize: '1.3rem', animationDelay: '0.4s'}}>
            We're here to help! Send us a message and we'll respond within 24 hours
          </p>
        </div>
      </section>

      <div className="section-padding bg-pattern">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5 mb-4">

              <div className="p-4 rounded mb-4" style={{background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <div className="d-flex align-items-start mb-4">
                  <div className="flex-shrink-0">
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>📧</div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="fw-bold mb-2">Email</h5>
                    <p className="text-muted mb-0">info@herwill.com</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded mb-4" style={{background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <div className="d-flex align-items-start mb-4">
                  <div className="flex-shrink-0">
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>📞</div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="fw-bold mb-2">Phone</h5>
                    <p className="text-muted mb-0">+91 98765 43210</p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded" style={{background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.1)'}}>
                <div className="d-flex align-items-start">
                  <div className="flex-shrink-0">
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem'
                    }}>⏰</div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="fw-bold mb-2">Business Hours</h5>
                    <p className="text-muted mb-0">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="card" style={{border: 'none', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)'}}>
                <div className="card-body p-5">
                  <h3 className="fw-bold mb-4">Send us a Message</h3>

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
                    <label htmlFor="name" className="form-label">Name *</label>
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
                    <label htmlFor="email" className="form-label">Email *</label>
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
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                    <button
                      type="submit"
                      className="btn w-100 py-3"
                      disabled={status === 'loading'}
                      style={{
                        background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                        border: 'none',
                        borderRadius: '50px',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '1.05rem',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)'
                      }}
                    >
                      {status === 'loading' ? '🔄 Sending...' : '🚀 Send Message'}
                    </button>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
