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
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h1 className="display-5 fw-bold mb-4">Get in Touch</h1>
            <p className="lead mb-4">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="mb-4">
              <h5><i className="bi bi-envelope-fill text-primary me-2"></i>Email</h5>
              <p className="text-muted">info@herwill.com</p>
            </div>

            <div className="mb-4">
              <h5><i className="bi bi-phone-fill text-primary me-2"></i>Phone</h5>
              <p className="text-muted">+91 98765 43210</p>
            </div>

            <div className="mb-4">
              <h5><i className="bi bi-clock-fill text-primary me-2"></i>Business Hours</h5>
              <p className="text-muted">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3 className="mb-4">Send us a Message</h3>

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
                    className="btn btn-primary w-100"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
