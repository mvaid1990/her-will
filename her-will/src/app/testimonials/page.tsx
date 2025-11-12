'use client';

import { useEffect, useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  weight_lost: number;
  created_at: string;
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      setTestimonials(data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`bi bi-star${i < rating ? '-fill' : ''} text-warning`}
      ></i>
    ));
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
          <h1 className="display-4 fw-bold">Success Stories</h1>
          <p className="lead">Real women, real transformations</p>
        </div>

        {testimonials.length === 0 ? (
          <div className="alert alert-info text-center">
            <h5>No testimonials yet</h5>
            <p className="mb-0">Be the first to share your success story!</p>
          </div>
        ) : (
          <div className="row g-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="col-md-6 col-lg-4">
                <div className="testimonial-card">
                  <div className="mb-3">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="mb-3">"{testimonial.content}"</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-0">{testimonial.name}</h6>
                      {testimonial.weight_lost > 0 && (
                        <small className="text-success">
                          Lost {testimonial.weight_lost} kg
                        </small>
                      )}
                    </div>
                    <div className="text-end">
                      <small className="text-muted">
                        {new Date(testimonial.created_at).toLocaleDateString()}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-5 text-center">
          <div className="p-5 bg-primary text-white rounded">
            <h2 className="mb-3">Ready to Write Your Success Story?</h2>
            <p className="lead mb-4">Join thousands of women transforming their lives</p>
            <a href="/signup" className="btn btn-light btn-lg">Get Started Today</a>
          </div>
        </div>
      </div>
    </div>
  );
}
