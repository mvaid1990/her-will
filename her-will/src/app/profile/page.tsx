'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Profile() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
  });
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin?callbackUrl=/profile');
    }
  }, [status, router]);

  useEffect(() => {
    if (session?.user) {
      setFormData({
        name: session.user.name || '',
        email: session.user.email || '',
        phone: session.user.phone || '',
        age: session.user.age?.toString() || '',
      });
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const response = await fetch('/api/users/update', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: session?.user?.email,
          ...formData,
        }),
      });

      if (response.ok) {
        setMessage('Profile updated successfully!');
      } else {
        setMessage('Failed to update profile');
      }
    } catch (error) {
      setMessage('Error updating profile');
    } finally {
      setSaving(false);
    }
  };

  if (status === 'loading') {
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

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={{minHeight: '40vh', padding: '80px 0'}}>
        <div className="container text-center">
          <div className="animate-fadeInDown">
            <span className="badge-custom mb-3">👤 My Profile</span>
          </div>
          <h1 className="display-3 fw-bold mb-4 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
            Your <span className="gradient-text">Profile</span>
          </h1>
          <div className="divider" style={{background: 'white'}}></div>
          <p className="lead mb-0 animate-fadeInUp" style={{fontSize: '1.3rem', animationDelay: '0.4s'}}>
            Manage your personal information
          </p>
        </div>
      </section>

      <div className="section-padding bg-pattern">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {/* Profile Card */}
              <div className="card mb-4" style={{border: 'none', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)'}}>
                <div className="card-body p-5">
                  {/* Profile Header */}
                  <div className="text-center mb-5">
                    {session.user?.image ? (
                      <Image
                        src={session.user.image}
                        alt={session.user.name || 'User'}
                        width={120}
                        height={120}
                        className="rounded-circle mb-3"
                        style={{ border: '4px solid #FF6B9D' }}
                        unoptimized
                      />
                    ) : (
                      <div
                        className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{
                          width: '120px',
                          height: '120px',
                          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '48px'
                        }}
                      >
                        {session.user?.name?.charAt(0).toUpperCase() || 'U'}
                      </div>
                    )}
                    <h3 className="fw-bold mb-2">{session.user?.name}</h3>
                    <p className="text-muted">{session.user?.email}</p>
                  </div>

                  {/* Success/Error Message */}
                  {message && (
                    <div className={`alert ${message.includes('success') ? 'alert-success' : 'alert-danger'}`} role="alert">
                      {message}
                    </div>
                  )}

                  {/* Profile Form */}
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fw-semibold">Full Name</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={{borderRadius: '15px'}}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-semibold">Email Address</label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        id="email"
                        value={formData.email}
                        disabled
                        style={{borderRadius: '15px', background: '#f8f9fa'}}
                      />
                      <small className="text-muted">Email cannot be changed</small>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control form-control-lg"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{borderRadius: '15px'}}
                      />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="age" className="form-label fw-semibold">Age</label>
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="age"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        placeholder="25"
                        min="10"
                        max="100"
                        style={{borderRadius: '15px'}}
                      />
                    </div>

                    <div className="d-grid gap-3">
                      <button
                        type="submit"
                        className="btn btn-lg"
                        disabled={saving}
                        style={{
                          background: 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)',
                          border: 'none',
                          borderRadius: '50px',
                          color: 'white',
                          fontWeight: '700',
                          padding: '15px',
                          boxShadow: '0 4px 15px rgba(255, 107, 157, 0.4)'
                        }}
                      >
                        {saving ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Saving...
                          </>
                        ) : (
                          '💾 Save Changes'
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* Account Info */}
              <div className="card" style={{border: 'none', borderRadius: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.1)'}}>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">Account Information</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="p-3 rounded" style={{background: '#f8f9fa'}}>
                        <div className="small text-muted mb-1">Account Type</div>
                        <div className="fw-semibold">Google Account</div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="p-3 rounded" style={{background: '#f8f9fa'}}>
                        <div className="small text-muted mb-1">Member Since</div>
                        <div className="fw-semibold">{new Date().toLocaleDateString()}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
