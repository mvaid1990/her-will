import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h1 className="display-3 fw-bold mb-4">Transform Your Life with HER-WILL</h1>
              <p className="lead mb-4">
                India's most empowering and affordable women's wellness platform. 
                Lose up to 4 kilos in 30 days for just ₹99!
              </p>
              <div className="d-flex gap-3">
                <Link href="/plans" className="btn btn-light btn-lg">View Plans</Link>
                <Link href="/signup" className="btn btn-outline-light btn-lg">Join Now</Link>
              </div>
            </div>
            <div className="col-lg-6">
              <Image 
                src="/logo.svg" 
                alt="HER-WILL" 
                width={400} 
                height={400}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Active Members</span>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Live Sessions</span>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <span className="stat-number">4kg</span>
                <span className="stat-label">Avg. Weight Loss</span>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <span className="stat-number">₹99</span>
                <span className="stat-label">Per Month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What's Included in the ₹99 Plan</h2>
            <p className="section-subtitle">Everything you need for a complete transformation</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card feature-card p-4">
                <div className="feature-icon">💪</div>
                <h4 className="mb-3">30 Days of Live Sessions</h4>
                <p>Daily live workouts with certified coaches using international training standards. Safe and effective for all fitness levels.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card feature-card p-4">
                <div className="feature-icon">🥗</div>
                <h4 className="mb-3">Customized Diet Plans</h4>
                <p>Get personalized diet charts with simple, home-cooked food. No fancy diets, no starvation, just results!</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card feature-card p-4">
                <div className="feature-icon">🧠</div>
                <h4 className="mb-3">Lifestyle & Mindset Guides</h4>
                <p>Build better habits, manage time, and stay consistent with expert guidance and motivation.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card feature-card p-4">
                <div className="feature-icon">🌱</div>
                <h4 className="mb-3">Gut Reset Plan</h4>
                <p>Improve digestion, metabolism, and energy levels with our structured gut-healing program.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card feature-card p-4">
                <div className="feature-icon">👩‍⚕️</div>
                <h4 className="mb-3">Live Expert Discussions</h4>
                <p>Interactive Q&A sessions with fitness and wellness experts. Clear your doubts and stay accountable.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card feature-card p-4">
                <div className="feature-icon">🏆</div>
                <h4 className="mb-3">Competitions with Prizes</h4>
                <p>Join monthly challenges, win exciting rewards, and stay motivated throughout your journey.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Why Choose HER-WILL?</h2>
            <p className="section-subtitle">Empowering women through fitness and wellness</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle p-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    ✓
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5>Science-Backed Programs</h5>
                  <p>Created by Level-5 certified trainers using international standards</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle p-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    ✓
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5>For All Ages</h5>
                  <p>Designed for women aged 10 to 70 - everyone is welcome!</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle p-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    ✓
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5>Affordable & Accessible</h5>
                  <p>Just ₹99 per month - fitness for everyone, anywhere, anytime</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle p-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    ✓
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5>Supportive Community</h5>
                  <p>Join a movement of strong, confident women transforming their lives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container text-center">
          <h2 className="display-4 fw-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="lead mb-4">Join thousands of women who are already on their fitness journey</p>
          <Link href="/signup" className="btn btn-light btn-lg">Get Started for ₹99</Link>
        </div>
      </section>
    </>
  );
}
